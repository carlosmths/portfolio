import LandingPage from 'pages/LandingPage';
import 'globals/styles/main.scss';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    delay: 250,
    once: true,
    duration: 700
  });

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY} useEnterprise={true}>
      <LandingPage />
    </GoogleReCaptchaProvider>
  );
}

export default App;
