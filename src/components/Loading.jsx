import React from 'react'
import styled from 'styled-components'

const LoadingCenter = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black-color);
    height: 100vh;
    
`

export default function Loading() {
  return (
    <LoadingCenter>Loading...</LoadingCenter>
  )
}
