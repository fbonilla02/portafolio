import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

 const NavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 50px;
    position: fixed;
    width: 100vw;
    color: var(${props => props.color ? '--white-color' : '--black-color' });
    background-color: white;
    
    & h2{
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
`



export default function Navbar() {
  return (
    <NavBar>
    <section>
        <h2><Link to='/'>FBONILLA</Link></h2>
    </section>
    <section>
        <figure>
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg>
        </figure>
    </section>
    </NavBar>
  )
}
