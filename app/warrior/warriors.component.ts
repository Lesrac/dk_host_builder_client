import {Component, OnInit, Input} from '@angular/core';

import {DarklandsService} from "../services/darklands.service";
import {Warrior} from "../data/warrior";
import {Observable} from "rxjs";


@Component({
    selector: 'my-warriors',
    templateUrl: 'app/warrior/warriors.component.html',
    styleUrls: ['app/warrior/warriors.component.css']
})
export class WarriorsComponent implements OnInit {
    @Input()
    warriors: Observable<Warrior[]>;

    constructor(private darklandsService: DarklandsService) {

    }

    ngOnInit(): void {
    }


}