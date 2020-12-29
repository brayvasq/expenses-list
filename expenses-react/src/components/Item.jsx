// src/js/components/Item.jsx
import React, { useState } from "react";
import './Item.css';
import { connect } from "react-redux";
import { fetchUpdateExpense, fetchDeleteExpense } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        fetchUpdateExpense: (id, expense) => dispatch(fetchUpdateExpense(id, expense)),
        fetchDeleteExpense: id => dispatch(fetchDeleteExpense(id))
    }
};

const ConnectedItem = props => {
    const [item, setItem] = useState(props.expense.item);
    const [price, setPrice] = useState(props.expense.price);
    const [edit, setEdit] = useState(false);

    const editToggle = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        props.fetchDeleteExpense(props.expense._id)
    };

    const handleEdit = () => {
        props.fetchUpdateExpense(props.expense._id, { item, price });
        editToggle();
    };

    const handleItemChange = event => {
        setItem(event.target.value);
    };

    const handlePriceChange = event => {
        setPrice(event.target.value);
    };

    return (
        !edit ?
            <div className="Item">
                <p>{props.expense._id} - {props.expense.item} - {props.expense.price}</p>
                <button className="Button Warning" onClick={editToggle}>Edit</button>
                <button className="Button Red" onClick={handleDelete}>Delete</button>
            </div>
            : <div className="Item">
                <div>
                    <input
                        type="text"
                        id="item"
                        placeholder="Item name here"
                        value={item}
                        onChange={handleItemChange}
                    />
                    <input
                        type="number"
                        id="price"
                        placeholder="Item price here"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <button className="Button" onClick={editToggle}>Back</button>
                <button className="Button Green" onClick={handleEdit}>Save</button>
            </div>
    );
};

const Item = connect(null, mapDispatchToProps)(ConnectedItem);

export default Item;
