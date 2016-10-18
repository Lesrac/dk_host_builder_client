import {Component, Input} from "@angular/core";
import {CombatWeapon} from "../../data/combat-weapon";
/**
 * Created by Daniel on 14.10.2016.
 */
@Component({
    selector: 'my-combat-weapon',
    templateUrl: 'app/warrior/equipment/combat-weapon.component.html',
    styleUrls: ['app/warrior/equipment/combat-weapon.component.css']
})
export class CombatWeaponComponent {

    @Input()
    combatWeapon: CombatWeapon;

}