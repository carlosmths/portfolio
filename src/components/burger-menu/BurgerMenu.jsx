import 'components/burger-menu/BurgerMenu.scss';

const BurgerMenu = (props) => {
    const { isMenuOpen, onClick } = props;
    return (
        <div className={`burger-menu ${isMenuOpen ? 'menu-open' : ''}`} onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default BurgerMenu;