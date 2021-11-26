import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Gab's Dictionary</h1>
        </header>
        <h2>Search your favorite word</h2>
        <main>
          <Dictionary defaultKeyword="dog" />
        </main>
        <footer>Coded by Gabs 🌠</footer>
      </div>
    </div>
  );
}

export default App;
