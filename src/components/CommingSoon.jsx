import myUglyFace from "../assets/me.png";

const ComingSoon = () => {
  return (
    <div className="mockup-window ring-4 ring-indigo-500 shadow-lg shadow-indigo-500/50 p-8 sm:max-w-2xl sm:max-h-3xl mx-auto">
      <h1 className="text-4xl text-center mb-4 sm:text-6xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">
        Portfolio coming soon!
      </h1>
      <p className="text-md sm:text-lg">
        Hey there, I'm Nick and I'm a fullstack developer. I've spent all of my
        professional life in the trucking industry, starting as a mechanic and
        now as a techincal support manager. Now, I am looking to move into tech
        full time! My site is still a work in progress, but feel free to poke
        and around and be sure to check back often!
      </p>
    </div>
  );
};

export default ComingSoon;
