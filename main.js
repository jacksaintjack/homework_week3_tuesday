///////////////////// 1. ///////////////////////////////
var priceList = items.map(function(p){
  return p.price;
});

var averagePrice = priceList.reduce(function(count, total){
  return count + total;
});

var answerOne = averagePrice / priceList.length;
console.log("The average Price is " + answerOne.toFixed(2));


///////////////////// 2. ///////////////////////////////
var targetTwo = items.filter(function(p){
  return p.price >= 14.00 && p.price <= 18.00;
});

var answerTwoTitle = targetTwo.map(function(ans){
  return ans.title;
});

var answerTwoPrice = targetTwo.map(function(ans){
  return ans.price;
});

console.log('"Items that cost between $14.00 USD and $18.00 USD" ' + answerTwoTitle);

///////////////////// 3. ///////////////////////////////

var currencyGBP = items.filter(function(curr){
  return curr.currency_code === "GBP";
});

var answerThree = currencyGBP.map(function(ans){
  return ans.title;
});

console.log(answerThree);

///////////////////// 4. ///////////////////////////////
var targetData = items.filter(function(mat){
  return mat.materials.indexOf('wood');
});

var answerFour = targetData.map(function(ans){
  return ans.title;
});

console.log(answerFour);

///////////////////// 5. ///////////////////////////////

var targetFiveOne = items.filter(function(greater){
  return greater.materials.length >= 8;
});

var answerFive = targetFiveOne.map(function(ans){
  return ans.title;
});

console.log(answerFive);

///////////////////// 6. ///////////////////////////////

var targetSixOne = items.filter(function(maker){
  return maker.who_made === 'i_did';
});
  console.log(targetSixOne.length + " were made by their sellers");


//////For Funzies
var answerSix = targetSixOne.forEach(function(ans){
  console.log("**THESE WHERE DONE TO TEST forEach**      " + ans.title);

});
