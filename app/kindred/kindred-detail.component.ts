import {Component, OnInit} from '@angular/core'

import {Kindred} from "../data/kindred";
import {DarklandsService} from "../services/darklands.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Warrior} from "../data/warrior";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'my-kindred-detail',
    templateUrl: 'app/kindred/kindred-detail.component.html',
    styleUrls: ['app/kindred/kindred-detail.component.css']
})
export class KindredDetailComponent implements OnInit {
    kindred: Kindred;
    warriors: Observable<Warrior[]>;

    constructor(private darklandsService: DarklandsService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getKindred();
    }

    getKindred(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.darklandsService.getKindred(id)
                .then(kindred => {
                    this.kindred = kindred;
                    this.getWarriors();
                    console.log(kindred);
                });
        });
    }

    getWarriors(): void {
        this.darklandsService.getWarriorsByKindred(this.kindred.id)
            .then(warriors => this.warriors = Observable.of(warriors));
    }

    buildHost(): void {
        
    }

    goBack(): void {
        window.history.back();
    }
}