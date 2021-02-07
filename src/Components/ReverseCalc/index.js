import { CalcWrapper, Wrapper } from '../LoanCalc/LoanCalc.styles';
import ResultsPanel from '../ResultsPanel';
import RevCalcForm from '../RevCalcForm';


export const ReverseCalc = (props) => {
  const { loanDetails, setLoanDetails } = props;

  return (
    <Wrapper>
      <div className="copy">
        <h3>Reverse Loan Calculator</h3>
        <p className="emphasize">Curious what you can afford?</p>
        <p>
          Input a comfortable monthly payment, select a term length,
          and input an interest rate. Hit the button, and the
          calculator will tell you the amount of principle you can
          afford for a short term loan.
        </p>
        
      </div>
      <CalcWrapper>
        <RevCalcForm setLoanDetails={setLoanDetails} />
        <ResultsPanel type='reverse' loanDetails={loanDetails} />
      </CalcWrapper>
    </Wrapper>
  );
};
