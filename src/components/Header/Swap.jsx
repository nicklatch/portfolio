import { useRef } from 'react';

const Swap = () => {
  const dropdown = useRef();
  const handleClick = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
  };

  return (
    <div className='dropdown dropdown-bottom' ref={dropdown}>
      <button
        tabIndex='0'
        className='btn btn-ghost ml-5 bg-transparent'
        onClick={handleClick}
      >
        Menu
      </button>
      <ul
        tabIndex='0'
        className='menu dropdown-content rounded-md items-center left-3 justify-center bg-grey-800 dark:bg-black ring-indigo-500 ring-2 shadow-xl shadow-indigo-500'
      >
        <li className='w-full sm:hover-bordered'>
          <a
            href='#about'
            className='text-center w-full text-white pl-5 m-auto'
          >
            About
          </a>
        </li>
        <li className='w-full sm:hover-bordered'>
          <a href='#projects' className='text-center m-auto text-white'>
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Swap;
