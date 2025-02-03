import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";




export const Setup_Hugo_App = (projectName: string):boolean => {
    try {
        console.log("Setting up Hugo project using cli integration :) ");
        // check if is  a valid project name : 
        if(!isValidProjectName(projectName)) return false;
        // setup a Hugo project using cli:
        // step 1 install hugo cli :
        execSync(`winget install Hugo.Hugo.Extended`, { stdio: 'inherit' });
        // step 1.1 reinitialize the command prompt after Hugo installation:
        //execSync(`cmd /c "refreshenv"`, { stdio: 'inherit' });
        // step 2 create a new Hugo project :
        execSync(`hugo new site ${projectName}`, { stdio: 'inherit' });
        return true;
    } catch (error) {
        return false;
    }
}