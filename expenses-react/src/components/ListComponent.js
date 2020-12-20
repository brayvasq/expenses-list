import React, { useEffect, useState } from 'react';
import './ListComponent.css';
import axios from 'axios';
import ContentCard from './ContentCard';

const ListComponent = props => {
    const [list, setList] = useState([]);

    const createdTasks = item => {
        return <ContentCard
            key={item._id}
            id={item._id}
            name={item.item}
            price={item.price}
        />
    };

    const getExpenses = async () => {
        const expenses = await axios.get('http://localhost:5040/expenses/');
        setList(expenses.data);
    };

    useEffect(() => {
        const interval = setInterval(getExpenses, 1000);

        return () => clearInterval(interval);
    });

    const listItems = list.map(createdTasks);

    return (
        <div className="container-list">
            <h1> My Expenses </h1>
            <div className="list">
                {listItems}
            </div>
        </div>
    );
}

export default ListComponent;
