import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";



export const Setup_Next_app = (projectName:string):boolean =>{
    try {
        console.log("Creating new Next.js application using next cli integration : ");
        // add validation of project name / folder :
        if(!isValidProjectName(projectName)) return false;
        // call the actions :
        const newProjectName = projectName.toLocaleLowerCase();
        // time to create the command :
        const command = `bun create next-app ${newProjectName} --ts --eslint --tailwind --src-dir --app --turbopack --import-alias "@/components/*"`;
        // execute the command :
        execSync(command, { stdio: 'inherit'});        
        return true;   
    } catch (error) {
        console.log("error setting up a next template project using next cli integration :( ");
        return false;
    }    
};