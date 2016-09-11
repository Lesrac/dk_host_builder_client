import {Component, OnInit} from '@angular/core'

import {Kindred} from "../data/kindred";
import {DarklandsService} from "../services/darklands.service";

@Component({
    selector: 'my-kindreds',
    templateUrl: 'app/kindred/kindreds.component.html',
    styleUrls: ['app/kindred/kindreds.component.css']
})
export class KindredsComponent implements OnInit {
    kindreds: Kindred[];
    selectedKindred: Kindred;

    constructor(private darklandsService: DarklandsService) {

    }

    ngOnInit(): void {
        this.getKindreds();
    }

    getKindreds(): void {
        this.darklandsService.getKindreds().then(kindreds => this.kindreds = kindreds);
        console.log(this.kindreds);
    }

    onSelect(kindred: Kindred): void {
        this.selectedKindred = kindred;
    }

    gotoDetail(): void {

    }
}