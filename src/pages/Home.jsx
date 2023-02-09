import React from 'react'

import styled from 'styled-components'
import AboutMe from '../components/AboutMe'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Tools from '../components/Tools'
import { NavBar } from '../GlobalStyles'
import shapes from './../assets/cross.svg'


const MainContainer = styled.main`
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
  background-color: var(--gray-color);
`

const Snap = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: ${props => props.notGrid ? '1fr' : '1fr 1fr'};
  padding: 100px 80px;
  align-items: ${props => props.notCenter ? 'normal' : 'center'} ;
  justify-items: ${props => props.notCenter ? 'normal' : 'center'} ;
  background-color: ${props => props.backcolor};
  color: var(${props => props.primary ? '--black-color' : '--white-color'});
`


export default function Home() {
  

  return (
    <MainContainer>
    
       <Snap backcolor='#663399' >
       <NavBar color='true'/>
        <section >
          <h1 className='title'>Desarrollador <br/> Front end</h1>
          <p>Hola, soy desarrollador front-end con experiencia en React. Me dedico a crear aplicaciones web dinámicas y eficientes, utilizando la popular biblioteca de JavaScript React para construir interfaces de usuario interactivas y atractivas.</p>
          </section>
          <section>
              <figure className='figureContainer'>
                  <img className='imgfranc' src='https://res.cloudinary.com/dz6w87mmx/image/upload/v1675876272/fotofran2_rjwvnv.jpg' width='200px' alt='francisco bonilla photo'/>

              </figure>
        </section>
       </Snap>

       <Snap primary notGrid notCenter>
        <AboutMe/>
       </Snap>

       <Snap primary notGrid>
        <article className='articleProjects'>
          <section className='section-projects'>
            <h3>Proyectos</h3>
            <p>Me gusta practicar lo aprendido, crear proyectos y experimentar</p>
            
            <Button toGo='/projects' >
              VER MIS PROYECTOS
            </Button>
          </section>
          <section className='section-projects'>
            <h3>A veces me gusta diseñar.</h3>
            <p>He aprendido varias cosas del modelado 3D, tambien he aprendido a usar la herramienta de ilustrator </p>
            <Button toGo='/design'>
                VER MIS DISEÑOS
            </Button>
          </section>
        </article>
      </Snap>

      <Snap primary notGrid notCenter>
        <Tools/>
      </Snap>

        <Snap primary notGrid>
          <ContactForm/>
        </Snap>

        
      <Snap backcolor='#663399'  notGrid>
        <Footer/>
      </Snap>
    </MainContainer>
  )
}
