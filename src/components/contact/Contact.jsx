import ContactForm from 'components/contact-form/ContactForm';
import 'components/contact/Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <div data-aos="fade-right">
        <h3>CONTACT ME</h3>
        <p>Hey! Excited to hear from you. Whether you have a question, an opportunity,
          or just want to say hello, feel free to reach out using the form below.
          Looking forward to connecting and exploring ways we can work together!
        </p>
      </div>
      <ContactForm data-aos="fade-left" />
    </div>
  )
}

export default Contact;