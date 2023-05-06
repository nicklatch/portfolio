import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import nodeLogo from "./assets/nodejs-1.svg";
import mongoLogo from "./assets/MongoDB_Logo.svg";
import expressLogo from "./assets/expressjs-icon.svg";
import CommingSoon from "./CommingSoon";
import "./App.css";

function App() {
  return (
    <div className="flex-col justify-between items-center bg-gradient-to-b from-dark_blue to-purple">
      <CommingSoon />
      <div className="flex items-center justify-between py-2">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="p-6 h-44 hover:drop-shadow-xl hover:scale-125 hover:transition-all"
            alt="Vite logo"
          />
        </a>
        <a href="https://mongodb.com" target="_blank">
          <img
            src={mongoLogo}
            className="p-6 h-44 hover:drop-shadow-xl hover:scale-125 hover:transition-all"
            alt="mongo logo"
          />
        </a>
        <a href="https://expressjs.com" target="_blank">
          <img
            src={expressLogo}
            className="p-6 h-44 hover:drop-shadow-xl hover:scale-125 hover:transition-all"
            alt="express logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="p-6 h-44 hover:drop-shadow-xl hover:scale-125 hover:transition-all"
            alt="React logo"
          />
        </a>
        <a href="https://nodejs.org/en" target="_blank">
          <img
            src={nodeLogo}
            className="p-6 h-44 hover:drop-shadow-xl hover:scale-125 hover:transition-all"
            alt="nodejs logo"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
