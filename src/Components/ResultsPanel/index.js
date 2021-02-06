import { ResultsWrapper } from './Results.styles';

const ResultsPanel = (props) => {
  const { loanDetails } = props;

  let details={}
  let main;
  let title;
  loanDetails.hasOwnProperty('monthlyPayment')
    ? (details = {main: loanDetails.monthlyPayment, title: 'Monthly Payment'})
    : (details = {main: loanDetails.principle, title: 'Loan Amount'});

  return (
    <ResultsWrapper>
      <div className="payment">
        <p>{details.title}</p>
        <p className="detail">${details.main}</p>
      </div>

      <div className="interest">
        <p>Interest and Fees: </p>
        <p className="detail">${loanDetails.interest}</p>
      </div>
      <div className="total">
        <p>Your Total Cost: </p>
        <p className="detail">${loanDetails.totalCost}</p>
      </div>
    </ResultsWrapper>
  );
};

export default ResultsPanel;
