import React from 'react'
import styled from 'styled-components'


const ArticleContainer = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 50px;
    
    & h3{
        color: #663399;
    }

    & p{
        margin-top: 40px;
        line-height: 25px;
    }
    & article{
        display: flex;
        flex-direction: column;
    }
    
    & article:last-child{
        justify-content: flex-end;
    }
`


export default function AboutMe() {
  return (
    <>
    <h2 className='title'>Sobre mi</h2>
        <ArticleContainer >
        <article>
          <h3 >Desarrollo</h3>
          <p>
          Soy un apasionado desarrollador front-end react con un fuerte deseo de convertirme en un desarrollador full stack JS. Me encanta crear aplicaciones interactivas y responsivas con React y siempre estoy en busca de nuevas formas de mejorar mis habilidades y ofrecer soluciones innovadoras a mis clientes.
          <br/>
          <br/>
          Sin embargo, mi objetivo a largo plazo es convertirme en un desarrollador full stack JS. Quiero tener un conocimiento completo de todas las capas de una aplicación, desde la base de datos hasta la interfaz de usuario, para poder ofrecer soluciones más completas y efectivas a mis clientes.
          </p>
        </article>
        <article>
          <h3>Diseño</h3>
          <p>
          Además de mi pasión por el desarrollo, también tengo un interés por el diseño y las tecnologías relacionadas. Me encanta el modelaje 3D y cómo se pueden crear objetos y escenas tridimensionales con un aspecto realista y detallado. Creo que esa combinación de habilidades técnicas y estéticas es crucial para crear productos digitales de alta calidad.
          </p>
        </article>
        </ArticleContainer>
    </>
  )
}
