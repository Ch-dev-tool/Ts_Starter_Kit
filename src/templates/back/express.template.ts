


export const Setup_Express_App = (projectName:string):boolean =>{
    try {
        return true;
    } catch (error) {
        console.log("error setting up a express template project using express cli integration ");
        console.log(error);
        return false;
    }    
};