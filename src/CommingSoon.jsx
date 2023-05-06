import myUglyFace from "./assets/me.png";

const ComingSoon = () => {
  return (
    <div className="flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center pb-8 text-white">
        Nick Latcham
      </h1>
      <h2 className=" text-3xl text-center pb-8 text-white">
        Portfolio coming soon!
      </h2>
      <div className="flex justify-center">
        <img
          src={myUglyFace}
          alt="my face"
          className="w-1/3 h-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default ComingSoon;
