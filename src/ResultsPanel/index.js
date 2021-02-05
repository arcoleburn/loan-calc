const ResultsPanel = (props) => {
  const { loanDetails } = props;

  return (
    <>
      <p>Your Total Cost</p>
      <p>${loanDetails.totalCost}</p>
      <p>Total Interest and Fees</p>
      <p>${loanDetails.interest}</p>
      <p>Monthly Payment</p>
      <p>${loanDetails.monthlyPayment}</p>
    </>
  );
};

export default ResultsPanel;
