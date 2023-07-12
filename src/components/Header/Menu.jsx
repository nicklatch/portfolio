import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const menuToggle = menuHidden ? ' hide' : null;

  const handleClick = () => {
    setMenuHidden(!menuHidden);
  };

  return (
    <nav>
      <Link to='/about' className=''>
        About
      </Link>
      <Link to='/projects' className=''>
        Projects
      </Link>
    </nav>
  );
};

export default Menu;
