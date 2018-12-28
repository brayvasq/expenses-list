import {Component, Input, OnInit} from '@angular/core';
import {ExpensesService} from "../expenses.service";

/**
 * Componente que contiene la información de un gasto específico
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public edit: boolean;
  /**
   * Los elementos precedidos por @Input()
   * indican que son propiedades del HTML y que son entradas del componente
   */
  @Input() newName: string;
  @Input() newPrice: number;
  @Input() id: string;

  /**
   * Constructor del componente
   * @param expensesService servicio prinicipal mediante inyección de dependencias
   */
  constructor(private expensesService: ExpensesService) { }

  /**
   *  Método que se ejecuta cuando el componente ha sido montado
   */
  ngOnInit() {
  }

  /**
   * Método que funciona como un switch para cambiar el estado de la variable edit.
   * La variable edit es usada para mostrar o no el formulario de edicion
   */
  editToggle(){
    this.edit=true;
  }

  /**
   * Método que usa el servicio principal para cambiar los datos de un recurso específico
   */
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

  /**
   * Método que usa el servicio principal para eliminar un recurso
   */
  deleteItem(){
    this.expensesService.deleteItem(this.id)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
