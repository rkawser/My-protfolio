import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
function ContactForm() {
  const [state, handleSubmit] = useForm("mpzbajry");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form className='contact-form my-5' onSubmit={handleSubmit}>
      <label htmlFor="email">
        Contact Me
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Description'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn btn-info' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
