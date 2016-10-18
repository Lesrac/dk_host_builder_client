import {Component, OnInit} from "@angular/core";
import {DarklandsService} from "../services/darklands.service";
import {Params, ActivatedRoute} from "@angular/router";
import {Warrior} from "../data/warrior";
import {WarriorUbiquity} from "../data/warrior-ubiquity";
import {Realm} from "../data/realm";

@Component({
    selector: 'my-warrior-detail',
    templateUrl: 'app/warrior/warrior-detail.component.html',
    styleUrls: ['app/warrior/warrior-detail.component.css']
})
export class WarriorDetailComponent implements OnInit {

    warrior: Warrior;
    realms: Realm[] = [];

    constructor(private route: ActivatedRoute,
                private darklandsService: DarklandsService) {

    }

    ngOnInit(): void {
        this.getWarrior();
    }

    getWarrior(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.darklandsService.getWarrior(id)
                .then(warrior => {
                    this.warrior = warrior;
                    console.log(warrior);
                    for (let i of this.warrior.ubiquities) {
                        this.buildRealms(i);
                    }
                });
        });
    }

    buildRealms(warrior_ubiquity: WarriorUbiquity): void {
        if (!this.realms.find(realm => realm.id == warrior_ubiquity.realm.id)) {
            this.realms.push(warrior_ubiquity.realm);
        }
    }

    getStyle(value: number): string {
        if (this.warrior.profile.constitution_markers.indexOf(value) != -1) {
            return "flex-item-marker";
        }
        return "flex-item";
    }

    goBack(): void {
        window.history.back();
    }
}