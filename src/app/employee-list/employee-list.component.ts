import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
     .subscribe(resEmployeeData => this.employees = resEmployeeData);
 
  }
}
