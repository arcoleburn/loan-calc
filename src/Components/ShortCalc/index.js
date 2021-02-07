import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import { results as formula } from '../helpers/calcHelpers';
import { CalcForm } from './ShortCalc.styles';
const ShortCalc = (props) => {
  const [principle, setPrinciple] = useState(0);
  const [loanTerm, setLoanTerm] = useState(6);
  const [rate, setRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoanDetails(formula(principle, rate, loanTerm));
  };

  return (
    <CalcForm>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        className="tip"
        data-tip
        data-for="loantip"
      />
      <label htmlFor="principle">Principle</label>
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
            name="principle"
          />
          %
        </span>
      </div>
      <button onClick={(e) => handleSubmit(e)}>Go!</button>

      <ReactTooltip id="loantip" place="top" effect="solid" className='toolTip'>
        <p>Principle is the amount of money you are borrowing. You will receive this amount if approved for the loan.</p>
        <p>Loan Term is the amount of time it takes to pay off the loan. You will need to make monthly payments throughout the loan term.</p>
        <p>APR, or Annual Percentage Rate, is essentially the "cost" of the loan on an annual basis. It takes into account all interest and fees you might owe. For example, if you take out a $100 loan with a one year term at 10% APR , you will need to pay back a total of $110</p>
      </ReactTooltip>
    </CalcForm>
  );
};

export default ShortCalc;
