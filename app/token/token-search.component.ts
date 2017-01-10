import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {TokenSearchService} from "../services/token-search.service";
import {Token} from "../data/token";
import {Warrior} from "../data/warrior";


@Component({
    selector: 'my-token-search',
    templateUrl: 'app/token/token-search.component.html',
    styleUrls: ['app/token/token-search.component.css']
})
export class TokenSearchComponent implements OnInit {
    tokens: Token[];
    addedTokens: Token[] = [];
    warriors: Observable<Warrior[]>;
    private searchTerms = new Subject<Token[]>();

    constructor(private tokenSearchService: TokenSearchService) {

    }

    ngOnInit(): void {
        this.getTokens();
        this.getWarriors();
    }

    getTokens(): void {
        this.tokenSearchService.tokens().then(
            tokens =>
                this.tokens = tokens.sort((l: Token, r: Token) => {
                    if (l.name < r.name) {
                        return -1;
                    }
                    if (l.name > r.name) {
                        return 1;
                    }
                    return 0;
                })
        );
    }

    getWarriors(): void {
        console.log("GetWarriors");
        this.warriors = this.searchTerms
            .debounceTime(500)
            .switchMap(term => term
                ? this.tokenSearchService.searchWarrior(this.addedTokens)
                : Observable.of<Warrior[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Warrior[]>([]);
            })
    }

    onSelect(token: Token): void {
        let index = this.addedTokens.indexOf(token);
        console.log(index);
        if (index > -1) {
            this.addedTokens.splice(index, 1);
        } else {
            this.addedTokens.push(token);
        }
        this.search(this.addedTokens);
    }

    search(tokens: Token[]): void {
        this.searchTerms.next(tokens);
    }

}