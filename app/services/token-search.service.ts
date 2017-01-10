import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Warrior} from "../data/warrior";
import {Token} from "../data/token";

@Injectable()
export class TokenSearchService {
    constructor(private http: Http) {
    }

    tokens(): Promise<Token[]> {
        return this.http
            .get('http://localhost:8080/Darklands_Host_Builder/warrior/tokens')
            .toPromise()
            .then(response => {
                return response.json() as Token[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        //TODO error handling
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    searchWarrior(tokens: Token[]): Observable<Warrior[]> {
        console.log("Search Service");
        if (tokens == null || tokens == [] || tokens.length < 1) {
            return Observable.of<Warrior[]>([]);
        }
        let params = new URLSearchParams();
        let counter = 0;
        for (let token of tokens) {
            params.set(counter.toString(), token.name);
            counter++;
        }
        return this.http
            .get('http://localhost:8080/Darklands_Host_Builder/warrior/tokens/search', {
                search: params
            })
            .map((r: Response) => r.json() as Warrior[]);
    }
}
