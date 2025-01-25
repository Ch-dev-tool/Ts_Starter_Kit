import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";



export const Setup_Nuxt_app = (projectName: string): boolean => {
    try {
        console.log("Creating new Nuxt.js application using nuxt cli integration : ");
        // add validation of project name / folder :
        if(!isValidProjectName(projectName)) return false;
        // set the bun env variables :
        execSync('bun add -g nuxi@3.20.0 && set NUXT_PACKAGE_MANAGER=bun', { stdio: 'inherit'});
        const command = `bunx nuxi init ${projectName} --ts --eslint --tailwind --app --turbopack --import-alias "@/components/*" --no-participate  --no-telemetry --no-analytics  --package-manager bun --yes`;
        execSync(`set NUXT_PACKAGE_MANAGER=bun && ${command}`, { stdio: 'inherit'});
        return true;    
    } catch (error) {
        console.log("error setting up a nuxt template project using nuxt cli integration :( ");
        return false;
    }
}