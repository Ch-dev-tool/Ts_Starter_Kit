import { Setup_Express_App } from "./back/express.template.js";
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
            const isExpressSetup:boolean = Setup_Express_App(projectName);
            if(!isExpressSetup){
                console.error("Failed to setup a Express backend :( ");
                return;
            }   
        break;
    }
};