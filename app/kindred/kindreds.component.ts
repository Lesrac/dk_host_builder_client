import {Component, OnInit} from '@angular/core'

import {Kindred} from "../data/kindred";
import {DarklandsService} from "../services/darklands.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-kindreds',
    templateUrl: 'app/kindred/kindreds.component.html',
    styleUrls: ['app/kindred/kindreds.component.css']
})
export class KindredsComponent implements OnInit {
    kindreds: Kindred[];

    constructor(private router: Router,
                private darklandsService: DarklandsService) {

    }

    ngOnInit(): void {
        this.getKindreds();
    }

    getKindreds(): void {
        this.darklandsService.getKindreds().then(
            kindreds => {
                this.kindreds = kindreds.sort((l: Kindred, r: Kindred) => {
                    if (l.name < r.name) {
                        return -1;
                    }
                    if (l.name > r.name) {
                        return 1;
                    }
                    return 0;
                });
                console.log(this.kindreds);
            }
        );
    }

    gotoDetail(kindred: Kindred): void {
        this.router.navigate(['/kindred/detail', kindred.id]);
    }
}