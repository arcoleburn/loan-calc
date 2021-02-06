//functions to help with calculator

export const results = (principle, interestRate, length) => {
  
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

export const reverse = (payment, interestRate, length) => {
  const daily = interestRate/100/365
  const days = length*30.4167

  const principle = payment/(daily*days + 1)
  const totalInterest = principle*daily*days

  return(
    {totalCost:(principle + totalInterest).toFixed(2),
     interest: totalInterest.toFixed(2),
     principle: principle.toFixed(2)
    }
  )
}




