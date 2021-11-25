import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Gabs 🌠</footer>
      </div>
    </div>
  );
}

export default App;
