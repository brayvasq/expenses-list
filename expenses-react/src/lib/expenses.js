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
