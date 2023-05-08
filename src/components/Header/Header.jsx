import Swap from './Swap';
import LightDarkToggle from './LightDarkToggle';

const Header = ({}) => {
  return (
    <header className='flex items-center justify-between text-center w-full mt-2.5 mb-5 sm:mb-10'>
      <p className='text-2xl font-bold text-center drop-shadow-lg sm:text-4xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 text-transparent bg-clip-text'>
        Nick Latcham
      </p>
      <div className='btn-group flex justify-center items-center'>
        <LightDarkToggle />
        <Swap />
      </div>
    </header>
  );
};

export default Header;
