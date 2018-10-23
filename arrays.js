var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo')
  return array
}

function addElementToBeginningOfArray(array, element){
  const newarray = ["foo",...array]
  return newarray
}

function addElementToEndOfArray(array, element){
  const newarray = [...array,"foo"]
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo')
  return array
}

function accessElementInArray(array, index){
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
=======


function addElementToBeginningOfArray(array, element){
  var array = [1]
  array.unshift('foo');
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element){
  const array = [1]
  const newarray = ['foo',...array];
  return newarray
}

function addElementToEndOfArray(array, element){
  var array = [1]
  array.push('foo');
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  const array = [1]
  const newarray = [...array, 'foo']
  return newarray
>>>>>>> b6fd6abcdc20f6d726611e2cf7c2e1e0c4e68d5f
}
