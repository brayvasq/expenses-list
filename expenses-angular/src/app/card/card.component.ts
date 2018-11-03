import {Component, Input, OnInit} from '@angular/core';
import {ExpensesService} from "../expenses.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public edit: boolean;
  @Input() newName: string;
  @Input() newPrice: number;
  @Input() id: string;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
  }

  editToggle(){
    this.edit=true;
  }

  editItem(){
    this.editToggle()
    let data = {
      item: this.newName,
      price: this.newPrice
    };
    this.expensesService.editItem(data,this.id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  deleteItem(){
    this.expensesService.deleteItem(this.id)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
