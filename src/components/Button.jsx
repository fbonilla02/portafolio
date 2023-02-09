import React from 'react'
import styled from 'styled-components'

const SeeButton = styled.button`
    border: solid 1px var(--purple-color);
    color: var(--purple-color);
    font-weight: 500;
    width: max-content;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;

    &:hover{
        background-color: var(--purple-color);
        color: var(--white-color);
    }

`

export default function Button({children}) {
  return (
    <SeeButton>
        {children} <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 6)"><path d="m9.5.497 4 4.002-4 4.001"/><path d="m.5 4.5h13"/></g></svg>
    </SeeButton>
  )
}
