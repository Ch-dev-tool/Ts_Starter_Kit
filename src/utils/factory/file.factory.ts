import fs from "fs";
import path from "path";


export function CreateFileFactory(folder:string,fileName:string,content:string):void{
    // create the file :
    fs.writeFileSync(path.join(folder,fileName),content);
    return;
}
    