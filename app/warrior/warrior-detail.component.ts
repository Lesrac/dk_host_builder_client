import {Component, OnInit, Input} from '@angular/core';

import {DarklandsService} from "../services/darklands.service";
import {Params, ActivatedRoute} from "@angular/router";
import {Warrior} from "../data/warrior";
import {Kin} from "../data/kin";
import {Realm} from "../data/realm";
import {WarriorUbiquity} from "../data/warrior-ubiquity";

@Component({
    selector: 'my-warrior-detail',
    templateUrl: 'app/warrior/warrior-detail.component.html',
    styleUrls: ['app/warrior/warrior-detail.component.css']
})
export class WarriorDetailComponent implements OnInit {

    warrior: Warrior;
    warrior_ubiquities: WarriorUbiquity[];
    kins: string = "";
    realms: string = "";

    constructor(private route: ActivatedRoute,
                private darklandsService: DarklandsService) {

    }

    ngOnInit(): void {
        this.getWarrior();
        this.getWarriorRealmInfo();
    }

    getWarrior(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.darklandsService.getWarrior(id)
                .then(warrior => {
                    this.warrior = warrior;
                    console.log(warrior);
                    console.log("Kin:");
                    console.log(warrior.kin);
                    this.warrior.kin.forEach(this.buildKins, this)
                });
        });
    }

    buildKins(kin: Kin): void {
        this.kins += kin.name;
    }

    getWarriorRealmInfo(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.darklandsService.getWarriorRealmInfo(id)
                .then(realm => {
                    this.warrior_ubiquities = realm;
                    console.log("Realm:");
                    console.log(realm);
                    console.log(this.warrior_ubiquities);
                    this.warrior_ubiquities.forEach(this.buildRealm, this);
                });
        });
    }

    buildRealm(warrior_ubiquity: WarriorUbiquity): void {
        this.realms += warrior_ubiquity.realm.name;
    }

    goBack(): void {
        window.history.back();
    }
}