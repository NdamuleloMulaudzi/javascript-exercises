const add = function(num_1, num_2) {
	
  return num_1+num_2
};

const subtract = function(num_1, num_2) {
	return num_1-num_2;
};

const sum = function(arr) {
 return arr.reduce((total,currentItem)=> total+currentItem, 0)  
};

const multiply = function(arr) {
  return arr.reduce((accum,currentItem)=> accum * currentItem)
};

const power = function(num_1, num_2) {
	return Math.pow(num_1,num_2)
};

const factorial = function(num) {
  if(num ==0){
    return 1
  }
  let product = 1;
	for(let i=num; i>0; i--){
     product = product*i;
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
