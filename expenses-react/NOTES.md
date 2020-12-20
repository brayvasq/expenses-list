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
mkdir -p src/js/store

# Reducers directory
mkdir -p src/js/reducers

# Actions directory
mkdir -p src/js/actions

# Constants directory
mkdir -p src/js/constants

# Components directory
mkdir -p src/js/components
```
## Redux
### Store for expenses

```javascript
// src/js/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers/index"

const store = createStore(rootReducer);

export default store;
```

### Reducer for expenses
```javascript
// src/js/reducers/index.js
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
// src/js/constants/action-types.js
export const ADD_EXPENSE = "ADD_EXPENSE";
```

Create the action
```javascript
// src/js/actions/index.js
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
// src/js/reducers/index.js
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

## References
- https://www.valentinog.com/blog/redux/
- https://react-redux.js.org/introduction/quick-start
- https://www.youtube.com/watch?v=oD3miHerQbY
