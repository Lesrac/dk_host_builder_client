import {Component, OnInit, Input} from '@angular/core';

import {DarklandsService} from "../services/darklands.service";
import {Params, ActivatedRoute} from "@angular/router";
import {Warrior} from "../data/warrior";
import {Kin} from "../data/kin";
import {WarriorUbiquity} from "../data/warrior-ubiquity";
import {Realm} from "../data/realm";

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
    ubiquities: string = "";

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
                    for (let i in this.warrior_ubiquities) {
                        this.buildRealms(this.warrior_ubiquities[i]);
                        this.buildUbiquities(this.warrior_ubiquities[i], +i == this.warrior_ubiquities.length - 1);
                    }
                });
        });
    }

    buildRealms(warrior_ubiquity: WarriorUbiquity): void {
        if (!this.realms.toUpperCase().includes((warrior_ubiquity.realm.name.toUpperCase()))) {
            this.realms += warrior_ubiquity.realm.name;
        }
    }

    buildUbiquities(warrior_ubiquity: WarriorUbiquity, lastElement: boolean): void {
        this.ubiquities += warrior_ubiquity.ubiquity.name;
        if (warrior_ubiquity.ubiquity_amount > 1) {
            this.ubiquities += " (" + warrior_ubiquity.ubiquity_amount + ")";
        }
        if (!lastElement) {
            this.ubiquities += " + ";
        }
    }

    goBack(): void {
        window.history.back();
    }
}