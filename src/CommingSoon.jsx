import myUglyFace from "./assets/me.png";

const ComingSoon = () => {
  return (
    <div className="flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center">Nick Latcham</h1>
      <h2 className=" text-xl text-center">Portfolio coming soon!</h2>

      <a href="https://github.com/nicklatch" className="self-center">
        <img src={myUglyFace} alt="my face" className="" />
      </a>
      <h3>Click on my face to see my GitHub!</h3>
    </div>
  );
};

export default ComingSoon;
