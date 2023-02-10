import styled from "styled-components";


export const NavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 50px;
    position: fixed;
    width: 100vw;
    color: var(${props => props.color ? '--white-color' : '--black-color' });
`


/* const Snap = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor || '--gray-color',
}))`
    height: 100vh;
    scroll-snap-align: start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 30px;
    align-items: center;
    justify-items: center;
    background-color: ${props => props.backgroundColor};
    color: var(--white-color);
`
 */
