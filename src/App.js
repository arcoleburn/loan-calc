import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import ShortCalc from './ShortCalc';
import { useState } from 'react';
import ResultsPanel from './ResultsPanel';
import { CalcWrapper } from './app.styles';
import {GlobalStyle} from './globalStyles'
import { Header } from './Header';

function App() {
  const [loanDetails, setLoanDetails] = useState({
    totalCost: 9375,
    interest: 4375,
    monthlyPayment: 1562.5,
  });

  return (
    <Router>
    <GlobalStyle/>
    <Header/>
    <CalcWrapper>
      <ShortCalc setLoanDetails={setLoanDetails} />
      <ResultsPanel loanDetails={loanDetails} />
    </CalcWrapper>
    </Router>
  );
}

export default App;
