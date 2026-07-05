import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import fs from "node:fs/promises";
import path from "node:path";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      message: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const baseDir = path.join(process.cwd(), "open-portal-submissions", timestamp);
    
    await fs.mkdir(baseDir, { recursive: true });
    
    const filePath = path.join(baseDir, "data.txt");
    const content = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}\nTimestamp: ${new Date().toISOString()}\n`;
    
    await fs.writeFile(filePath, content, "utf-8");
    
    return { success: true, timestamp };
  });
