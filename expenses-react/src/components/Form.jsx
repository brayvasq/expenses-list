// src/js/components/Form.jsx
import React, { useState } from "react";
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
            <div>
                <label htmlFor="title">Add Expense</label>
                <input
                    type="text"
                    id="item"
                    value={item}
                    onChange={handleItemChange}
                />
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                />
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
