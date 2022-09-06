import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import ButtonConnected from "./components/ButtonConnected";
import ShowTextConnected from './components/ShowText Connected';
import ToDoList  from "./components/ToDoConnected";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>My To Do LIst</code>
        </p>

        <div>
          <Input />
          <ButtonConnected label='add task' />
          <ShowTextConnected />
          <ToDoList/>
          
        </div>

      </header>
    </div>
  );
}

export default App;
