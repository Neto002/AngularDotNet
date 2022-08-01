import { EmployeesService } from './../../../services/employees/employees.service';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeRequest: Employee = {
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: '',
  };

  constructor(private employeesService: EmployeesService, private router: Router) {}

  ngOnInit(): void {}

  addEmployee(): void {
    this.employeesService.createEmployee(this.employeeRequest).subscribe({
      next: (data) => {
        this.router.navigate(['employees'])
      }
    });
  }
}
