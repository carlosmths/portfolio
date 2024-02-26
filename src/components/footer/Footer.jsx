
import SocialMedia from 'components/social-media/SocialMedia';
import 'components/footer/Footer.scss';

const Footer = () => {
  return (
    <div className="footer theme-dark">
      <span>All rights reserved © 2024 <b>carlosmths</b></span>
      <SocialMedia />
    </div>
  );
}

export default Footer;