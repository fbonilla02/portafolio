import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button';


function ContactForm() {
  const [state, handleSubmit] = useForm("xayzejye");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
        <article>
        <h3>Enviame un mensaje</h3>
        <p>¿Tienes alguna pregunta o quieres contactarme? llena el formulario</p>
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email Address
        </label>
        <input
            id="email"
            type="email" 
            name="email"
            placeholder='Email'
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
            id="message"
            name="message"
            placeholder='Hola, queria contactarte ya que tengo un proyecto que te puede interesar, ¿te puedo llamar?'
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
            Submit
        </Button>
        </form>
        </article>
  );
}

export default ContactForm;