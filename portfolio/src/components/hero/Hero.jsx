import './Hero.scss';
import ProfileImage from '../../assets/profile.jpg';
import SocialMedia from '../social-media/SocialMedia';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="column-info">
        <h1 className="title">Front-end web developer</h1>
        <div className="text">Hi, I'm Carlos Mathias, an enthusiastic front-end web developer based in Mar del Plata, Buenos Aires, Argentina</div>
        <SocialMedia />
      </div>
      <div className="column-image">
        <img src={ProfileImage} alt="Profile"></img>
      </div>
    </div>
  );
}

export default Hero;