import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";
import { execSync } from "child_process";
import { Copy_TsConfig } from "../../content/tsConfig.copy.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { Express_Env_Template, Express_Template } from "../../content/templates/express.template.js";

export const Setup_Express_App = (projectName: string): boolean => {
    try {
        console.log("Setting up Express application...");

        const appName = path.basename(projectName);
        const directory: string = path.dirname(projectName);
        // validate project name :
        if (!isValidProjectName(projectName)) return false;
        // create project folder if there is no folder with the same name:
        mkdirSync(directory, { recursive: true });
        // change the current directory to the project directory :
        process.chdir(directory);
        // change the current directory to the app directory :
        mkdirSync(appName, { recursive: true });
        process.chdir(appName);
        // setup bun express application  :
        execSync(`bun init -y`);
        // install dependencies :
        execSync("bun add express@next");
        execSync("bun add -d @types/express @types/node");
        // time to overwrite the tsconfig.json file :
        const rootProjectFolder = path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            "../../../");
        const tsConfigPath = path.join(rootProjectFolder,
             "src", 
             "content", 
             "templates", 
             "tsconfig.template.json"
        );

        const tsConfigTemplate = readFileSync(
            tsConfigPath,
            "utf-8"
        );

        writeFileSync("tsconfig.json", tsConfigTemplate);

        writeFileSync(".env", Express_Env_Template);
        writeFileSync(".env.dev", Express_Env_Template);
        // time to setup project folder :
        // create src folder :
        const srcPath = path.join(projectName, "src");
        mkdirSync(srcPath, { recursive: true });

        // create src/index.ts file :
        const indexPath = path.join(srcPath, "index.ts");
        writeFileSync(indexPath, Express_Template);

        // create additional directories :
        const directories:string[] = [
            "routes", 
            "controllers", 
            "services", 
            "middlewares", 
            "config/database", 
            "config/models"
        ];
        directories.forEach(dir => mkdirSync(path.join(srcPath, dir), { recursive: true }));
        console.log("Express application setup complete.");
        return true;
    } catch (error) {
        console.log("Error setting up Express application:", error);
        return false;
    }
};