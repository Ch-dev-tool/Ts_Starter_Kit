// a function take a folder -> create a tsconfig file and past the content there :
import fs, { mkdirSync } from "fs";
import { CreateFileFactory } from "../utils/factory/file.factory.js";
import path from "path";
import { fileURLToPath } from "url";

export const Copy_TsConfig = (folder: string): boolean => {
    // Ensure the folder exists
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    console.log("folder", __dirname);
    const tsConfigPath = path.join(__dirname, "templates", "tsconfig.template.json");
    console.log("tsConfigPath", tsConfigPath);
    const targetDirectory = path.resolve(folder);
    mkdirSync(targetDirectory, { recursive: true });

    const tsConfigContent = fs.readFileSync(tsConfigPath, "utf-8");
    console.table(tsConfigContent);
    // // // Create the file
     try {
         CreateFileFactory(folder, "tsconfig.json", tsConfigContent);
         return true;
     } catch (error) {
         console.log("Error creating tsconfig file:", error);
         return false;
    }
};
