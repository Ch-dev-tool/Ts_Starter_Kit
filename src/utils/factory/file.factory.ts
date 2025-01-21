import fs from "fs";


export function CreateFileFactory(folder:string,fileName:string,content:string):void{
    // create the file :
    fs.writeFileSync(`${folder}/${fileName}`,content);
    return;
}
    