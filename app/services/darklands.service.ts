import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Kindred} from './../data/kindred';

@Injectable()
export class DarklandsService {

    private baseUrl = 'http://localhost:8080/Darklands_Host_Builder';
    private kindredUrl = this.baseUrl + '/kindred';

    constructor(private http: Http) {
    }

    getKindreds(): Promise<Kindred[]> {
        return this.http.get(this.kindredUrl)
            .toPromise()
            .then(response => {
                return response.json() as Kindred[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        //TODO error handling
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}