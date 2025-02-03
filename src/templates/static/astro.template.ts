import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";

export const Setup_Astro_App = (projectName:string):boolean => {
    try{
    // validate the project name:
    if(!isValidProjectName(projectName)) return false;
    // setup a Astro project using cli
    console.log("Setting up Astro project using cli integration :) ");
    execSync(`bun create astro@latest  ${projectName} --template basics --typescript strict --no-install --no-git `, { stdio: 'inherit' });
    // time to enter the projet folder and install dependencies:
    process.chdir(projectName);
    execSync(`bun install`, { stdio: 'inherit' });
    return true;        
    }catch(error){
        console.log("Failed to setup a Astro static project :( ", error);
        return false
    }
};