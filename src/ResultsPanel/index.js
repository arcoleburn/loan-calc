import { ResultsWrapper } from "./Results.styles";

const ResultsPanel = (props) => {
  const { loanDetails } = props;

  return (
    <ResultsWrapper>
      <div className="payment">
        <p>Monthly Payment</p>
        <p className='detail'>${loanDetails.monthlyPayment}</p>
      </div>

      <div className="interest">
        <p>Total Interest and Fees</p>
        <p className='detail'>${loanDetails.interest}</p>
      </div>
      <div className="total">
        <p>Your Total Cost</p>
        <p className='detail'>${loanDetails.totalCost}</p>
      </div>
    </ResultsWrapper>
  );
};

export default ResultsPanel;
