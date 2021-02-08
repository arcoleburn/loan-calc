import styled from 'styled-components'

export const AboutWrapper = styled.div`

display: flex;
flex-direction: column; 
align-self: center;
margin-top: 5vh;
padding:0 15%;


.mission, .howitworks, .about{
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: center;
 p{ 
   font-size: var(--fontBig);

  }  }
.mission{
  width: 700px;
}
.howitworks{
  background-color: white;
  border-radius: 6px;
  padding: 10%;
}

.about{
  h3{
    font-size: var(--fontSuperBig);
    color: white;
  }
  p{
    font-size: var(--fontBig);
    width: 100%;
  }
  .emphasis{
    color: var(--blue);
    font-weight: bold;
    text-decoration: none;
  }
  padding: 10%;
  color: white;
  background-color: var(--orange);
  border-radius: 6px; 

}

.spacer{
  height: 10vh;
}

h2{
  color: var(--orange);
  font-size: var(--fontMed)
}

h3{
  color: var(--darkText);
  font-size: var(--fontSuperBig)
}
p{
  font-family: 'Alice';
  font-size: var(--fontSmall);
  line-height: 1.5em;
  width: 75%;
  max-width: 510px; 
}

a.btn{
  text-decoration: none;
  text-align: center;
  color: var(--white);
  background-color: var(--orange);
  width: 15%;
  padding: 20px;
  border-radius: 30px;

  align-self: flex-end;
  position: absolute;
  top: 50%;
  box-shadow: var(--lgShadow) 5px 5px 5px;
  :hover{
    color: var(--lightText)
  }
}

`