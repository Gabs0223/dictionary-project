import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="titulo">Hello word!</h1>
        </header>
        <h2 className="subtitulo">Search your favorite word</h2>
        <main>
          <Dictionary defaultKeyword="glow" />
        </main>
        <footer>
          This project was coded by Gabri Sanchez🌠 and is{" "}
          <a
            href="https://github.com/Gabs0223/dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/teams/gabs0223/overview"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Netlify
          </a>
        </footer>
        <br />
      </div>
    </div>
  );
}

export default App;
