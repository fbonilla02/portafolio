import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button';
import styled from 'styled-components';

const FormContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
    & p {
        text-align: center;
        font-size: 1.5rem;
    }
    h3{
        text-align: center;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    & input{
        height: 40px;
        padding: 0px 10px;
        margin-top: 10px;
    }
    & textarea{
        margin-top: 10px;
        height: 100px;
        padding:10px;
    }
`
const ResponseContainer = styled.div`
    display: grid;
    text-align: center;
    & p{ 
        padding: 20px 2rem;
        
    }
    `

function ContactForm() {
  const [state, handleSubmit] = useForm("xayzejye");
  if (state.succeeded) {
      return <ResponseContainer>
        <h3>Muchas Gracias!</h3>
        <p>Me pondré en contacto contigo lo antes posible para responder a tus preguntas o discutir cualquier proyecto en el que pueda ayudarte. </p>
      </ResponseContainer>;
  }

  return (
        <FormContainer>
        <h3>Enviame un mensaje!</h3>
        <p>¿Tienes alguna pregunta o quieres contactarme? <br/> llena el formulario</p>
        
        <Form onSubmit={handleSubmit}>
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
        <label htmlFor='message'>
            Mensaje
        </label>
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
        </Form>
        </FormContainer>
  );
}

export default ContactForm;