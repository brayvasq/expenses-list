// src/js/components/Form.jsx
import React, { useState } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        addExpense: expense => dispatch(addExpense(expense))
    };
};

const ConnectedForm = props => {
    const [id, setId] = useState(0);
    const [item, setItem] = useState("");
    const [price, setPrice] = useState(0);

    const handleIdChange = event => {
        setId(event.target.value);
    };

    const handleItemChange = event => {
        setItem(event.target.value);
    };

    const handlePriceChange = event => {
        setPrice(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        props.addExpense({ id, item, price });

        setId(0);
        setItem("");
        setPrice(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Add Expense</label>
                <input
                    type="number"
                    id="id"
                    value={id}
                    onChange={handleIdChange}
                />
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
