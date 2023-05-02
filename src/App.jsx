import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import nodeLogo from "./assets/nodejs-1.svg";
import mongoLogo from "./assets/MongoDB_Logo.svg";
import expressLogo from "./assets/expressjs-icon.svg";
import "./App.css";
import CommingSoon from "./CommingSoon";

function App() {
  return (
    <div className="App">
      <CommingSoon />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://mongodb.com" target="_blank">
          <img src={mongoLogo} className="logo" alt="mongo logo" />
        </a>
        <a href="https://expressjs.com" target="_blank">
          <img src={expressLogo} className="logo" alt="express logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://nodejs.org/en" target="_blank">
          <img src={nodeLogo} className="logo" alt="nodejs logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
