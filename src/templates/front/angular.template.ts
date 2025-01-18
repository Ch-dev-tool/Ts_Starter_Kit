import { execSync } from "child_process";
import { mkdirSync } from "fs";
import path from "path";
import { isValidProjectName } from "../../utils/facades/validatePath.facade.js";


export const Setup_Angular_app = (projectName: string): boolean => {
    try {
        console.log("Creating new Angular TypeScript application using Angular CLI integration:");

        if (!isValidProjectName(projectName)) {
            return false;
        }

        const projectPath = path.resolve(projectName);
        const projectNameOnly = path.basename(projectPath);

        mkdirSync(projectPath, { recursive: true });
        execSync(`bunx @angular/cli new ${projectNameOnly} --defaults --skip-install --style=css --routing=true --skip-tests`,
            { stdio: 'inherit', cwd: path.dirname(projectPath) });
        console.log('Installing dependencies...');
        execSync(`bun install`, { stdio: 'inherit', cwd: projectName });

        return true;
    } catch (error) {
        console.error("Error setting up an Angular template project using Angular CLI provider:", error);
        return false;
    }
};