import React from 'react'
import styled from 'styled-components'
import bash from '../assets/icons8-bash.svg'
import blender from '../assets/icons8-blender-3d.svg'
import docker from '../assets/icons8-docker.svg'
import vscode from '../assets/icons8-visual-studio-code-2019.svg'
import figma from '../assets/icons8-figma.svg'
import notion from '../assets/icons8-notion.svg'
import { CardContainer } from '../GlobalStyles'



const CardDiv = styled.article`
    background-color: white;
    padding: 30px 30px;
    border-radius: 10px;
    
    & section{
        display: flex;
        gap: 20px;
        align-items: center;
        font-weight: 700;
        margin-bottom: 20px;
    }
`


const Card = ({image, tool, text})=>{
    return(
        <CardDiv>
            <section>
                <img src={image}/>
                <p>{tool}</p>
            </section>
            <p>{text}</p>
        </CardDiv>
    )
    
}


export default function Tools() {
  return (
    <>
     <h2 className='title'>Herramientas</h2>
          <CardContainer>
            <Card image={vscode} tool='VsCode' text='Mi IDE favorito para crear todos los proyectos que me llegan a la mente'  />
            <Card image={bash} tool='Bash' text='La terminal se ha vuelto muy importante para mi ya que lo uso para acceder a una raspberry sin UI'  />
            <Card image={figma} tool='Figma' text='La Herramienta de wireframes que mas suelo usar'  />
            <Card image={blender} tool='Blender' text='Mi herramienta favorita para hacer diseños 3D'  />
            <Card image={notion} tool='Notion' text='Mi todo en uno donde planeo y organizo varios mis ideas'  />
            <Card image={docker} tool='Docker' text='He aprendido a usar docker para no tener que usar programas alternativos para crear servicios'  />
          </CardContainer>
    </>
  )
}
