import 'components/Button/Button.scss';
import { ReactComponent as PreloaderIcon } from 'assets/icon-preloader.svg';

const getChildrenOrPreloader = (isLoading, children) => {
  return isLoading ? <PreloaderIcon /> : children;
}

const Button = (props) => {
  const { children, href, isLoading, ...attrs } = props;
  
  return (
    href ?
      <a className="btn" href={href} {...attrs} disabled={isLoading}>
        {getChildrenOrPreloader(isLoading, children)}
      </a> :
      <button className="btn" {...attrs} disabled={isLoading}>
        {getChildrenOrPreloader(isLoading, children)}
      </button>
  )
}

export default Button;