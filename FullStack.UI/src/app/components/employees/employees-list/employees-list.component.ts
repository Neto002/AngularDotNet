import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '1',
      name: 'test1',
      email: 'test@test.com',
      phone: '(11) 11111-1111',
      salary: 1000,
      department: 'test department'
    },
    {
      id: '2',
      name: 'test2',
      email: 'test@test.com',
      phone: '(22) 22222-2222',
      salary: 2000,
      department: 'test department'
    },
    {
      id: '3',
      name: 'test3',
      email: 'test@test.com',
      phone: '(33) 33333-3333',
      salary: 3000,
      department: 'test department'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
