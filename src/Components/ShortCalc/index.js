import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {ToolTip} from '../ToolTip'
import { useState } from 'react';
import { results as formula } from '../helpers/calcHelpers';
import { CalcForm } from './ShortCalc.styles';
const ShortCalc = (props) => {
  const [principal, setPrincipal] = useState(0);
  const [loanTerm, setLoanTerm] = useState(6);
  const [rate, setRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoanDetails(formula(principal, rate, loanTerm));
  };

  return (
    <CalcForm>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        className="tip"
        data-tip
        data-for="loantip"
      />
      <label htmlFor="principal">Principal</label>
      <span className="input-dollar">
        $
        <input
          type="number"
          id="principal"
          name="principal"
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </span>
      <label>Loan Term Length</label>

      <input
        defaultValue={'6'}
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
            name="principal"
          />
          %
        </span>
      </div>
      <button onClick={(e) => handleSubmit(e)}>Go!</button>
    <ToolTip/>
    </CalcForm>
  );
};

export default ShortCalc;
