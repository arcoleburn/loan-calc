import { useState } from 'react';
import {results as formula} from '../helpers/calcHelpers';
import { CalcForm } from './ShortCalc.styles';
const ShortCalc = (props) => {
  const [principle, setPrinciple] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [rate, setRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoanDetails(formula(principle, rate, loanTerm));
  };

  return (
    <CalcForm>
      <label htmlFor="principle">Loan Amount</label>
      <span className="input-dollar">
        $
        <input
          type="number"
          id="principle"
          name="principle"
          onChange={(e) => setPrinciple(Number(e.target.value))}
        />
      </span>
      <label>Loan Term Length</label>

      <input
        type="range"
        min="3"
        max="6"
        step="1"
        list="sliderpts"
        onChange={(e) => setLoanTerm(Number(e.target.value))}
      />
      <datalist id="sliderpts">
        <option value="3" label="3 mo"></option>
        <option value="4" label="4 mo"></option>
        <option value="5" label="5 mo"></option>
        <option value="6" label="6 mo"></option>
      </datalist>

        <div className="rate-input">
          <label htmlFor="rate">APR</label>
          <span className="input-percent">
            <input
              type="number"
              onChange={(e) => setRate(Number(e.target.value))}
              name="principle"
            />
            %
          </span>
        </div>
        <button onClick={(e) => handleSubmit(e)}>Go!</button>
     
    </CalcForm>
  );
};

export default ShortCalc;
