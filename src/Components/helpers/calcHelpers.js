//functions to help with calculator

export const results = (principal, interestRate, length) => {
  
  console.log('p',principal, 'int', interestRate, 'len', length)
  const dailyInterest = Number(interestRate)/100/365

  
  const totalInterest =
    principal * dailyInterest* (length * 30.4167);

  const totalCost =principal + totalInterest
  console.log(totalCost)
    return {
    totalCost:(principal + totalInterest).toFixed(2),
    interest: totalInterest.toFixed(2),
    monthlyPayment: (totalCost/length).toFixed(2),
    principal: principal
  };
};

export const reverse = (payment, interestRate, length) => {
  const daily = interestRate/100/365
  const days = length*30.4167
  const totalCost = payment*length 

  const principal = totalCost/(daily*days + 1)
  const totalInterest = principal*daily*days

  return(
    {totalCost:totalCost.toFixed(2),
     interest: totalInterest.toFixed(2),
     principal: principal.toFixed(2),
     monthlyPayment:payment
    }
  )
}




