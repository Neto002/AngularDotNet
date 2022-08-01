import { EmployeesService } from './../../../services/employees/employees.service';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeRequest: Employee = {
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: '',
  };
  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeesService.getEmployee(id).subscribe({
            next: (data) => {
              this.employeeRequest = data;
            },
          });
        }
      },
    });
  }
}
