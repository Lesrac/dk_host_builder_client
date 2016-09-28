import {SpecialRule} from "./special-rule";
export class Profile {
    id: number;
    pace: number;
    skill: number;
    might: number;
    constitution: number;
    fortitude: number;
    authority: number;
    temper: number;
    constitution_markers: number[];
    specialRules: SpecialRule[];
}