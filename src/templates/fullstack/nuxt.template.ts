import { execSync } from "child_process";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";



export const Setup_Nuxt_app = (projectName: string): boolean => {
    try {
        console.log("Creating new Nuxt.js application using nuxt cli integration : ");
        // add validation of project name / folder :
        if(!isValidProjectName(projectName)) return false;
        const command = `bunx nuxi init ${projectName} --pm bun --no-git --ts --eslint --tailwind --src-dir --app --turbopack --import-alias "@/components/*" --no-participate`;
        execSync(command, { stdio: 'inherit'});
        return true;
    } catch (error) {
        console.log("error setting up a nuxt template project using nuxt cli integration :( ");
        return false;
    }
}