import styled from 'styled-components';

export const ResultsWrapper = styled.div`
  width: 70%;
  max-width: 300px;
  margin: 35px;

  display: flex;
  flex-direction: column;

  text-align: center;

  width: 700px;
  .payment {
    margin: 0;
    p {
      margin: 0;
      font-size: 12px;
    }
    .detail {
      font-size: 2em;
      font-weight: bold;
    }
  }

  .interest,
  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

//trash from calc styles

// .input-dollar, .input-percent {
//   position: relative;
// }
// .input-dollar input{
//   padding-left: 18px;
// }

// .input-percent input {
//   padding-right: 18px;
// }
// .input-dollar:before{
//   position: absolute;
//   content: '$';
//   top: 0;
//   left: 5px;
// }
// .input-percent:after{
//   position: absolute;
//   content: '%';
//   top: 0;
//   right: 75px;
// }
