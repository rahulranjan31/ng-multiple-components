import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {
  employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
     this._employeeService.getEmployees()
     .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }

}
