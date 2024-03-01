import 'components/hero/Hero.scss';
import ProfileImage from 'assets/profile.jpg';
import SocialMedia from 'components/social-media/SocialMedia';
import TechStack from 'components/tech-stack/TechStack';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="columns-group">
        <div className="column-info">
          <h1 className="title">FRONT-END WEB DEVELOPER</h1>
          <p className="text">Hi, I'm Carlos Mathias, an enthusiastic front-end web developer based in Mar del Plata, Buenos Aires, Argentina.</p>
          <SocialMedia />
        </div>
        <div className="column-image">
          <img src={ProfileImage} alt="Profile"></img>
        </div>
      </div>
      <TechStack />
    </div>
  );
}

export default Hero;