import 'components/contact-form/ContactForm.scss';
import { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async (event) => {
    event.preventDefault();
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('contactForm');
    console.log('TOKEN', token);
  }, [executeRecaptcha]);

  return (
    <form className="contact-form" onSubmit={handleReCaptchaVerify}>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="inputName">Name</label>
          <input id="inputName" type="text" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="inputEmail">Your email</label>
          <input id="inputEmail" type="email" required></input>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="inputMessage">Message</label>
        <textarea id="inputMessage" required></textarea>
      </div>
      <small>This site is protected by reCAPTCHA and the Google&nbsp;
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
      <button type="submit" className="btn">SEND MESSAGE</button>
    </form>
  )
}

export default ContactForm;