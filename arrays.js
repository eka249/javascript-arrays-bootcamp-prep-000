var chocolateBars= ['snickers','hundred grand', 'kitkat', 'skittles'];

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

function destructivelyRemoveElementFromBeginningOfArray(a){
  return a.shift();
}

function removeElementFromBeginningOfArray(a){
  return a.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(a){
  return a.pop();
}

function removeElementFromEndOfArray(a){
  return a.slice(a.length -1);
}
