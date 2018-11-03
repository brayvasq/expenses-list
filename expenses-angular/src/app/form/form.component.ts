import { Component, OnInit } from '@angular/core';
import {Expense} from '../expense';
import {ExpensesService} from "../expenses.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  itemName: string;
  itemPrice: number;
  private data: {};

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.itemName = '';
    this.itemPrice = 0;
  }

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
