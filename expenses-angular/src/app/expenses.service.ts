import { Injectable } from '@angular/core';
import {Expense} from './expense';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

/**
 * Constante de encabezado para todas las peticiones
 */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * Servicio principal que contiene todos los métodos para interactuar con el WS
 */
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private url = "http://localhost:5040/expenses";
  edit:boolean = false;

  /**
   * Constructor del componente
   * @param http modulo http médiante inyección de dependencias
   */
  constructor(private http: HttpClient) { }

  /**
   * Método que consume el webservice para traer la lista de gastos
   */
  getExpenses(): Observable<any>{
    return this.http.get(this.url, httpOptions);
  }

  /**
   * Método que hace la petición al ws para crear un recurso
   * @param data datos del recurso que se creará
   */
  saveExpense(data): Observable<any> {
    return this.http.post(this.url + '/create', data, httpOptions)
  }

  /**
   * Método que hace la petición al ws para cambiar los datos de un recurso específico
   * @param data nuevos datos del recurso
   * @param id identificador del recurso
   */
  editItem(data,id): Observable<any>{
    return this.http.put(this.url+"/"+id+"/update", data, httpOptions)
  }

  /**
   * Método que hace la petición al ws para eliminar un recurso
   * @param id identificador del recurso
   */
  deleteItem(id): Observable<any>{
    return this.http.delete(this.url+"/"+id+"/delete", httpOptions)
  }
}
