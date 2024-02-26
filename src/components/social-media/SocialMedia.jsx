import 'components/social-media/SocialMedia.scss';
import { ReactComponent as GithubLogo } from 'assets/logo-github.svg';
import { ReactComponent as LinkedinLogo } from 'assets/logo-linkedin.svg';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://github.com/carlosmths">
        <GithubLogo />
      </a>
      <a href="https://www.linkedin.com/in/carlos-javier-mathias-carcamo-91322036/">
        <LinkedinLogo />
      </a>
    </div>
  );
}

export default SocialMedia;