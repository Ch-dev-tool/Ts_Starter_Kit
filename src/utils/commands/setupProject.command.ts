import * as path from 'path';
import * as fs from 'fs';
import { ValidateArgsFacade } from '../../utils/facades/validateArgs.facade.js';
import { VlidateResponse } from '../../shared/validate.type.js';
import { Setup_Front_App } from '../../templates/front.template.js';
import { Setup_Api } from '../../templates/back.template.js';
import { Setup_Full_App } from '../../templates/full.template.js';
import { Setup_Lib_App } from '../../templates/lib.template.js';
import { Setup_Static_App } from '../../templates/static.template.js';




export const Setup_Project = (template:string, projectName:string) => {

    //const templateDir = path.join(__dirname, 'templates', template);
    // time to make a switch cases on each templates:

    // call a validator : 
    const validateObj:VlidateResponse|boolean = ValidateArgsFacade.isValidTemplate(template);
    if(typeof validateObj === "boolean"){
      console.error("Template not found ");
      return ;
    }
    const { appType , flag, isValid} = validateObj;
    if(!isValid){
      console.error("Template not found ");
      return ;
    }
    const projectDir:string = path.join(process.cwd(), projectName);
    console.log("Creating New Folder : ",  projectDir );
    
    // Add steps based on the template type and flag
    switch (appType) {
        case "Front-end":
            // call a setup frontEnd application :
            Setup_Front_App(flag,projectName);
        break;
        case "Back-end":
            Setup_Api(flag,projectName)
        break;
        case "Full-Stack":
            Setup_Full_App(flag,projectName);
        break;
        case "Lib":
            Setup_Lib_App(flag,projectName);
        break;
        case "Static":
            // call a setup static application :
            Setup_Static_App(flag,projectName);
            break;
        // Add more cases here for other front-end frameworks if needed
        default:
            console.error(`Unsupported app type: ${appType}`);
        return;
    }
    
    
    // fs.mkdirSync(projectDir, { recursive: true });
    console.log(projectDir, "Cretated successfully :) ");

    
    //copyFiles(templateDir, projectDir);
    console.log(`Generated project "${projectName}" based on template "${template}".`);
  }