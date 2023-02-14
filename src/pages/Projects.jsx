import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import { CardContainer } from '../GlobalStyles'



const DivContainer = styled.div`
padding: 10rem 0px 0px;
display: grid;
grid-template-rows: 1fr 1fr;
gap: 40px;
background-color: var(--gray-color);


& .description{
  padding: 40px;
  text-align: center;

  & h2{
    font-size: 40px;
    font-weight: 700;
    margin: 60px 0px;
  }
}
`

 
const CardProject2 = styled.article`
  background-color: white;
  padding: 30px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 160px;
  box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
  cursor: pointer;
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition-property: transform, box-shadow;
  
  &:hover{
    transform: translateY(-8px);
    
    box-shadow:1px 2px 5px rgb(0,0,0,0.3);
}
  & p:first-child{
    font-weight: 700;
    
  }
`



/* const cut =  text.replace(/\s+|-/g, '').toLowerCase(); */
export default function Projects() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {

    const getDatos = async( )=>{
      const response = await fetch('http://localhost:3000/api/lists/')
      const datos = await response.json()
      setData(datos.posts)
      setLoading(false);
    }
    getDatos()
  
}, [])
  

  if (loading) {
    return <Loading/>
  }

  return (
    
      <DivContainer>
      <section className='description'>
        <h2>Proyectos</h2>
        
        <p>las siguientes tarjetas muestran varios proyectos que he llevado a cabo con el objetivo de mejorar mi lógica de programación y mis habilidades técnicas. Cada proyecto es un reto en sí mismo y me ha permitido desarrollar soluciones creativas y eficientes a problemas técnicos. Estos proyectos son una muestra de mi dedicación y pasión por el desarrollo, y me enorgullece mostrarlos como logros personales y profesionales. Además, estos proyectos continúan moldeando y mejorando mis habilidades a medida que continúo mi camino como desarrollador.</p>
      </section>
      <CardContainer spac>
        {data.map(post => (
        <CardProject2 onClick={()=>{navigate(`/projects/${post.id}`)}} key={post.id} >
          <p>{post.title}</p>
          <p>{post.shortDesc}</p>
        </CardProject2>
        ))}
      </CardContainer>

        <Footer purpleColor/>

      </DivContainer>
    
  )
}
