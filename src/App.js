import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { useState } from 'react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { LoanCalc } from './Components/LoanCalc';
import { ReverseCalc } from './Components/ReverseCalc';
import { About } from './Components/About';

import { GlobalStyle } from './globalStyles';

function App() {
  const [loanDetails, setLoanDetails] = useState({
    totalCost: 0,
    interest: 0,
    monthlyPayment: 0,
    principal: 0,
  });

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <About {...props} />}
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
          component={(props) => (
            <ReverseCalc
              {...props}
              setLoanDetails={setLoanDetails}
              loanDetails={loanDetails}
            />
          )}
        />
        <Route
          exact
          path="/about"
          component={(props) => <LoanCalc {...props} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
