import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";


export const Setup_React_app = (projectName:string):boolean=>{
    try {
        // execute vite script to setup a new react ts project : 
        console.log("Creating new React typescript application using vite integration : ");

        // add validation of project name :
        if (!isValidProjectName(projectName)) {
            return false;
        }
        

        execSync(`bun create vite ${projectName} --template react-ts`, { stdio: 'inherit'});
        console.log('Installing dependencies...'); 
        execSync(`cd ${projectName} && bun install`, { stdio: 'inherit'});
        return true;   
    } catch (error) {
        console.log("error setting up a react template project using vite provider :( ");
        return false;
    }    
};