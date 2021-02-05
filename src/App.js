import logo from './logo.svg';
import './App.css';
import ShortCalc from './ShortCalc';
import { useState } from 'react';
import ResultsPanel from './ResultsPanel';
import { CalcWrapper } from './app.styles';

function App() {
  const [loanDetails, setLoanDetails] = useState({
    totalCost: 9375,
    interest: 4375,
    monthlyPayment: 1562.5,
  });

  return (
    <CalcWrapper>
      <ShortCalc setLoanDetails={setLoanDetails} />
      <ResultsPanel loanDetails={loanDetails} />
    </CalcWrapper>
  );
}

export default App;
