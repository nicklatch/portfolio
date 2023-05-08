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
        className='btn btn-ghost bg-transparent ml-1 hover:bg-transparent'
        onClick={handleClick}
      >
        Menu
      </button>
      <ul
        tabIndex='0'
        className='menu dropdown-content rounded-md w-fit items-center justify-center bg-grey-800 dark:bg-black ring-indigo-500 ring-2 shadow-xl shadow-indigo-500'
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
