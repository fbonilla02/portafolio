import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../components/Loading'



const Hola = styled.div`
padding: 100px;
`

export default function Project() {
  const {id} = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    const getDatos = async( )=>{
      const response = await fetch('http://localhost:3000/api/lists/')
      const datos = await response.json()
      const filterPosts = datos.posts.filter(post => post.id === Number(id))
      
      
      setData(filterPosts)
      setLoading(false);
    }
    getDatos()
  
}, [])
  
if (loading) {
  return <Loading/>
}

  return (
    <>
    
    {data.map(post =>(
      <Hola key={post.id}>
        {post.title}
      </Hola>
    ))}
    </>
  )
}
