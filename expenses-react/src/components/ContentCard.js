import React, { useState } from 'react';
import './ContentCard.css';
import axios from 'axios';

const ContentCard = props => {
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const [edit, setEdit] = useState(false);

    const deleteItem = async () => {
        await axios.delete(`http://localhost:5040/expenses/${props.id}`);
    };

    const editToggle = () => setEdit(!edit);

    const editItem = async () => {
        const data = {
            item: name,
            price
        }

        await axios.put(`http://localhost:5040/expenses/${props.id}`, data);

        editToggle();
    }

    const handleChangeName = event => setName(event.target.value);

    const handleChangePrice = event => setPrice(event.target.value);

    return (
        !edit ? <div className="card">
            <p className="info">{name} - ${price}</p>
            <p className="button red" onClick={deleteItem}>Delete</p>
            <p className="button green" onClick={editToggle}>Edit</p>
        </div> : <div className="card">
                <p className="info">Name: <input type="text" value={name} onChange={handleChangeName} /></p>
                <p className="info">Price: <input type="text" value={price} onChange={handleChangePrice} /></p>
                <p className="button green" onClick={editItem}>OK</p>
            </div>
    );
};

export default ContentCard;