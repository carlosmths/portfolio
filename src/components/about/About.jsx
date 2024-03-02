import 'components/about/About.scss';
import Mdp2 from 'assets/mar-del-plata2.jpg';
import Mdp1 from 'assets/mar-del-plata1.png';
import CV from 'assets/cv.pdf';
import Button from 'components/Button/Button';

const getYearsOfExperience = () => {
  const STARTING_YEAR = 2017;
  const currentYear = new Date().getFullYear();
  return currentYear - STARTING_YEAR;
}

const About = () => {
  return (
    <div className="about">
      <div className="about-images-container" data-aos="flip-up">
        <img src={Mdp2} className="image-1" alt="Mar del plata" />
        <img src={Mdp1} className="image-2" alt="Mar del plata" />
      </div>
      <div className="about-info" data-aos="zoom-in">
        <h3 className="about-title">ABOUT ME</h3>
        <p>
          I'm a dynamic frontend engineer hailing from the vibrant coastal city of Mar del Plata,
          Buenos Aires, Argentina. With {getYearsOfExperience()}+ years of experience in web development, I've had the privilege of crafting exceptional
          digital experiences for leading tech firms.
        </p>
        <p>
          I thrive on continuous growth, always pushing boundaries to transform concepts
          into captivating digital realities. What sets me apart? I do all this while embracing the remote work lifestyle,
          collaborating seamlessly with teams worldwide to deliver outstanding results.
        </p>
        <div className="about-personal-info">
          <div className="about-data">
            <h4>FULL NAME</h4>
            <p>Carlos Javier Mathias Carcamo</p>
          </div>
          <div className="about-data">
            <h4>EMAIL</h4>
            <a href="mailto:someone@example.com">carlosmths@gmail.com</a>
          </div>
        </div>
        <Button href={CV} download="Carlos Javier Mathias Carcamo - CV.pdf">DOWNLOAD CV</Button>
      </div>
    </div>
  );
}

export default About;