# React Frontend
ReactJS project to consume an expenses API.

## Setup project
Create the react project app
```bash
npx create-react-app expenses-react
```

Install `redux`
```bash
npm i redux --save-dev
```

Install `react-redux`
```bash
npm i react-redux --save-dev
```

### Structure project
```bash
# Stores directory
mkdir -p src/store

# Reducers directory
mkdir -p src/reducers

# Actions directory
mkdir -p src/actions

# Constants directory
mkdir -p src/constants

# Components directory
mkdir -p src/components
```
## Redux
### Store for expenses

```javascript
// src/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers/index"

const store = createStore(rootReducer);

export default store;
```

### Reducer for expenses
```javascript
// src/reducers/index.js
const initialState = {
    expenses: []
};

const rootReducer = (state = initialState, action) => {
  return state;
}

export default rootReducer;
```

### Actions for expenses
Create the respective constant
```javascript
// src/constants/action-types.js
export const ADD_EXPENSE = "ADD_EXPENSE";
```

Create the action
```javascript
// src/actions/index.js
import { ADD_EXPENSE } from "../constants/action-types";

export const addExpense = (payload) => {
    return {
      type: ADD_EXPENSE,
      payload
    };
};
```

### Add expenses
Add the reducer for `ADD_ARTICLE` action
```javascript
// src/reducers/index.js
import { ADD_EXPENSE } from "../constants/action-types";

// ....
const rootReducer = (state = initialState, action) => {
  // ....
  if (action.type === ADD_EXPENSE){
    return Object.assign({}, state, {
      expenses: state.expenses.concat(action.payload)
    });
  }
  // ....
  return state;
}
```

## React-redux
```javascript
// src/index.js
import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index"
import App from './App';

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
```

## List component
Modify the App component

```javascript
// src/App.js
import logo from './logo.svg';
import List from "./components/List"

function App() {
  return (
    <div className="App">
      <h2>Expenses</h2>
      <List/>
    </div>
  );
}

export default App;
```

List component
```javascript
// src/components/List.jsx

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

```

Add some temp data to our initial state
```javascript
// src/reducers/index.js

// ...
const initialState = {
  expenses: [
    {
      id: 1,
      item: "coca-cola",
      price: 3000
    },
    {
      id: 2,
      item: "pizza",
      price: 4000
    }
  ]
};
```

## Form component
```javascript
// src/components/Form.jsx
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
```

```javascript
// src/App.js
// ....
import Form from "./components/Form";

function App() {
  return (
    <>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
      <div className="App">
        <h2>Expenses</h2>
        <List />
      </div>
    </>
  );
}
// ...
```

## Item component
Add action types
```javascript
// src/constants/action-types.js
// ...
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
```

Add actions
```javascript
// src/actions/index.js
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from "../constants/action-types";

// ....
export const editExpense = payload => {
  return {
    type: EDIT_EXPENSE,
    payload
  };
};

export const removeExpense = payload => {
  return {
    type: REMOVE_EXPENSE,
    payload
  };
};
```

Add action reducers
```javascript
// src/reducers/index.js
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from "../constants/action-types";

// ....
const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_EXPENSE) {
    // ....
  } else if (action.type === REMOVE_EXPENSE) {
    let expenses = state.expenses
      .slice()
      .filter(el => el.id !== action.payload.id);

    return Object.assign({}, state, {
      expenses: expenses
    });
  } else if (action.type === EDIT_EXPENSE){
    let expenses = state.expenses
    .slice()
    .map(el => el.id === action.payload.id ? {...el, ...action.payload} : el);

    return Object.assign({}, state, {
      expenses: expenses
    });
  }

  return state;
}
```

Add `Item` component
```javascript
// src/components/Item.jsx
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
    const [item, setItem] = useState(props.expense.item);
    const [price, setPrice] = useState(props.expense.price);
    const [edit, setEdit] = useState(false);

    const editToggle = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        props.removeExpense({ id: props.expense.id })
    };

    const handleEdit = () => {
        props.editExpense({ id: props.expense.id, item, price });
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
                <p>{props.expense.item} - {props.expense.price}</p>
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
```

Use `Item` component into the `List` component
```javascript
// src/components/List.jsx
import Item from "./Item";

// ....
const ConnectedList = ({ expenses }) => (
    <ul>
        {expenses.map(el => (
            <Item key={el.id} expense={el}/>
        ))}
    </ul>
);
```

## API lib
```bash
# Libs directory
mkdir -p src/lib
```

