import { Setup_Next_app } from "./fullstack/next.template.js";




export const Setup_Full_App = (flag: string, projectName: string) => {
    switch( flag){
        case "Next":
            // call next js setup command : 
            const isNextSetup:boolean = Setup_Next_app(projectName);
            if(!isNextSetup){
                console.error("Failed to setup a Next.js fullstack project :( ");
                return;
            }
            break;
        case "Nuxt":
            // call nuxt js setup command : 
            break;
    }
};