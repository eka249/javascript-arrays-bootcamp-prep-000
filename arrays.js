var chocolateBars= ['snickers','hundred grand', 'kitkat', 'skittles'];

var a = ['one', 'two']
var b= 'three'

function addElementToBeginningOfArray(a, b){
  return [b, ...a];
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a= a.unshift(b);
  return a;
}

function addElementToEndOfArray(a, b){
  return [...a, b];
}

function destructivelyAddElementToEndOfArray(a,b){
  return a[1]=b;
}

function accessElementInArray(a,b){
  return a[b];
}
