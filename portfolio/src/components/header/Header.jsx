import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">carlosmths.dev</div>
      <nav className="header-navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;