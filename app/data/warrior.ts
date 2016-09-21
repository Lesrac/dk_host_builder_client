import {Kindred} from "./kindred";
import {Profile} from "./profile";
import {Ubiquity} from "./ubiquity";
import {Kin} from "./kin";
import {WarriorClass} from "./warrior-class";
import {WarriorUbiquity} from "./warrior-ubiquity";
import {Privilege} from "./privilege";
import {Acuity} from "./acuity";
export class Warrior {
    id: number;
    name: string;
    hands: number;
    unitSizeMin: number;
    unitSizeMax: number;
    baseSize: number;
    cost: number;
    spelling: string;
    sellswod: boolean;

    acuity: Acuity;

    kindred: Kindred;

    kin: Kin[];

    profile: Profile;

    privilege: Privilege;

    ubiquities: WarriorUbiquity[];

    warriorClass: WarriorClass[];

}