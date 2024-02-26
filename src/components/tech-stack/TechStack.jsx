import 'components/tech-stack/TechStack.scss';
import { ReactComponent as ReactIcon } from 'assets/icon-react.svg';
import { ReactComponent as AngularIcon } from 'assets/icon-angular.svg';
import { ReactComponent as Html5Icon } from 'assets/icon-html5.svg';
import { ReactComponent as JavascriptIcon } from 'assets/icon-javascript.svg';
import { ReactComponent as SassIcon } from 'assets/icon-sass.svg';
import { ReactComponent as TypescriptIcon } from 'assets/icon-typescript.svg';
import { ReactComponent as AemIcon } from 'assets/icon-aem.svg';
import Tooltip from 'components/tooltip/Tooltip';

const IconsSlider = () => {
  return (
    <div className="tech-stack">
      <h4>Tech stack</h4>
      <div className="icon-container">
        <Tooltip text="React">
          <ReactIcon />
        </Tooltip>
      </div>
      <div className="icon-container">
        <Tooltip text="Angular">
          <AngularIcon />
        </Tooltip>
      </div>
      <div className="icon-container">
        <Tooltip text="Adobe Experience Manager">
          <AemIcon />
        </Tooltip>
      </div>
      <div className="icon-container">
        <Tooltip text="Javascript">
          <JavascriptIcon />
        </Tooltip>
      </div>
      <div className="icon-container">
        <Tooltip text="Typescript">
          <TypescriptIcon />
        </Tooltip>
      </div>
      <div className="icon-container">
        <Tooltip text="HTML 5">
          <Html5Icon />
        </Tooltip>
      </div>
      <div className="icon-container">
        <Tooltip text="SASS">
          <SassIcon />
        </Tooltip>
      </div>
    </div>
  )
}

export default IconsSlider;