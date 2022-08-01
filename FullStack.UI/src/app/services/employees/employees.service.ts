import { HttpClient } from '@angular/common/http';
import { Employee } from './../../models/employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseAPIUrl = 'https://localhost:7100/api/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseAPIUrl);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseAPIUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseAPIUrl, employee);
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseAPIUrl}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.baseAPIUrl}/${id}`);
  }
}
