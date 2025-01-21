// a function take a folder -> create a tsconfig file and past the content there :
import fs from "fs";
import { CreateFileFactory } from "../utils/factory/file.factory.js";



export const Copy_TsConfig = (folder:string):boolean =>{

    const tsConfigContent = `{
    "compilerOptions": {
        "target": "ES6",                      // Specify ECMAScript target version
        "module": "commonjs",                 // Specify module code generation
        "strict": true,                       // Enable all strict type-checking options
        "esModuleInterop": true,              // Enable compatibility with CommonJS modules
        "skipLibCheck": true,                 // Skip type checking of declaration files
        "outDir": "./dist",                   // Redirect output structure to the directory
        "rootDir": "./src",                   // Specify the root directory of input files
        "resolveJsonModule": true,            // Include modules imported with .json extension
        "noImplicitAny": true,                // Raise error on expressions and declarations with an implied "any" type
        "sourceMap": true                     // Generates corresponding .map file for debugging
    },
    "include": ["src/**/*"],                // Include files in the project
    "exclude": ["node_modules", "dist"]     // Exclude files from the project
    }`
    // create the file :
    try{
        CreateFileFactory(folder,"tsconfig.json",tsConfigContent);
        return true;
    }catch( error ){
        console.log("error creating tsconfig file : ", error);
        return false;
    }
}

