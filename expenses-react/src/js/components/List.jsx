// src/js/components/List.jsx

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { expenses: state.expenses }
};

const ConnectedList = ({ expenses }) => (
    <ul>
        {expenses.map(el => (
            <li key={el.id}>{el.item} - {el.price}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
