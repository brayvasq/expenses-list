import { Injectable } from '@angular/core';
import {Expense} from './expense';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private url = "http://localhost:5040/expenses"
  edit:boolean = false;
  constructor(private http: HttpClient) { }

  getExpenses(): Observable<any>{
    return this.http.get(this.url, httpOptions);
  }

  saveExpense(data): Observable<any> {
    return this.http.post(this.url + '/create', data, httpOptions)
  }

  editItem(data,id): Observable<any>{
    return this.http.put(this.url+"/"+id+"/update", data, httpOptions)
  }

  deleteItem(id): Observable<any>{
    return this.http.delete(this.url+"/"+id+"/delete", httpOptions)
  }
}
