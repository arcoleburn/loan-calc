import { CalcWrapper, Wrapper } from './LoanCalc.styles';
import ResultsPanel from '../ResultsPanel';
import ShortCalc from '../ShortCalc';

export const LoanCalc = (props) => {
  const { loanDetails, setLoanDetails } = props;

  return (
    
    <Wrapper>
      <div className="copy">
      <h3>Short Term Loan Calculator</h3>
      <p className='emphasize'>Need a short term loan?</p>
      <p>
        Input your desired loan amount, select term length, and input
        an interest rate. Hit the button, and the calculator will tell you how much the loan will cost. 
        
        </p><p>The calculator will default to a $5000, six-month loan, at 175% APR.
      </p>
      </div>
      <CalcWrapper>
        <ShortCalc setLoanDetails={setLoanDetails} />
        <ResultsPanel loanDetails={loanDetails} />
      </CalcWrapper>
    </Wrapper>
  );
};
