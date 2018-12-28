/**
 * Interfaz para definir un gasto
 */
export interface Expense {
  _id:string,
  item: string,
  price: number,
  __v: number
}
