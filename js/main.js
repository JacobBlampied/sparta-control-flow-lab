// alert('Welcome to the control flow lab, lets go to the shops');
// var item = prompt('What would you like to buy?');
// if (item === 'bananas') {
//   alert('bananas are £1');
// } else {
//   // alert('Sorry we are sold out of' + item);
//   alert(`Sorry we are sold out of ${item}`);//Template literal
// }

// Strings 1
// Alerts 1
//Prompt 1
//Integers / Floats 1
//Operators ( + - * /)
//Booleans
//Array
//Object (bonus)
//If / Else 1
//Switch


alert('Welcome to this shop where we sell things.');
var animal = prompt('Please choose one of the following animal for free: an iguana, a shark or a worm.');

if (animal === 'iguana') {
  alert('Please take your free iguana');
} else if (animal === 'shark') {
  alert('Please take your free shark');
} else if (animal === 'worm') {
  alert('Please take your free worm')
}

var animalName = prompt(`What would you like to call your ${animal}?`);
alert(`Your ${animal} is now called ${animalName}.`)

// FOOD==========
var food = prompt('Would you like to buy some food for your pet then, yes or no?');
if (food === 'no') {
  alert("That's fine.")
} else if (food === 'yes') {
  var cost1 = alert('That will be £1000 please, press enter to complete purchase.');
  }

// HAT==========
var hat = prompt(`Would you like to buy a hat for ${animalName}?`);
if (hat === 'no') {
  alert("That's fine.");
} else if (hat === 'yes') {
  var cost2 = prompt('That will be £5000 please, press enter to complete purchase.');
}

// PAYMENT ==========Won't display alerts
var payment = prompt(`How would you like to pay, cash or card?`);
if (payment === 'cash') {
  var costTotal = cost1 + cost2
  alert('You have paid '+costTotal);
} else if (payment === 'card') {
  alert('You have paid' costTatal);
} else
  alert('Please pay');
}

// SURVEY ========== Won't display alert message
// var survey = prompt('Please leave a comment');
// if (survey === 'true') {
//   alert('Thank You!');
// } else if (survey === 'false') {
//   alert('Ok');
// }

var checkout = [animal, animalName, food, hat];
console.log(checkout);
