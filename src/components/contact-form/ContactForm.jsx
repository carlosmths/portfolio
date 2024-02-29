import 'components/contact-form/ContactForm.scss';
import { useRef } from 'react';

const ContactForm = () => {
  const recaptchaRef = useRef(null);

  const handleRecaptchaChange = (value) => {
    // Handle reCAPTCHA response here
    console.log('reCAPTCHA value:', value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('LIL PAP')
    const recaptchaValue = recaptchaRef.current.getValue();
    if(recaptchaValue) {
      console.log('SEND IT', recaptchaValue);
    }
  }

  return (
    <form className="contact-form" onSubmit={() => submitHandler()}>
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
      <button type="submit" className="btn">SEND MESSAGE</button>
    </form>
  )
}

export default ContactForm;