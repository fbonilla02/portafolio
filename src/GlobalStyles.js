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
export const MainContainer = styled.main`
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
  background-color: var(--gray-color);
`


export const Snap = styled.div`
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

export const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding:  ${props => props.spac ? '10px 80px' : '0px'};

`
export const ArticleProjects = styled.article`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  background-color: var(--white-color);
  height: 40vh;
  width: 100%;
  justify-content: center;
  &section:first-child{
      border-right: solid 1px rgb(102, 51, 153, 0.5);

  }

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
