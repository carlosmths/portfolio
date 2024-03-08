import 'components/header/Header.scss';
import { useState } from 'react';
import BurgerMenu from 'components/burger-menu/BurgerMenu';
import { ReactComponent as Logo } from 'assets/logo.svg'
import Container from 'components/container/Container';

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
      <Container>
        <Logo className="header-logo" />
        <BurgerMenu isMenuOpen={isMenuOpen} onClick={menuOnClick} />
        <nav className={`header-navigation ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={scrollToSection}>Home</a></li>
            <li><a href="#about" onClick={scrollToSection}>About</a></li>
            <li><a href="#projects" onClick={scrollToSection}>Projects</a></li>
            <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;