import logo from './logo.svg';
import List from "./js/components/List";
import Form from "./js/components/Form";

function App() {
  return (
    <>
      <div className="App">
        <h2>Expenses</h2>
        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </>
  );
}

export default App;
