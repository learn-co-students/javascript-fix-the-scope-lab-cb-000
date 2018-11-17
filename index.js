var animal = 'dog'

function myAnimal() {
  //it('returns my animal', () => {
  //  expect(window.myAnimal()).toEqual('dog')
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  //it('returns your animal', function(){
//    expect(window.yourAnimal()).toEqual('cat')
var animal = "cat";
  return animal
}

function add2(n) {


  // Feel free to move things around!
  const two = 2
    return n + two
}

var funkyFunction = function() {
  return function () {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
/*
describe('theFunk', function() {
  it('is "FUNKY!"', function() {
    expect(window.theFunk).toEqual('FUNKY!')
  })
  */

var theFunk = funkyFunction();
