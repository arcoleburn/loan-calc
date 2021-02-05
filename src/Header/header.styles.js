import styled from 'styled-components'

export const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;
padding: 20px;
height: 70px;

.brand{
  display: flex;
  flex-direction: row;
 
  h1{font-family: 'Merriweather Sans';
  font-size: var(--fontSuperBig);
 
}
}
svg{
  font-size: 4em;
  color: var(--green)
}
`

export const NavLinks = styled.nav`
width: 40%;
display: flex;
flex-direction: row;
justify-content: flex-end;
min-width: 350px;

a{
  margin: 5px;
}
`