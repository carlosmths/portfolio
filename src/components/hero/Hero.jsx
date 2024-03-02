import 'components/hero/Hero.scss';
import ProfileImage from 'assets/profile.jpg';
import SocialMedia from 'components/social-media/SocialMedia';
import TechStack from 'components/tech-stack/TechStack';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="columns-group">
        <div className="column-info">
          <h1 className="title">
            <span>FRONT-END</span>
            <span>WEB</span>
            <span>DEVELOPER</span>
          </h1>
          <span className="text">Hi, I'm Carlos Mathias,</span>
          <span className="text">an enthusiastic front-end web developer</span>
          <span className="text">based in Mar del Plata, Buenos Aires, Argentina.</span>
          <SocialMedia />
        </div>
        <div className="column-image">
          <div className="image-container">
            <img src={ProfileImage} alt="Profile"></img>
          </div>
        </div>
      </div>
      <TechStack />
    </div>
  );
}

export default Hero;