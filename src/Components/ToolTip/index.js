import ReactTooltip from 'react-tooltip';

export const ToolTip = () => {
  return (
    <ReactTooltip
      id="loantip"
      place="top"
      effect="solid"
      className="toolTip"
    >
      <p>
        Principal is the amount of money you are borrowing. You will
        receive this amount if approved for the loan.
      </p>
      <p>
        Loan Term is the amount of time it takes to pay off the loan.
        You will need to make monthly payments throughout the loan
        term.
      </p>
      <p>
        APR, or Annual Percentage Rate, is essentially the "cost" of
        the loan on an annual basis. It takes into account all
        interest and fees you might owe. For example, if you take out
        a $100 loan with a one year term at 10% APR, you will need to
        pay back a total of $110.
      </p>
    </ReactTooltip>
  );
};
