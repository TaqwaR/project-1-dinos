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
  'name': '',
  'feet': '',
  'inches': '',
  'weight': '',
  'diet': '',
  'convertToInches': function(feetValue, inchesValue) {
    let toInches = feetValue * 12;
    let convertedNumber = toInches + inchesValue;

    return convertedNumber;
  }
};

// 

const compareButton = document.getElementById('btn');

compareButton.addEventListener('click', () => {

  (function getFormData() {
    let creatures =[...dinoObjects];

    const humanData = Object.create(humanObject);
    humanData.name = document.querySelector('#name').value;
    humanData.heightFeet = parseInt(document.querySelector('#feet').value);
    humanData.heightInches = parseInt(document.querySelector('#inches').value);
    humanData.totalHeightInches = humanData.convertToInches(humanData.heightFeet, humanData.heightInches);
    humanData.weight = document.querySelector('#weight').value;
    humanData.diet = document.querySelector('#diet').value;

    creatures.push(humanData);

    // Compare method one
    dinoObjects.map(dino => {
     let heightCompare =  dino.height > humanData.totalHeightInches ? `${dino.species} taller by: ${dino.height - humanData.totalHeightInches} inches` : `${humanData.name} taller by: ${humanData.totalHeightInches - dino.height} inches`;

      console.log(heightCompare);

     return heightCompare;
    });

    dinoObjects.forEach(dino => {
      // Compare method two
      let weightCompare = humanData.weight > dino.weight ? `You are heavier than a ${dino.species}!` : `A ${dino.species} is heavier than you!`;

      // Compare method three
      let dietCompare = humanData.diet !== dino.diet && humanData.diet.localeCompare(dino.diet, undefined, {sensitivity: 'accent'}) !== 0 ? `You have different diets! ${dino.species} is a ${dino.diet}, but you are a ${humanData.diet}.` : `You and ${dino.species} have the same diet!`;

      let comparison = weightCompare + dietCompare;
      // squareContent.innerHTML = comparison
      return dino;
    });

    // Building grid
    creatures.forEach(creature => {
      let grid = document.querySelector('.js-grid');
      let cell = document.createElement('div');

      grid.insertBefore(cell, null);
      let cells = Array.from(document.querySelectorAll('.js-grid div'));

      cells.forEach(cell => {
        if (!!creature.species) {
          cell.setAttribute('class', 'dino-cell');
        } else {
          cell.setAttribute('class', 'human-cell');
        }
      });
    });

    console.log(`height in inches: ${humanData.totalHeightInches}`);
    console.log(creatures);

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
