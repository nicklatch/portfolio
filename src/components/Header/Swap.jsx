import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Swap = () => {
  const dropdown = useRef();
  const handleClick = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
  };

  return (
    <div className="dropdown dropdown-bottom" ref={dropdown}>
      <button
        tabIndex="0"
        className="btn btn-ghost bg-transparent ml-1 hover:bg-transparent"
        onClick={handleClick}
      >
        Menu
      </button>
      <ul
        tabIndex="0"
        className="menu dropdown-content rounded-md w-fit items-center justify-center bg-grey-800 dark:bg-black ring-indigo-500 ring-2 shadow-xl shadow-indigo-500"
      >
        <li className="w-full sm:hover-bordered">
          <Link
            to="/about"
            className="text-center w-full text-white pl-5 m-auto"
          >
            About
          </Link>
        </li>
        <li className="w-full sm:hover-bordered">
          <Link to="/projects" className="text-center m-auto text-white">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Swap;
