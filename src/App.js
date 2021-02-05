import logo from './logo.svg';
import './App.css';
import ShortCalc from './ShortCalc';
import { useState } from 'react';
import ResultsPanel from './ResultsPanel';

function App() {

  const [loanDetails, setLoanDetails] = useState({})

  return (
    <>
    <ShortCalc setLoanDetails={setLoanDetails}/>
    {/* <ResultsPanel loanDetails={loanDetails}/> */}
    </>
  );
}

export default App;
