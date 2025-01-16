import { Command } from 'commander';
import * as path from 'path';
import * as fs from 'fs';
import { execSync  } from "child_process"
import { Setup_React_app } from './templates/react.template.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Project Scaffolding Tool CLI');

program.command('generate <template> <projectName>')
  .description('Generate a new project based on a template')
  .action((template, projectName) => {
    const allowedTemplates = [
      {
        key:"Front-end",
         flags:["React","Vue", "Angular"]
      }, 
      {
        key:"Back-end",
        flags:["Nest","Express"]
      }, 
      {
        key:"Full-Stack",
        flags:["Next","Nuxt"]
      }, 
      {
        key:"Lib",
        flags:["Simple"]
      },
      {
        key:"Static",
        flags:["Gatsby", "Hugo","Astro"]
      }
      ];


    //const templateDir = path.join(__dirname, 'templates', template);
    // time to make a switch cases on each templates:
    const arrTemp = template.split(":");
    const appType = arrTemp[0];
    const flag = arrTemp[1];
    const isThere:boolean = allowedTemplates.filter(temp => temp.key === appType).length !==0;
    if(!isThere){
      console.error("Template not found ");
      return ;
    }

    console.log(arrTemp);
    const projectDir:string = path.join(process.cwd(), projectName);
    console.log("Creating New Folder : ",  projectDir );
    
    // add steps : 
    if(appType === "Front-end" && flag==="React"){
      const isReactSetedUp:boolean = Setup_React_app(projectName);
      if(!isReactSetedUp) return;
    }

    // fs.mkdirSync(projectDir, { recursive: true });
    console.log(projectDir, "Cretated successfully :) ");

    function copyFiles(srcDir: string, destDir: string) {
      const entries = fs.readdirSync(srcDir, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.isDirectory()) {
          fs.mkdirSync(destPath, { recursive: true });
          copyFiles(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    //copyFiles(templateDir, projectDir);
    console.log(`Generated project "${projectName}" based on template "${template}".`);
  });

program.parse(process.argv);