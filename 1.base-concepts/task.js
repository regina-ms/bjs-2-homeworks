"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2) - 4 * a * c;
  if (discr < 0) {
    return arr;
  } else if (discr > 0) {
    let firstResult = (-b + Math.sqrt(discr) ) / (2 * a);
    let secondResult = (-b - Math.sqrt(discr) )/(2 * a);
    arr.push(firstResult, secondResult);
  } else if (discr === 0) {
    let result = -b/(2*a);
    arr.push(result);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)) {
    let percentPerMounth  = percent / 100 / 12;
    let creditBody = amount - contribution;
    let paymentPerMounth = creditBody * (percentPerMounth + (percentPerMounth / (Math.pow((1 + percentPerMounth), countMonths)  - 1)));
    let totalMortgage = paymentPerMounth * countMonths;
    return totalMortgage.toFixed(2);
  } else {
    return false;
  }
}