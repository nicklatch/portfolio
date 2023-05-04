import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import nodeLogo from "./assets/nodejs-1.svg";
import mongoLogo from "./assets/MongoDB_Logo.svg";
import expressLogo from "./assets/expressjs-icon.svg";
import CommingSoon from "./CommingSoon";
import "./App.css";

function App() {
  return (
    <div className="flex-col justify-center items-center">
      <CommingSoon />
      <div className="flex items-center justify-between">
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
