import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import myFace from "./assets/me.jpeg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ComingSoon />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

const ComingSoon = () => {
  return (
    <div>
      <h1>Coming Soon!</h1>
      <a href="https://github.com/nicklatch">
        <img
          style={{ borderRadius: "50%" }}
          src={myFace}
          className="logo react"
          alt="My hideous face"
        />
      </a>
      <p>
        Head on over to <a href="https://github.com/nicklatch">my github</a> to
        see what I've been building!
      </p>
    </div>
  );
};

export default App;
