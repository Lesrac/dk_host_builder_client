import {EquipmentClass} from "./equipment-class";
import {EquipmentType} from "./equipment-type";
/**
 * Created by Daniel on 18.10.2016.
 */
export class Equipment {
    id: number;
    name: string;
    hands: number;
    option: boolean;
    cost: number;
    equipmentClass: EquipmentClass;
    equipmentType: EquipmentType;
}