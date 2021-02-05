import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ShortCalc from './Components/ShortCalc';
import { useState } from 'react';
import ResultsPanel from './Components/ResultsPanel';
import { CalcWrapper } from './app.styles';
import { GlobalStyle } from './globalStyles';
import { Header } from './Components/Header';
import { LoanCalc } from './Components/LoanCalc';

function App() {
  const [loanDetails, setLoanDetails] = useState({
    totalCost: 9375,
    interest: 4375,
    monthlyPayment: 1562.5,
  });

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <LoanCalc
              {...props}
              setLoanDetails={setLoanDetails}
              loanDetails={loanDetails}
            />
          )}
        />
        <Route
          exact
          path="/calculator"
          component={(props) => (
            <LoanCalc
              {...props}
              setLoanDetails={setLoanDetails}
              loanDetails={loanDetails}
            />
          )}
        />
        <Route
          exact
          path="/reverse"
          component={(props) => <LoanCalc {...props} />}
        />
        <Route
          exact
          path="/about"
          component={(props) => <LoanCalc {...props} />}
        />
      </Switch>
     
    </Router>
  );
}

export default App;
