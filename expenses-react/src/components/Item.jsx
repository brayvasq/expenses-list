// src/js/components/Item.jsx
import React, { useState } from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        editExpense: expense => dispatch(editExpense(expense)),
        removeExpense: expense => dispatch(removeExpense(expense))
    }
};

const ConnectedItem = props => {
    const [item, setItem] = useState(props.post.item);
    const [price, setPrice] = useState(props.post.price);
    const [edit, setEdit] = useState(false);

    const editToggle = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        props.removeExpense({ id: props.post.id })
    };

    const handleEdit = () => {
        props.editExpense({ id: props.post.id, item, price });
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
            <div>
                <p>{props.post.item} - {props.post.price}</p>
                <button onClick={editToggle}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            : <div>
                <p>Name: <input type="text" value={item} onChange={handleItemChange}/></p>
                <p>Price: <input type="number" value={price} onChange={handlePriceChange}/></p>
                <button onClick={editToggle}>Back</button>
                <button onClick={handleEdit}>Save</button>
            </div>
    );
};

const Item = connect(null, mapDispatchToProps)(ConnectedItem);

export default Item;
