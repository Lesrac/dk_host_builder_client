import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Kindred} from './../data/kindred';
import {Warrior} from "../data/warrior";
import {Realm} from "../data/realm";
import {WarriorUbiquity} from "../data/warrior-ubiquity";

@Injectable()
export class DarklandsService {

    private baseUrl = 'http://localhost:8080/Darklands_Host_Builder';
    private kindredUrl = this.baseUrl + '/kindred';
    private warriorsUrl = this.baseUrl + '/warrior';

    constructor(private http: Http) {
    }

    getKindreds(): Promise<Kindred[]> {
        return this.http.get(this.kindredUrl)
            .toPromise()
            .then(response => response.json() as Kindred[])
            .catch(this.handleError);
    }

    getKindred(id: number): Promise<Kindred> {
        return this.getKindreds().then(kindreds => kindreds.find(kindred => kindred.id === id));
    }

    getWarriorsByKindred(kindred_id: number): Promise<Warrior[]> {
        const url = `${this.warriorsUrl}/kindred/${kindred_id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Warrior[])
            .catch(this.handleError);
    }

    getWarriors(): Promise<Warrior[]> {
        return this.http.get(this.warriorsUrl)
            .toPromise()
            .then(response => response.json() as Warrior[])
            .catch(this.handleError);
    }

    getWarrior(id: number): Promise<Warrior> {
        const url = `${this.warriorsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Warrior)
            .catch(this.handleError);
    }

    getWarriorRealmInfo(warrior_id: number): Promise<WarriorUbiquity[]> {
        const url = `${this.warriorsUrl}/${warrior_id}/realm`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                console.log(response);
                return response.json() as WarriorUbiquity[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        //TODO error handling
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}