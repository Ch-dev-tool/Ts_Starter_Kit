



export const Setup_Nest_App = (projectName:string):boolean =>{
    try{
        console.log("Creating new Nest application using nest/Cli integration : ");
    }catch( error ){
        console.log("error setting up a nest template project using nest cli integration ");
        return false;
    }
    return true;
}