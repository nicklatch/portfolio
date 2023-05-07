const Header = () => {
  return (
    <header className='flex justify-between w-full mb-10 ring-4 shadow-lg shadow-blue-500/50 p-4 rounded-3xl'>
      <p className='text-5xl font-bold text-white text-center drop-shadow-lg'>
        Nick Latcham
      </p>
      <div>
        <button className='btn btn-outline'>About</button>
        <button className='btn btn-outline mx-2'>Projects</button>
        <button className='btn btn-outline'>Blog</button>
      </div>
    </header>
  );
};

export default Header;
