import fs from "fs";
import path from "path";

export const CreateFileFactory = (
    directory: string, 
    fileName: string, 
    content: string
): void => {
    const filePath = path.join(directory, fileName);
    fs.writeFileSync(filePath, content, "utf-8");
};