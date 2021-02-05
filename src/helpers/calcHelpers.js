//functions to help with calculator

const results = (principle, interestRate, length) => {
  
  const dailyInterest = (interestRate)/100/365
  console.log('daily int', dailyInterest)
  
  const totalInterest =
    Number(principle) * dailyInterest* (Number(length) * 30.4167);

    console.log('total interest', totalInterest)
  const totalCost =Number(principle) + totalInterest
  console.log('totcost', totalCost)
console.log('payments', totalCost/(Number(length)))
    return {
    totalCost:(Number(principle)+ totalInterest).toFixed(2),
    interest: totalInterest.toFixed(2),
    monthlyPayment: (totalCost/Number(length)).toFixed(2),
  };
};


export default results

