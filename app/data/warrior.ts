import {Kindred} from "./kindred";
import {Profile} from "./profile";
import {Kin} from "./kin";
import {WarriorClass} from "./warrior-class";
import {WarriorUbiquity} from "./warrior-ubiquity";
import {Privilege} from "./privilege";
import {Acuity} from "./acuity";
import {Armour} from "./armour";
import {CombatWeapon} from "./combat-weapon";
import {ShotWeapon} from "./shot-weapon";
export class Warrior {
    id: number;
    name: string;
    hands: number;
    uniteSizeMin: number;
    uniteSizeMax: number;
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

    armours: Armour[];

    combatWeapons: CombatWeapon[];

    shotWeapons: ShotWeapon[];
}