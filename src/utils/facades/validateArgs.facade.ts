import { allowedTemplates } from "../../shared/template.share.js";
import { Templates } from "../../shared/template.type.js";
import { VlidateResponse } from "../../shared/validate.type.js";





export class ValidateArgsFacade {
    private static readonly  allowedTemplates: Templates[] = allowedTemplates;

    public static isValidTemplate(template: string): VlidateResponse|boolean {
        const arrTemp = template.split(":");
        const appType = arrTemp[0];
        const flag = arrTemp[1];
        
        if(!appType || !flag) return false;

        const res:VlidateResponse = {
            isValid:true,
            appType,
            flag
        };

        // check if the templates includes the app type :
        const targetTemp:Templates|undefined = this.allowedTemplates.filter(temp => temp.key === appType)[0];
        
        if(!targetTemp|| targetTemp == undefined){
            res.isValid = false;
            return res;
        }

        const isFlagIncluded:boolean = targetTemp ? targetTemp.flags.includes(flag) : false;
        if(!isFlagIncluded) { res.isValid = false; return res}
        return res;
    }

    public static getAllowedTemplates(): Templates[] {
        return this.allowedTemplates as Templates[];
    };
}