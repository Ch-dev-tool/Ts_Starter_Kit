import { Setup_Nest_App } from "./back/nest.template.js";




export const Setup_Api = (flag:string,projectName:string)=>{
    // sitch over the flag :
    switch( flag ){
        case "Nest":
            // call nest js setup command : 
        const isNestSetup:boolean = Setup_Nest_App(projectName);
        if(!isNestSetup){
            console.error("Failed to setup a Nes backend :( ");
            return;
        }
        break;
        case "Express":
            // call express setup command : 
            console.log("Express setup is not supported yet");
            break;
    }
}