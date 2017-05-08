import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    getEmployees() {
        return [
            { "id": 1, "name": "rahul", "BU": "DZ" },
            { "id": 2, "name": "miraj", "BU": "DZ" },
            { "id": 3, "name": "pranav", "BU": "SAP" },
            { "id": 4, "name": "gaurav", "BU": "MOB" }
        ]
    }
}