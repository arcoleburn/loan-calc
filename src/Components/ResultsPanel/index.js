import { ResultsWrapper } from './Results.styles';

const ResultsPanel = (props) => {
  const { loanDetails, type } = props;

  return (
    <ResultsWrapper>
      <div className="payment">
        <p>{type === 'normal' ? 'Monthly Payment' : 'Principal'}</p>
        <p className="detail">
          $
          {type === 'normal'
            ? loanDetails.monthlyPayment
            : loanDetails.principal}
        </p>
      </div>
      <div className='seperator'></div>
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
          {type === 'normal' ? 'Principal: ' : 'Monthly Payment: '}
        </p>
        <p className="detail">
          $
          {type === 'normal'
            ? loanDetails.principal
            : loanDetails.monthlyPayment}
        </p>
      </div>
      </div>
    </ResultsWrapper>
  );
};

export default ResultsPanel;
