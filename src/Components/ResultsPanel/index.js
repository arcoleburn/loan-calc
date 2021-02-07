import { ResultsWrapper } from './Results.styles';

const ResultsPanel = (props) => {
  const { loanDetails, type } = props;

  return (
    <ResultsWrapper>
      <div className="payment">
        <p>{type === 'normal' ? 'Monthly Payment' : 'Loan Amount'}</p>
        <p className="detail">
          $
          {type === 'normal'
            ? loanDetails.monthlyPayment
            : loanDetails.principle}
        </p>
      </div>
    <div className='bottom half'>
      <div className="interest">
        <p className='label'>Interest and Fees: </p>
        <p className="detail">${loanDetails.interest}</p>
      </div>
      <div className="total">
        <p className='label'>Your Total Cost: </p>
        <p className="detail">${loanDetails.totalCost}</p>
      </div>
      <div className="conditional">
        <p className='label'>
          {type == 'normal' ? 'Principle: ' : 'Monthly Payment: '}
        </p>
        <p className="detail">
          $
          {type === 'normal'
            ? loanDetails.principle
            : loanDetails.monthlyPayment.toFixed(2)}
        </p>
      </div>
      </div>
    </ResultsWrapper>
  );
};

export default ResultsPanel;
