var chocolateBars= ['snickers','hundred grand', 'kitkat', 'skittles'];

var a = ['one', 'two']
var b= 'three'

function addElementToBeginningOfArray(a, b){
  return [b, ...a];
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a, b){
  return [...a, b];
}

function destructivelyAddElementToEndOfArray(a,b){
  a[1]=b;
  return a;
}

function accessElementInArray(a,b){
  return a[b];
}
