import { Component, OnInit } from '@angular/core';
import {ExpensesService} from "../expenses.service";
import {Expense} from "../expense";

/**
 * Componente que listará los recursos
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  expenses: any[];

  /**
   * Constructor del componente
   * @param expensesService servicio prinicipal mediante inyección de dependencias
   */
  constructor(private expensesService: ExpensesService) { }

  /**
   *  Método que se ejecuta cuando el componente ha sido montado
   */
  ngOnInit() {
   this.getExpenses()
  }

  /**
   * Método que hace la petición cada 5 segundos al servicio que entrega el listado
   * completo de los recusos
   */
  getExpenses(){
    setInterval(()=>{
      this.expensesService.getExpenses()
        .subscribe(res => {
          console.log(res);
          this.expenses = res;
        }, err => {
          console.log(err);
        });
    },5000)

  }

}
