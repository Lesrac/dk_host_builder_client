import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by Daniel on 27.09.2016.
 */
@Pipe({name: 'numberToArrayPipe'})
export class NumberToArrayPipe implements PipeTransform {
    transform(value, args: string[]): any {
        let res = [];
        for (let i = 1; i <= value; i++) {
            res.push(i);
        }
        return res;
    }
}