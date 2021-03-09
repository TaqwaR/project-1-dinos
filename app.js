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
  'feet': 'Number',
  'inches': 'Number',
  'weight': 'Number',
  'diet': 'string',
  'convertToInches': function() {
    let toInches = this.feet * 12;
    let convertedNumber = toInches + this.inches;

    return convertedNumber
  }
};

// Use IIFE to get human data from form
const compareButton = document.getElementById('btn');

compareButton.addEventListener('click', () => {
  console.log('button clicked');

  (function getFormData() {
    const humanData = Object.create(humanObject);
    humanData.name = document.querySelector('#name').value;
    humanData.heightFeet = parseInt(document.querySelector('#feet').value);
    humanData.heightInches = parseInt(document.querySelector('#inches').value);
    humanData.weight = document.querySelector('#weight').value;
    humanData.diet = document.querySelector('#diet').value;

    console.log(humanData);
    console.log(humanData.convertToInches());

    return humanData;
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
