///////////////////// 1. ///////////////////////////////
var priceList = items.map(function(p){
});

var averagePrice = priceList.reduce(function(count, total){
  return count + total;
});

var answerOne = averagePrice / priceList.length;
Math.floor(console.log(answerOne));


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

console.log("TITLES:    " + answerTwoTitle + "     PRICES: " +answerTwoPrice);

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
  return mat.materials === "wood";
});

var answerFour = targetData.map(function(ans){
    return ans.title;
});

console.log(answerFour);
