import styled from 'styled-components';

export const CalcForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 70%;
  max-width: 300px;
  margin: 35px;
  
  


  input[type=range]{
    width: 100%
  }
  
  .rate-input{
    display: flex;
    flex-direction: column;
  }
  
  .bottom-row{
  display: flex;
  flex-direction: row;
  }


  
  
  
  datalist{
    display: flex;
    justify-content: space-between
  }
  
`;
