import { error } from "console";
import { setup_Gatsby_App } from "./static/gatsby.template.js";
import { Setup_Hugo_App } from "./static/hugo.template.js";
import { Setup_Astro_App } from "./static/astro.template.js";



export const Setup_Static_App = (flag:string, projectName:string) => {
        // call a switch case on the flag :
        switch(flag){
            case "Gatsby":
                const isGatsbySetup:boolean = setup_Gatsby_App(projectName);
                if(!isGatsbySetup){
                    console.error("Failed to setup a Gatsby static project :( ", error);
                    return;
                }
            break;
            case "Hugo":
                const isHugoSetup:boolean = Setup_Hugo_App(projectName);
                if(!isHugoSetup){
                    console.error("Failed to setup a Hugo static project :( ", error);
                    return;
                }
            break;
            case "Astro":
                const isAstroSetup:boolean = Setup_Astro_App(projectName);
                if(!isAstroSetup){
                    console.error("Failed to setup a Astro static project :( ", error);
                    return;
                }
            break;
            default:
                console.error("Static template not found");
                return;
        };
};

