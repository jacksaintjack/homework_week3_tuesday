///////////////////// 1. ///////////////////////////////
var priceList = items.map(function(p){
  return p.price;
});

var averagePrice = priceList.reduce(function(count, total){
  return count + total;
});

var answerOne = averagePrice / priceList.length;
console.log("****ANSWER Three ****")
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
console.log("****ANSWER TWO****")
console.log('"Items that cost between $14.00 USD and $18.00 USD"')
var ansnwerTwo = answerTwoTitle.forEach(function(a){
  console.log("Title: " + a);
});


///////////////////// 3. ///////////////////////////////

var currencyGBP = items.filter(function(curr){
  return curr.currency_code === "GBP";
});

var answerTitle = currencyGBP.map(function(ans){
  return ans.title;
});

var answerPrice = currencyGBP.map(function(p){
    return p.price;
})

console.log("****ANSWER Three****")

var answerThree = answerTitle.forEach(function(t){
    console.log(t + " costs " + "£" + answerPrice);
});

///////////////////// 4. ///////////////////////////////
var targetData = items.filter(function(mat){
  return mat.materials.indexOf('wood');
});

var targetTitle = targetData.map(function(ans){
  return ans.title;
});

console.log("****ANSWER FOUR****")
var answerFour = targetTitle.forEach(function(t){
  console.log(t + " is made of wood");
});


///////////////////// 5. ///////////////////////////////

var targetFiveOne = items.filter(function(greater){
  return greater.materials.length >= 8;
});

var answerFiveTitle = targetFiveOne.map(function(ans){
  return ans.title;
});

var materialsUsed = targetFiveOne.map(function(mat){
  return mat.materials;
});

//Console logs the information in way that materials are in a list
console.log("****ANSWER FIVE****");
console.log(answerFiveTitle[0] +" Has " + materialsUsed[0].length + " used materials ");
var materialListOne = materialsUsed[0].forEach(function(list){
  console.log(list);
});
console.log(answerFiveTitle[1] + " Has " + materialsUsed[1].length + " used materials ");
var materialListTwo = materialsUsed[1].forEach(function(list){
  console.log(list);
});


///////////////////// 6. ///////////////////////////////

var targetSixOne = items.filter(function(maker){
  return maker.who_made === 'i_did';
});
  console.log("****ANSWER SIX****")
  console.log(targetSixOne.length + " were made by their sellers");
