import React, { useState } from 'react';
import './FormComponent.css';
import axios from 'axios';

const FormComponent = props => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleChangeName = event => setName(event.target.value);

    const handleChangePrice = event => setPrice(event.target.value);

    const addItem = async () => {
        const data = {
            item: name,
            price
        }

        await axios.post('http://localhost:5040/expenses', data);
    }

    return (
        <div className="form-cont">
            <h1> Add a Expense </h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt="" />
            <div className="form-page">
                <input
                    type="text"
                    placeholder="Input your item here"
                    value={name}
                    onChange={handleChangeName} />
                <input
                    type="number"
                    placeholder="Input the price of item"
                    value={price}
                    onChange={handleChangePrice} />
                <input type="submit" value="Send" onClick={addItem} />
            </div>
        </div>
    );
}

export default FormComponent;