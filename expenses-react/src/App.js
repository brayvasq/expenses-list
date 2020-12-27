import logo from './logo.svg';
import List from "./components/List";
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

export default App;
