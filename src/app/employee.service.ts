import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
    private _url: string = "app/data/data.json";
    constructor(private _http: Http) {}
    getEmployees() {
        return this._http.get(this._url)
        .map((response: Response) => response.json());

    
/*return this._http.get('data/data.json').map(
            (res) => res.json()  );*/

    }
}