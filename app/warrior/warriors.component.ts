import {Component, Input} from '@angular/core';

import {Warrior} from "../data/warrior";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
    selector: 'my-warriors',
    templateUrl: 'app/warrior/warriors.component.html',
    styleUrls: ['app/warrior/warriors.component.css']
})
export class WarriorsComponent {
    @Input()
    warriors: Observable<Warrior[]>;

    constructor(private router: Router) {

    }

    gotoDetail(warrior: Warrior): void {
        this.router.navigate(['/kindred/warriors', warrior.id]);
    }
}