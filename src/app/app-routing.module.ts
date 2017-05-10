import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
      {path: 'employeelist', component: EmployeeListComponent},
      {path: 'employeedetails', component: EmployeeDetailsComponent}
    ];

    @NgModule({
        imports: [
             RouterModule.forRoot(routes)
        ],
        exports: [
             RouterModule
        ]
    })

    export class AppRoutingModule {

    }
    export const RoutingComponents = [EmployeeListComponent, EmployeeDetailsComponent ]