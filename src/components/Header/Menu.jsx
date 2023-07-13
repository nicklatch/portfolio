import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [focused, setFocused] = useState('');
  const location = useLocation().pathname;

  useEffect(() => {
    setFocused(location);
  }, [location]);

  console.log(focused);

  return (
    <nav>
      <Link to='/about' className={focused === '/about' && 'focused'}>
        About
      </Link>
      <Link to='/projects' className={focused === '/projects' && 'focused'}>
        Projects
      </Link>
    </nav>
  );
};

export default Menu;
