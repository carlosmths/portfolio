import Button from 'components/Button/Button';
import 'components/contact-form/ContactForm.scss';
import { useCallback, useRef, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import emailjs from '@emailjs/browser';
import classnames from 'classnames';

const ContactForm = () => {
  const TIME_TO_FADE = 3000;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const formRef = useRef(null);

  const handleSubmitResponse = (result) => {
    formRef.current.reset();
    setSubmitSuccess(result);
    setShowResult(true);
    setTimeout(() => setShowResult(false), TIME_TO_FADE);
  }

  const sendEmail = useCallback(async () => {
    try {
      const response = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_API_KEY
      );
      if (response.text === 'OK') {
        handleSubmitResponse(true);
      }
    } catch (e) {
      handleSubmitResponse(false);
      console.error(e.text);
    }
  }, []);

  const handleReCaptchaVerify = useCallback(async (event) => {
    event.preventDefault();
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    setIsLoading(true);
    const token = await executeRecaptcha('contactForm');
    if (token) {
      await sendEmail();
    } else {
      console.error('Recaptha token not received');
    }
    setIsLoading(false);
  }, [executeRecaptcha, sendEmail]);

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleReCaptchaVerify}>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="inputName">Name</label>
          <input id="inputName" type="text" name="userName" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="inputEmail">Your email</label>
          <input id="inputEmail" type="email" name="userEmail" required></input>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="inputMessage">Message</label>
        <textarea id="inputMessage" name="userMessage" required></textarea>
      </div>
      <small>This site is protected by reCAPTCHA and the Google&nbsp;
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
      <div className="submit-container">
        <Button type="submit" isLoading={isLoading}>SEND MESSAGE</Button>
        <span className={classnames({
          'animate': showResult,
          'success': submitSuccess,
          'error': !submitSuccess
        }
        )}>{submitSuccess ? 'Email sent!' : 'Email failed!'}</span>
      </div>
    </form>
  )
}

export default ContactForm;