import myUglyFace from "./assets/me.png";
import "./App.css";

const ComingSoon = () => {
  return (
    <>
      <h1>Nick Latcham</h1>
      <h2>Fullstack with a different perspectice</h2>

      <a href="https://github.com/nicklatch">
        <img
          style={{ borderRadius: "50%", width: "50%", height: "auto" }}
          src={myUglyFace}
          alt="my face"
          className="logo"
        />
      </a>
      <h3>
        Portfolio is coming soon! In the mean time, click on my face to see my
        GitHub!
      </h3>
    </>
  );
};

export default ComingSoon;
