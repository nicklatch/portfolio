import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import nodeLogo from '../../assets/nodejs-1.svg';
import mongoLogo from '../../assets/MongoDB_Logo.svg';
import expressLogo from '../../assets/expressjs-icon.svg';

const TechStack = () => {
  return (
    <>
      <div className='flex flex-wrap items-center justify-center sm:w-5/6 h-full'>
        <a href='https://vitejs.dev' target='_blank'>
          <img
            src={viteLogo}
            className='p-2 h-24 w-auto hover:drop-shadow-lg hover:scale-125 hover:transition-all hover:ease-in-out duration-100'
            alt='Vite logo'
          />
        </a>
        <a href='https://mongodb.com' target='_blank'>
          <img
            src={mongoLogo}
            className='p-2 h-24 w-auto hover:drop-shadow-lg hover:scale-125 hover:transition-all hover:ease-in-out duration-100'
            alt='mongo logo'
          />
        </a>
        <a href='https://expressjs.com' target='_blank'>
          <img
            src={expressLogo}
            className='p-2 h-24 w-auto hover:drop-shadow-lg hover:scale-125 hover:transition-all hover:ease-in-out duration-100'
            alt='express logo'
          />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img
            src={reactLogo}
            className='p-2 h-24 w-auto hover:drop-shadow-lg hover:scale-125 hover:transition-all hover:ease-in-out duration-100'
            alt='React logo'
          />
        </a>
        <a href='https://nodejs.org/en' target='_blank'>
          <img
            src={nodeLogo}
            className='p-2 h-24 w-auto hover:drop-shadow-lg hover:scale-125 hover:transition-all hover:ease-in-out duration-100'
            alt='nodejs logo'
          />
        </a>
      </div>
    </>
  );
};

export default TechStack;
