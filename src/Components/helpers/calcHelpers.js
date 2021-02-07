//functions to help with calculator

export const results = (principle, interestRate, length) => {
  
  console.log('p',principle, 'int', interestRate, 'len', length)
  const dailyInterest = Number(interestRate)/100/365

  
  const totalInterest =
    principle * dailyInterest* (length * 30.4167);

  const totalCost =principle + totalInterest
  console.log(totalCost)
    return {
    totalCost:(principle + totalInterest).toFixed(2),
    interest: totalInterest.toFixed(2),
    monthlyPayment: (totalCost/length).toFixed(2),
    principle: principle
  };
};

export const reverse = (payment, interestRate, length) => {
  const daily = interestRate/100/365
  const days = length*30.4167
  const totalCost = payment*length 

  const principle = totalCost/(daily*days + 1)
  const totalInterest = principle*daily*days

  return(
    {totalCost:totalCost.toFixed(2),
     interest: totalInterest.toFixed(2),
     principle: principle.toFixed(2),
     monthlyPayment:payment
    }
  )
}




