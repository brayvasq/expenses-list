import React, {Component} from 'react';
import './FormComponent.css';
import axios from 'axios';

/**
 * Componente que funciona como el formulario de creación de gastos
 */
class FormComponent extends Component{
    /**
     * Constructor donde se definen las propiedades del componente.
     * Aquí se puede definir la lista de estados y enlazar los métodos al componente.
     * @param props propiedades explícitas del componente
     */
    constructor(props){
        super(props)
        this.state = {
            itemName:'',
            itemPrice: ''
        };
        this.addItem = this.addItem.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    /**
     * Método que actualiza el estado del estado itemName cuando cambia un input
     * @param event evento ejecutado
     */
    handleChangeName(event) {
        this.setState({itemName: event.target.value});
    }
    /**
     * Método que actualiza el estado del estado itemPrice cuando cambia un input
     * @param event evento ejecutado
     */
    handleChangePrice(event){
        this.setState({itemPrice: event.target.value});
    }

    /**
     * Método que hace la petición al ws para crear un recurso
     * @returns {Promise<void>}
     */
    async addItem(){
        const data = {
            item: this.state.itemName,
            price: this.state.itemPrice
        };

        const resp = await axios.post('http://localhost:5040/expenses/create',data);
        console.log(resp);
    }
    /**
     * Método que renderiza el componente, aquí va el template del mismo.
     * @returns {*} template del componente
     */
    render(){
        return (
            <div className="form-cont">
                <h1> Add a Expense </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt=""/>
                    <div className="form-page">
                        <input type="text" placeholder="Input your item here" value={this.state.itemName} onChange={this.handleChangeName}/>
                        <input type="number" placeholder="Input the price of item" value={this.state.itemPrice} onChange={this.handleChangePrice}/>
                        <input type="submit" value="Send" onClick={this.addItem}/>
                    </div>
            </div>
        );
    }
}

export default FormComponent;