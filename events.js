// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Thien the events.js file in your editor. You'll notice a little bit of code, and a bunch of comments. Study how the code for the first function, one, works.s will change the background colour of the first div
  // when you mouse over it.
  one()

  // Your turn! Create a new function called `two`, then call it from here.
  two()
  three()
  four()
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION two HERE
function two () {
  var two = document.getElementById('two')
  two.addEventListener('mouseenter', makeGreen)
  two.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION three HERE
function three () {
  var three = document.getElementById('three')
  three.addEventListener('mouseenter', makeTeal)
  three.addEventListener('mouseleave', makeWhite)
}
// CREATE FUNCTION four HERE
function four () {
  var four = document.getElementById('four')
  four.addEventListener('blur', makeBrown)
  four.addEventListener('mouseleave', makeWhite)
}
// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}
function makeTeal (evt) {
  evt.target.style.backgroundColor = 'teal'
}
function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}
function makeBrown (evt) {
  evt.target.style.backgroundColor = 'brown'
}
function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
