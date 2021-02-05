import { useState } from 'react';
import formula from '../helpers/calcHelpers';
import { CalcForm } from './ShortCalc.styles';
const ShortCalc = (props) => {
  const [principle, setPrinciple] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(6);
  const [rate, setRate] = useState(175);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoanDetails(formula(principle, rate, loanTerm));
  };

  return (
    <CalcForm>
      <label htmlFor="principle">Loan Amount</label>
      <span className="input-dollar">$
        <input
          type="number"
          id="principle"
          name="principle"
          placeholder="5000"
          onChange={(e) => setPrinciple(e.target.value)}
        />
      </span>
      <label>Loan Term Length</label>
      
      <input type='range' min='3' max ='6' step='1' list='sliderpts' onChange={(e)=>setLoanTerm(e.target.value)} />
      <datalist id='sliderpts'>
        <option value="3" label ='3 mo'></option>
        <option value="4"label ='4 mo'></option>
        <option value="5" label = '5 mo'></option>
        <option value="6" label = '6 mo'></option>
      </datalist>
      
    
      <label htmlFor="rate">APR</label>
      <span className= 'input-percent'><input
        type="number"
        onChange={(e) => setRate(e.target.value)}
        name="principle"
        placeholder="175"
      />%</span>
      <button onClick={(e) => handleSubmit(e)}>Go!</button>
    </CalcForm>
  );
};

export default ShortCalc;
