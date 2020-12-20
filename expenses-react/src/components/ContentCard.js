import React, {Component} from 'react';
import './ContentCard.css';
import axios from 'axios';

/**
 * Componente que contiene la información de un gasto específico
 */
class ContentCard extends Component {
    /**
     * Constructor donde se definen las propiedades del componente.
     * Aquí se puede definir la lista de estados y enlazar los métodos al componente.
     * @param props propiedades explícitas del componente
     */
    constructor(props) {
        super(props);
        this.state = {
            newName: this.props.name,
            newPrice: this.props.price,
            edit: false
        };
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editToggle = this.editToggle.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    /**
     * Método que hace la petición al ws para eliminar un recurso
     * @returns {Promise<void>}
     */
    async deleteItem() {
        console.log(this.props.id)
        const resp = await axios.delete(`http://localhost:5040/expenses/${this.props.id}`);
        console.log(resp);
    }

    /**
     * Método que funciona como un switch para cambiar el estado de la variable edit.
     * La variable edit es usada para mostrar o no el formulario de edicion
     */
    editToggle() {
        this.setState({edit: !this.state.edit});
    }

    /**
     * Método que hace la petición al ws para cambiar los datos de un recurso específico
     * @returns {Promise<void>}
     */
    async editItem() {
        this.editToggle()

        const data = {
            item: this.state.newName,
            price: this.state.newPrice
        };
        const resp = await axios.put(`http://localhost:5040/expenses/${this.props.id}`, data);
        console.log(resp);
    }
    /**
     * Método que actualiza el estado del estado newName cuando cambia un input
     * @param event evento ejecutado
     */
    handleChangeName(event) {
        this.setState({newName: event.target.value});
        console.log(this.state.newName)
    }
    /**
     * Método que actualiza el estado del estado newPrice cuando cambia un input
     * @param event evento ejecutado
     */
    handleChangePrice(event){
        this.setState({newPrice: event.target.value});
    }
    /**
     * Método que renderiza el componente, aquí va el template del mismo.
     * @returns {*} template del componente
     */
    render() {
        return(
            !this.state.edit? <div className="card">
                <p className="info">{this.state.newName} - ${this.state.newPrice}</p>
                <p className="button red" onClick={this.deleteItem}>Delete</p>
                <p className="button green" onClick={this.editToggle}>Edit</p>
            </div> : <div className="card">
                <p className="info">Name: <input type="text" value={this.state.newName} onChange={this.handleChangeName}/></p>
                <p className="info">Price: <input type="text" value={this.state.newPrice} onChange={this.handleChangePrice}/></p>
                <p className="button green" onClick={this.editItem}>OK</p>
            </div>
        )

    }
}


export default ContentCard;