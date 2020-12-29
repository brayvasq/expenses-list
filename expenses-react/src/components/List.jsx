// src/js/components/List.jsx
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { fetchGetExpenses } from "../actions/index";

const mapStateToProps = state => {
    return { expenses: state.expenses }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetExpenses: () => dispatch(fetchGetExpenses())
    }
}

const ConnectedList = props => {

    useEffect(() => props.fetchGetExpenses());

    return (
        <ul>
            {props.expenses.map(el => (
                <Item key={el._id} expense={el} />
            ))}
        </ul>
    );
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
