import styled from 'styled-components'

export const CalcWrapper = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--darkText);
  h3{
    font-size: var(--fontBig)
  }
 .copy{
   max-width:700px;
   align-self: center;
   color: var(--darkText);
   .emphasize{
     color:var(--orange);
     font-size: var(--fontSuperBig);
     font-weight: bold;
     margin: 20px 0
   }
 }
`