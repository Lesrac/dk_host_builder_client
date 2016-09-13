import {Kindred} from "./kindred";
import {Profile} from "./profile";
import {Ubiquity} from "./ubiquity";
import {Kin} from "./kin";
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

    kindred: Kindred;

    kin: Kin[];

    profile: Profile;

    ubiquities: Ubiquity[];

}