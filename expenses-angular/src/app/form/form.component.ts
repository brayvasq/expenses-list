import { Component, OnInit } from '@angular/core';
import {Expense} from '../expense';
import {ExpensesService} from "../expenses.service";

/**
 * Componente que maneja el formulario de creación de gastos
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  itemName: string;
  itemPrice: number;
  private data: {};

  /**
   * Constructor del componente
   * @param expensesService servicio prinicipal mediante inyección de dependencias
   */
  constructor(private expensesService: ExpensesService) { }

  /**
   *  Método que se ejecuta cuando el componente ha sido montado
   */
  ngOnInit() {
    this.itemName = '';
    this.itemPrice = 0;
  }

  /**
   * Método que usa el servicio principal para crear un recurso
   */
  async saveExpense(){
    console.log(`name: ${this.itemName} Price: ${this.itemPrice}`);
    this.data = {
      item: this.itemName,
      price: this.itemPrice
    };
    await this.expensesService.saveExpense(this.data)
      .subscribe(res => {
        let id = res['_id'];
        console.log(res)
      }, (err) => {
        console.log(err);
      });
  }

}
