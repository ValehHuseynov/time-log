import "./App.css";
import Form from "components/Form";
import Logs from "components/Logs";

function App() {
  return (
    <div className="App">
      <h1>My time log</h1>
      <div className="App-body">
        <div className="App-body__logs">
          <Logs />
        </div>
        <div className="App-body__form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
