import { Link } from 'react-router-dom';

const Menu = () => {
  const hideToggle = document.getElementById('menu-content');

  const handleClick = () => {
    hideToggle.classList.toggle('hide');
  };

  return (
    <nav>
      <button type="button" className="menu__button" onClick={handleClick}>
        Menu
      </button>
      <div className="menu-content hide slide_in" id="menu-content">
        <Link to="/about" className="">
          About
        </Link>
        <Link to="/projects" className="">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
