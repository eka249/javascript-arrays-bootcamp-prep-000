var chocolateBars= ['snickers','hundred grand', 'kitkat', 'skittles'];

var a = ['one', 'two']
var b= 'three'

function addElementToBeginningOfArray(a, b){
  return [b, ...a];
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a[0]=b;
  return a;
}

function addElementToEndOfArray(a, b){
  return [...a, b];
}

function destructivelyAddElementToEndOfArray(a,b){
  return a.push(b);
}

function accessElementInArray(a,b){
  return a[b];
}
