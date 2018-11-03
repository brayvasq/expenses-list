import { Component, OnInit } from '@angular/core';
import {ExpensesService} from "../expenses.service";
import {Expense} from "../expense";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  expenses: any[];

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
   this.getExpenses()
  }

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
