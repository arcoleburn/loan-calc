import { useState } from 'react';
import formula from '../helpers/calcHelpers';
import { CalcForm } from '../ShortCalc/ShortCalc.styles';


import {reverse} from '../helpers/calcHelpers'

const RevCalcForm = (props) => {
  const [loanTerm, setLoanTerm] = useState(6);
  const [rate, setRate] = useState(175);
  const[payment, setPayment] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoanDetails(reverse(payment, rate, loanTerm));
  };

  return (
    <CalcForm>
      <label htmlFor="payment">Monthly Payment</label>
      <span className="input-dollar">
        $
        <input
          type="number"
          id="payment"
          name="payment"
          onChange={(e) => setPayment(Number(e.target.value))}
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

export default RevCalcForm;
