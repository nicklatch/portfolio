import myUglyFace from '../assets/me.png';

const ComingSoon = () => {
  return (
    <div className='flex-col w-3/4 sm:w-full'>
      <div className='m-auto'>
        <img
          src={myUglyFace}
          alt='my face'
          className='mx-auto mb-16 w-1/4 h-auto max-w-220 max-h-220 aspect-square rounded-full drop-shadow-xl'
        />
      </div>
      <div className='mockup-window ring-4 shadow-md shadow-blue-500/50 p-8 w-1/2 m-auto max-w-220 max-h-220 '>
        <h1 className='text-6xl text-center text-white mb-4'>
          Portfolio coming soon!
        </h1>
        <p className='text-center text-lg'>
          Hey there, I'm Nick! I'm a fullstack self-taught developer. I've spent
          all of my professional life in the trucking industry, starting as a
          mechanic and moving into a techincal support managment role. Now, I am
          looking to move into tech full time! My site is still a work in
          progress, but feel free to poke and around and be sure to check back
          often!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
