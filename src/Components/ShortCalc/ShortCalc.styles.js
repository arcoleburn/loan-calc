import styled from 'styled-components';

export const CalcForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 70%;
  max-width: 300px;
  min-width: 248px;
  margin: 35px;
  padding: 10px;
  border: 1px solid var(--green);
  border-radius: 6px;
  box-shadow: var(--lgShadow) 5px 5px 10px;

  font-size: var(--fontMed);

  label{
    margin-top: 10px;
  }
  input{
    border-radius: 6px;
    margin: 3px;
    font-size: var(--fontSmall);
  }

  input[type=range]{
    /* -webkit-appearance: none; */
    width: 100%;

   
  }
  
  .rate-input{
    display: flex;
    flex-direction: column;
  }
  
  /* .bottom-row{
  display: flex;
  flex-direction: row;
  } */


  button{
    width: 50%;
    align-self: center;
    
    font-family: 'Merriweather Sans';
    color: white;
    
    margin-top: 10px;
    
    border-radius: 6px;
    border: var(--orange);


    background-color: var(--orange);
    
    box-shadow: var(--blue) 0px 2px 2px;
  
    :hover{
      background-color: var(--blue);
      box-shadow: var(--liteGrey) 0px 2px 2px;
  
    }
  }
  
  .tip{
    align-self: flex-end;
    position: absolute;
  }
  
  .toolTip{
    background-color:var(--greyBlue);
    max-width: 400px;
    border-radius: 6px;
  }


  datalist{
    display: flex;
    justify-content: space-between
  }
  
`;
