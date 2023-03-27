import myUglyFace from "./assets/me.png";
import "./App.css";

const ComingSoon = () => {
  return (
    <>
      <h1>Nick Latcham</h1>
      <h2>Portfolio coming soon!</h2>

      <a href="https://github.com/nicklatch">
        <img
          style={{ borderRadius: "50%", width: "50%", height: "auto" }}
          src={myUglyFace}
          alt="my face"
          className="logo"
        />
      </a>
      <h3>Click on my face to see my GitHub!</h3>
    </>
  );
};

export default ComingSoon;
