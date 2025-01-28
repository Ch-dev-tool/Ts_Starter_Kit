import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";
import path from "path";
import { mkdirSync } from "fs";

export const setup_Gatsby_App = (projectName: string):boolean => {
    try {
        console.log("Setting up Gatsby project using cli integration :) ");
        // check project name : 
        if(!isValidProjectName(projectName)) return false;
        // setup a Gatsby project using cli
        const appName = path.basename(projectName);
        const directory: string = path.dirname(projectName);
        // create the directory :
        mkdirSync(directory, { recursive: true });
        // create application folder : 
        process.chdir(directory);
        // install all dep :
        execSync(`bunx create-gatsby ${appName} -y -ts`, { stdio: 'inherit' });
        // kill the process after the task is complete
        process.exit(0);
        return true;
    } catch (error) {
        console.log("Failed to setup a Gatsby static project :( ");
        return false;
    }
}