import 'components/header/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">carlosmths.dev</div>
      <nav className="header-navigation">
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