import {Equipment} from "./equipment";
/**
 * Created by Daniel on 14.10.2016.
 */
export class CombatWeapon {
    id: number;
    name: string;
    equipment: Equipment;
    mAndW: number;
    mAndWAndCh: number;
    woundPlus: string;
    weaponPlus: number;
    attackDice: number;
    attackRange: number;
    chargePlus: number;
}