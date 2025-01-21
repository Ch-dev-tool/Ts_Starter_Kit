import { mkdirSync } from "fs";
import path, { join } from "path";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";
import { execSync } from "child_process";
import { Copy_TsConfig } from "../../content/tsConfig.copy.js";



export const Setup_Express_App = (projectName:string):boolean =>{
    try {
        const appName = path.basename(projectName);
        const directory:string = path.dirname(projectName);
        // validate project name : 
        if(!isValidProjectName(projectName)) return false;
        // create project folder if there is no folder with the same name:
        mkdirSync(directory, { recursive: true });
        // change the current directory to the project directory :
        process.chdir(directory);
        // chnage the current directory to the app directory :
        mkdirSync(appName, { recursive: true });
        process.chdir(appName);
        // setup bun express application  :
        execSync(`bun init -y`);
        // install depandencies : 
        execSync("bun add express@next");
        execSync("bun add -d @types/express @types/node");
        // time to setup project folder : 
        // create src folder :
        mkdirSync("src", { recursive: true });
        const srcFolder = path.join(directory,appName,"src");
        Copy_TsConfig(srcFolder);
        // create src/index.ts file :
        // copy starter code to the index.ts file :
        // create tsconfig.json file :
        // copy content :
        // add router folder :
        // add controller folder :
        // add service folder :
        // add middleware folder :
        // add model folder :
        // add config folder (db conexion ... ):
        // add env file (dev and prod ):
        return true;
    } catch (error) {
        console.log("error setting up a express template project using express cli integration ");
        console.log(error);
        return false;
    }    
};