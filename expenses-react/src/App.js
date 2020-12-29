import './App.css';
import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
    <div className="Container">
      <div className="Form-Container">
        <h2>Add a new expense</h2>
        <Form />
      </div>
      <div className="List-Container">
        <h2>Expenses</h2>
        <List />
      </div>
    </div>
  );
}

export default App;
