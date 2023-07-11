import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = ({}) => {
  return (
    <header id='header'>
      <Link to='/'>
        <p className='header__name'>Nick Latcham</p>
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
