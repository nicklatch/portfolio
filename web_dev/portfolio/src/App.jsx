import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import nodeLogo from "./assets/nodejs-1.svg";
import "./App.css";
import CommingSoon from "./CommingSoon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CommingSoon />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://nodejs.org/en" target="_blank">
          <img src={nodeLogo} className="logo react" alt="logo" />
        </a>
      </div>
      <p>Diesel Technician Turned Developer!</p>
    </div>
  );
}

export default App;
