// src/js/components/Form.jsx
import React, { useState } from "react";
import './Form.css'
import { connect } from "react-redux";
import { fetchAddExpense } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        fetchAddExpense: expense => dispatch(fetchAddExpense(expense)),
    };
};

const ConnectedForm = props => {
    const [item, setItem] = useState("");
    const [price, setPrice] = useState(0);

    const handleItemChange = event => {
        setItem(event.target.value);
    };

    const handlePriceChange = event => {
        setPrice(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.fetchAddExpense({ item, price });

        setItem("");
        setPrice(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="Input">
                <label htmlFor="item">
                    Name
                </label>
                <input
                    type="text"
                    name="item"
                    id="item"
                    placeholder="Item name here"
                    value={item}
                    onChange={handleItemChange}
                />    
            </div>
            <div className="Input">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Item price here"
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
