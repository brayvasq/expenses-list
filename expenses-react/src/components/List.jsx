// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const mapStateToProps = state => {
  return { expenses: state.expenses }
};

const ConnectedList = ({ expenses }) => (
    <ul>
        {expenses.map(el => (
            <Item key={el.id} post={el}/>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
