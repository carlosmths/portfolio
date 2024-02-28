import 'components/header/Header.scss';
import { ReactComponent as BurgerIcon } from 'assets/icon-burger.svg';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <div className="header-logo">carlosmths.dev</div>
      <div className={`burger-menu ${isMenuOpen ? 'menu-open' : ''}`} onClick={menuOnClick}>
        <BurgerIcon />
      </div>
      <nav className={`header-navigation ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;