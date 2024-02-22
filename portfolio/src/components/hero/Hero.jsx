import './Hero.scss';
import { ReactComponent as GithubLogo } from '../../assets/logo-github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/logo-linkedin.svg';
import ProfileImage from '../../assets/profile.jpg';


const Hero = () => {
  return (
    <div className="hero-main">
      <div className="column-info">
        <h1 className="title">Front-end web developer</h1>
        <div className="text">Hi, I'm Carlos Mathias, an enthusiastic front-end web developer based in Mar del Plata, Buenos Aires, Argentina</div>
        <div className="social-media">
          <a href="https://github.com/carlosmths">
            <GithubLogo />
          </a>
          <a href="https://www.linkedin.com/in/carlos-javier-mathias-carcamo-91322036/">
            <LinkedinLogo />
          </a>
        </div>
      </div>
      <div className="column-image">
        <img src={ProfileImage} alt="Profile"></img>
      </div>
    </div>
  );
}

export default Hero;