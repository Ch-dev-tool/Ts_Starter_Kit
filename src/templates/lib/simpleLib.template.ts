import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";
import path from "path";
import { mkdirSync, writeFileSync } from "fs";



export const Setup_Simple_Lib_App = (projectName: string):boolean => {
    try {
        console.log("Simple lib template not found");
        const appName:string = path.basename(projectName);
        const directory:string = path.dirname(projectName);
        // time to validate the project name : 
        if(!isValidProjectName(projectName)) return false;
        // time to create a simple lib template :
        // create a folder :
        mkdirSync  (projectName, { recursive: true });
        // move to the directory :
        process.chdir(projectName);
        // run  setup command using bun :
        execSync(`bun init -y`);
        // install the dependencies : nodmon, typescript, eslint, prettier :
        execSync("bun add -d nodemon typescript eslint prettier @typescript-eslint/eslint-plugin");
        // time to to setup the project folder : 
        // create an app folder conatining the lib code :
        const directories:string[] = [
            "app",
            "app/utils",
            "app/modules",
            "app/types"
        ];
        directories.forEach(dir => {
            mkdirSync(dir, { recursive: true });
        });
        // create the main.ts file :
        const mainFileContent = `
            //import  utils form "./utils";
            // import modules from "./modules";
            // import types from "./types";

            export const main = () => {
                // start your code here :
            }
        `;
        // write the main file content :
        // create the file : 
        writeFileSync("app/main.ts", mainFileContent);
        // time to update the index ts file :
        const indexFileContent = `
            import { main } from "./app/main" 
            
            main();
        `;
        // write the index file content :
        writeFileSync("index.ts", indexFileContent);
        // setup eslint :
        const prettierConfig = `
         {
            "semi": true,
            "singleQuote": true,
            "trailingComma": "all",
            "printWidth": 80,
            "tabWidth": 2
        }
        `;
        // write the eslint config file :
        writeFileSync(".prettierrc", prettierConfig);
        // run lint command :
        execSync("bunx prettier --write app/main.ts index.ts");
        return true;
    } catch (error) {
        return false;
    }
};