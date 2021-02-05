//functions to help with calculator

const results = (principle, interestRate, length) => {
  
  const dailyInterest = Number(interestRate)/100/365

  
  const totalInterest =
    principle * dailyInterest* (length * 30.4167);

  const totalCost =principle + totalInterest

    return {
    totalCost:(principle + totalInterest).toFixed(2),
    interest: totalInterest.toFixed(2),
    monthlyPayment: (totalCost/length).toFixed(2),
  };
};


export default results

