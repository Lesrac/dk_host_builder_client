import {Component, OnInit, Input} from '@angular/core';

import {DarklandsService} from "../services/darklands.service";
import {Warrior} from "../data/warrior";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
    selector: 'my-warriors',
    templateUrl: 'app/warrior/warriors.component.html',
    styleUrls: ['app/warrior/warriors.component.css']
})
export class WarriorsComponent implements OnInit {
    @Input()
    warriors: Observable<Warrior[]>;

    constructor(private router: Router,
                private darklandsService: DarklandsService) {

    }

    ngOnInit(): void {
    }

    gotoDetail(warrior: Warrior): void {
        this.router.navigate(['/kindred/warriors', warrior.id]);
    }
}