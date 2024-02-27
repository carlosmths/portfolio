import 'components/contact-form/ContactForm.scss';

const ContactForm = () => {
  return (
    <form className="contact-form">
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