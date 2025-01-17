import path from "path";

export const isValidProjectName = (projectName: string): boolean => {
    if (path.isAbsolute(projectName)) {
        console.log("The project name should be a relative path, not an absolute path.");
        return false;
    }
    if (!projectName.startsWith('.') && !projectName.startsWith('..')) {
        console.log("The project name should be a relative path starting with '.' or '..'.");
        return false;
    }
    return true;
};