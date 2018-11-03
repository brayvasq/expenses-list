import React, {Component} from 'react';
import './ListComponent.css';
import axios from 'axios';
import ContentCard from './ContentCard';

class ListComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        };

        this.getExpenses = this.getExpenses.bind(this);
    }

    createdTasks(item) {
        return <ContentCard key={item._id} id={item._id} name={item.item} price={item.price}/>
    }

    async componentDidMount() {
        await setInterval(this.getExpenses,1000)
    }

    async getExpenses() {
        const expenses = await axios.get('http://localhost:5040/expenses/')
        this.setState({list: expenses.data});
    }

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
