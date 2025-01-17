import { execSync } from "child_process";
import { isValidProjectName } from "../utils/facades/validatePath.facade.js";


export const Setup_Vue_app  = (projectName:string):boolean =>{
    try {
        console.log("Creating new Vue typescript application using vite integration : ");
        // add validation of project name / folder :
        if (!isValidProjectName(projectName)) {
            return false;
        }
        
        execSync(`bun create vite ${projectName} --template vue-ts`, { stdio: 'inherit'});
        console.log('Installing dependencies...'); 
        execSync(`cd ${projectName} && bun install`, { stdio: 'inherit'});
        return true;
    } catch (error) {
        console.log("error setting up a vue template project using vite provider :( ");
        return false;
    }
}