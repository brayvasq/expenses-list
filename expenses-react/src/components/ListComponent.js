import React, {Component} from 'react';
import './ListComponent.css';
import axios from 'axios';
import ContentCard from './ContentCard';

/**
 * Componente que listará los gastos
 */
class ListComponent extends Component {

    /**
     * Constructor donde se definen las propiedades del componente.
     * Aquí se puede definir la lista de estados y enlazar los métodos al componente.
     * @param props propiedades explícitas del componente
     */
    constructor(props) {
        super(props)

        this.state = {
            list: []
        };

        this.getExpenses = this.getExpenses.bind(this);
    }

    /**
     * Método que devuelve los datos dados en un componente ContentCard nuevo
     * @param item datos del gasto específico
     * @returns {*} nuevo componente ContentCard
     */
    createdTasks(item) {
        return <ContentCard key={item._id} id={item._id} name={item.item} price={item.price}/>
    }

    /**
     * Método que se ejecuta cuando el componente ha sido montado o cargado
     * @returns {Promise<void>}
     */
    async componentDidMount() {
        await setInterval(this.getExpenses,1000)
    }

    /**
     * Método que consume el webservice para traer la lista de gastos
     * @returns {Promise<void>}
     */
    async getExpenses() {
        const expenses = await axios.get('http://localhost:5040/expenses/')
        this.setState({list: expenses.data});
    }

    /**
     * Método que renderiza el componente, aquí va el template del mismo.
     * @returns {*} template del componente
     */
    render() {

        const listItems = this.state.list.map(this.createdTasks)

        return (
            <div className="container-list">
                <h1> My Expenses </h1>
                <div className="list">
                    {listItems}
                </div>
            </div>
        )
    }

}

export default ListComponent;
