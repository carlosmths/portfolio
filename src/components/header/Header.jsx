import 'components/header/Header.scss';
import { ReactComponent as BurgerIcon } from 'assets/icon-burger.svg';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const scrollToSection = (event) => {
    event.preventDefault();
    const sectionId = event.target.hash;
    const section = document.querySelector(sectionId);
    const header = document.querySelector('.header');
    window.scrollTo({
        top: section.offsetTop - header.clientHeight,
        behavior: 'smooth'
    });
}

  return (
    <header className="header">
      <div className="header-logo">carlosmthsdev</div>
      <div className={`burger-menu ${isMenuOpen ? 'menu-open' : ''}`} onClick={menuOnClick}>
        <BurgerIcon />
      </div>
      <nav className={`header-navigation ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={scrollToSection}>Home</a></li>
          <li><a href="#about" onClick={scrollToSection}>About</a></li>
          <li><a href="#projects" onClick={scrollToSection}>Projects</a></li>
          <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;