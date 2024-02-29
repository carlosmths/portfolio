import LandingPage from 'pages/LandingPage';
import 'globals/styles/main.scss';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY} useEnterprise={true}>
      <LandingPage />
    </GoogleReCaptchaProvider>
  );
}

export default App;
