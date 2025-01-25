import { Setup_Simple_Lib_App } from "./lib/simpleLib.template.js";






export const Setup_Lib_App = (flag: string, projectName: string) => {
    switch( flag){
        case "Simple":
            // call simple lib setup command : 
            const isSimpleSetup:boolean = Setup_Simple_Lib_App(projectName);
            if(!isSimpleSetup){
                console.error("Failed to setup a Simple lib project :( ");
                return;
            };
            break;
    }
};