import React, {Component} from 'react';
import './FormComponent.css';
import axios from 'axios';

class FormComponent extends Component{
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

    handleChangeName(event) {
        this.setState({itemName: event.target.value});
    }

    handleChangePrice(event){
        this.setState({itemPrice: event.target.value});
    }

    async addItem(){
        const data = {
            item: this.state.itemName,
            price: this.state.itemPrice
        };

        const resp = await axios.post('http://localhost:5040/expenses/create',data);
        console.log(resp);
    }

    render(){
        return (
            <div className="form-cont">
                <h1> Add a Expense </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt=""/>
                    <div className="form-page">
                        <input type="text" placeholder="Input your item here" value={this.state.itemName} onChange={this.handleChangeName}/>
                        <input type="number" placeholder="Input the price of item" value={this.state.itemPrice} onChange={this.handleChangePrice}/>
                        <input type="submit" onClick={this.addItem}/>
                    </div>
            </div>
        );
    }
}

export default FormComponent;