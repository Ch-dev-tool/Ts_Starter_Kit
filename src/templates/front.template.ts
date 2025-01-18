import { Setup_Angular_app } from "./front/angular.template.js";
import { Setup_React_app } from "./front/react.template.js";
import { Setup_Vue_app } from "./front/vue.template.js";

export const Setup_Front_App = (flag: string, projectName: string) => {
    switch (flag) {
        case "React":
            const isReactSetup: boolean = Setup_React_app(projectName);
            if (!isReactSetup) {
                console.error("Failed to set up React application.");
                return;
            }
            break;
        case "Vue":
            // call vue Template setup :
            const isVueSetup: boolean = Setup_Vue_app(projectName);
            // check errors : 
            if (!isVueSetup) {
                console.error("Failed to set up Vue application.");
                return;
            };
            break;
        case "Angular":
            const isAngularSetup: boolean = Setup_Angular_app(projectName);
            if (!isAngularSetup) {
                console.error("Failed to set up Angular application.");
                return;
            };
            break;
        default:
            console.error(`Unsupported flag: ${flag}`);
            return;
    }
}