import {Component, Input} from "@angular/core";
import {Armour} from "../../data/armour";
/**
 * Created by Daniel on 14.10.2016.
 */
@Component({
    selector: 'my-armour',
    templateUrl: 'app/warrior/equipment/armour.component.html',
    styleUrls: ['app/warrior/equipment/armour.component.css']
})
export class ArmourComponent {

    @Input()
    armours: Armour[];

}