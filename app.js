/* eslint-disable max-len */

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects
const dinoObjects = [];

fetch('./dino.json')
.then((response) => response.json())
.then((data) => {
  const dinosaursArray = data.Dinos;

  dinosaursArray.forEach((dino) => {
    dino = new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact);

    dinoObjects.push(dino);

    return dino;
  });
});

// Create Human Object
let humanObject = {
  'name': 'string',
  'feet': Number,
  'inches': Number,
  'weight': Number,
  'diet': 'string'
};

// function Human(name, feet, inches, weight, diet) {
//   this.name = name;
//   this.feet = feet;
//   this.inches = inches;
//   this.weight = weight;
//   this.diet = diet;
// }

// Use IIFE to get human data from form
const compareButton = document.getElementById('btn');

compareButton.addEventListener('click', () => {
  console.log('button clicked');

  (function getFormData() {
    const humanData = Object.create(humanObject);
    humanObject.name = 'Taqwa';
    console.log(humanData.name);

    return humanData;

    // humanData.name = document.querySelector('#name').value;
    // humanData.heightFeet =  document.querySelector('#feet').value;
    // humanData.heightInches =  document.querySelector('#inches').value;
    // humanData.weight = document.querySelector('#weight').value;
    // humanData.logAll = () => {
    //   console.log('pumpkins');
    // };
  }());
});

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

  // Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
