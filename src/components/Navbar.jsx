import React from 'react'
import styled from 'styled-components'
import { NavBar } from '../GlobalStyles'


export default function Navbar() {
  return (
    <NavBar >
    <section>
        <h2>FBonilla</h2>
    </section>
    <section>
        <figure>
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg>
        </figure>
    </section>
    </NavBar>
  )
}