Add the api crud client
```javascript
// src/lib/expenses.js
const BASE_URL = "http://localhost:5040"

export const apiGetExpenses = () => {
    const url = BASE_URL + "/expenses";

    return fetch(url)
        .then(response => response.json());
};

export const apiAddExpense = (expense) => {
    const url = BASE_URL + "/expenses";

    const request = {
        method: 'POST',
        body: JSON.stringify(expense),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return fetch(url, request)
        .then(response => response.json());
};

export const apiUpdateExpense = (id, expense) => {
    const url = BASE_URL + "/expenses/" + id;

    const request = {
        method: 'PUT',
        body: JSON.stringify(expense),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return fetch(url, request)
        .then(response => response.json());
};

export const apiDeleteExpense = (id) => {
    const url = BASE_URL + "/expenses/" + id;

    const request = { method: 'DELETE' };

    return fetch(url, request)
        .then(response => response.json());
};
```

Add redux-thunk
```bash
npm i redux-thunk
```

Add thunk middleware
```javascript
// src/store/index.js
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index"

import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

Add `GET_EXPENSES` constant.
```javascript
// src/constants/action-types.js
// ....
export const GET_EXPENSES = "GET_EXPENSES";
```

Add async actions.
```javascript
// src/actions/index.js
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE, GET_EXPENSES } from "../constants/action-types";
import { apiGetExpenses, apiAddExpense, apiUpdateExpense, apiDeleteExpense } from '../lib/expenses';

const getExpenses = payload => ({ type: GET_EXPENSES, payload });

const addExpense = payload => {
  // .....
};

const editExpense = payload => {
 //  .....
};

const removeExpense = payload => {
 // ......
};

// Async actions
export const fetchGetExpenses = () => {
  return dispatch => {
    return apiGetExpenses()
      .then(response => {
        dispatch(getExpenses(response));
      })
  }
}

export const fetchAddExpense = expense => {
  return dispatch => {
    apiAddExpense(expense)
      .then(response => dispatch(addExpense({ item: expense.item, price: expense.price })))
      .catch(response => console.log(response))
  }
}

export const fetchUpdateExpense = (id, expense) => {
  return dispatch => {
    apiUpdateExpense(id, expense)
      .then(response => dispatch(editExpense({ id: id, item: expense.item, price: expense.price })))
      .catch(response => console.log(response))
  }
}

export const fetchDeleteExpense = id => {
  return dispatch => {
    apiDeleteExpense(id)
      .then(response => dispatch(removeExpense({id: id})))
      .catch(response => console.log(response))
  }
}
```

Add get expenses reducer
```javascript
// src/reducers/index.js
import { ADD_EXPENSE, EDIT_EXPENSE, GET_EXPENSES, REMOVE_EXPENSE } from "../constants/action-types";

const initialState = {
  expenses: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === GET_EXPENSES) {
    return { ...state, expenses: action.payload }
  } else if (action.type === ADD_EXPENSE) {
    // .....
  } else if (action.type === REMOVE_EXPENSE) {
    let expenses = state.expenses
      .slice()
      .filter(el => el._id !== action.payload.id);
    // ....
  } else if (action.type === EDIT_EXPENSE) {
    let expenses = state.expenses
      .slice()
      .map(el => el._id === action.payload.id ? { ...el, ...action.payload } : el);
    // .....
  }

  return state;
}

// .....
```

Add get expenses dispatch function into `List` component
```javascript
// src/js/components/List.jsx
import React, { useEffect } from "react";
// ....
import { fetchGetExpenses } from "../actions/index";

// ....
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

// ....
```

Change dispatch function into `Item` component.
```javascript
// src/js/components/Item.jsx
// ....
import { fetchUpdateExpense, fetchDeleteExpense } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        fetchUpdateExpense: (id, expense) => dispatch(fetchUpdateExpense(id, expense)),
        fetchDeleteExpense: id => dispatch(fetchDeleteExpense(id))
    }
};

const ConnectedItem = props => {
    // ....

    const handleDelete = () => {
        props.fetchDeleteExpense(props.expense._id)
    };

    const handleEdit = () => {
        props.fetchUpdateExpense(props.expense._id, { item, price });
        editToggle();
    };

    // ....

    return (
        !edit ?
            <div>
                <p>{props.expense._id} - {props.expense.item} - {props.expense.price}</p>
                <button onClick={editToggle}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            : <div>
              {/* Edit From code */}
            </div>
    );
};
// ....
```

Change dispatch function into `Form` component.
```javascript
// src/js/components/Form.jsx
// ....
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

    // ....

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

// ....
```

## References
- https://www.valentinog.com/blog/redux/
- https://react-redux.js.org/introduction/quick-start
- https://www.youtube.com/watch?v=oD3miHerQbY
