import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  padding: 20px;
  height: 70px;

  .brand {
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
      font-family: 'Merriweather Sans';
      font-size: var(--fontSuperBig);
      margin: 10px;
      color: var(--darkText);
    }
  }
  svg {
    font-size: 4em;
    color: var(--green);
  }
`;

export const NavLinks = styled.nav`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 350px;
  align-items: center;
  a {
    margin: 0 10px 0 10px;
    text-decoration: none;
    color: var(--darkText);
    font-size: var(--fontSmall);
    :hover {
      color: var(--lightText);
    }
  }
`;
