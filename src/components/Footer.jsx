import React from 'react'
import styled from 'styled-components'
import github from '../assets/icons8-github.svg'
import linkedin from '../assets/icons8-linkedin-2.svg'

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    font-size: 1.2rem;
    border-bottom: solid 1px var(--white-color);
    padding:  100px 50px;
    
    & h1{
        font-weight: bold;
        font-size: 1.5rem;
    }

    & ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 50px;
    background-color: var(${props => props.purpleColor ? '--purple-color':'--white-color'});
    
`
const FooterBotton = styled.ul`
    display: flex;
    padding: 50px 10px;
    gap: 50px;
    justify-content: center;

    & img{
        width: 45px;
    }

`

export default function Footer() {
  return (
    <Container purpleColor>
         <FooterContainer >
         <h1>Francisco Bonilla C.</h1>
          <ul>
            <li>Mis Proyectos</li>
            <li>Mis Diseños</li>
            <li>Mi hoja de vida </li>
          </ul>
         </FooterContainer>
          
            <FooterBotton>
                <li><img style={{color: 'white'}} src={github}/></li>
                <li><img src={linkedin}/></li>
            </FooterBotton>

         </Container>
  )
}
