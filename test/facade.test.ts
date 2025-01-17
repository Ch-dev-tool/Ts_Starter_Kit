import { describe, it, expect, expectTypeOf } from 'vitest';
import {ValidateArgsFacade } from "../src/utils/facades/validateArgs.facade.js";
import { VlidateResponse } from '../src/shared/validate.type.js';
import exp from 'constants';
describe('validateTemplate', () => {
    it('should return true for a valid template', () => {
        const template = 'Front-end:React';
        const result:VlidateResponse|boolean = ValidateArgsFacade.isValidTemplate(template);
        expectTypeOf(result).toBeObject;
        if(typeof result === "object"){
            expectTypeOf(result).toHaveProperty("isValid");
            expectTypeOf(result).toHaveProperty("appType");
            expectTypeOf(result).toHaveProperty("flag");

            expect(result.appType).toEqual("Front-end");
            expect(result.flag).toEqual("React");
            expect(result.isValid).toBeTruthy;
        }
       
    });

    it('should return false for an invalid template', () => {
        const template = 'FullStack:node';
        const res:VlidateResponse|boolean = ValidateArgsFacade.isValidTemplate(template);
        expectTypeOf(res).toBeBoolean;
        if(typeof res === 'object' ){
            expectTypeOf(res).toHaveProperty("isValid");
            expectTypeOf(res).toHaveProperty("appType");
            expectTypeOf(res).toHaveProperty("flag");
        }
        if(typeof res === "boolean"){
            expect(res).toBeFalsy;
        }
       
    });
});