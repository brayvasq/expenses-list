import React, {Component} from 'react';
import './ContentCard.css';
import axios from 'axios';

class ContentCard extends Component {
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

    async deleteItem() {
        console.log(this.props.id)
        const resp = await axios.delete(`http://localhost:5040/expenses/${this.props.id}/delete`);
        console.log(resp);
    }

    editToggle() {
        this.setState({edit: !this.state.edit});
    }

    async editItem() {
        this.editToggle()

        const data = {
            item: this.state.newName,
            price: this.state.newPrice
        };
        const resp = await axios.put(`http://localhost:5040/expenses/${this.props.id}/update`, data);
        console.log(resp);
    }

    handleChangeName(event) {
        this.setState({newName: event.target.value});
        console.log(this.state.newName)
    }

    handleChangePrice(event){
        this.setState({newPrice: event.target.value});
    }

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