import { execSync } from "child_process";




export const Setup_Nest_App = (projectName:string):boolean =>{
    try{
        console.log("Creating new Nest application using nest/Cli integration : ");
        // insallt nest cli 
        execSync(`bun add -g @nestjs/cli`);
        execSync(`nest new ${projectName}`, {stdio:"inherit"});
        return true;
    }catch( error ){
        console.log("error setting up a nest template project using nest cli integration ");
        return false;
    }
};