import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";
import path from "path";
import { mkdirSync } from "fs";




export const Setup_Nest_App = (projectName:string):boolean =>{
    try{
        console.log("Creating new Nest application using nest/Cli integration : ");
        // check the project name :
        console.log(projectName);
        const appName = path.basename(projectName);
        const directory:string = path.dirname(projectName);
        
        if(!isValidProjectName(projectName)){
            return false;
        }
        // create the directory if is not exist :
        mkdirSync(directory, { recursive: true });
        // move to the directory and create the project :
        process.chdir(directory);
        // insallt nest cli 
        execSync(`bun add -g @nestjs/cli`);
        execSync(`nest new ${appName} --package-manager bun`, {stdio:"inherit"});
        return true;
    }catch( error ){
        console.log("error setting up a nest template project using nest cli integration ");
        console.log(error);
        return false;
    }
};