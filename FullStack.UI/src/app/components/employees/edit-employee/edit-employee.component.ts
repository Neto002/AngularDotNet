import { EmployeesService } from './../../../services/employees/employees.service';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  updateEmployee() {
    this.employeesService
      .updateEmployee(this.employeeRequest.id!, this.employeeRequest)
      .subscribe({
        next: (response) => {
          this.router.navigate(['employees']);
        },
      });
  }
}
