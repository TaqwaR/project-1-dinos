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

const compareButton = document.getElementById('btn');

compareButton.addEventListener('click', () => {

  (function getFormData() {
    let creatures =[...dinoObjects];
    let grid = document.querySelector('.js-grid');
    let cells = [];

    const humanData = Object.create(humanObject);

    // Can I make this DRY-er? 
    function humanDataSet(name, feet, inches, weight, diet) {
      for (let i = 0; i < arguments.length; i++) {
        // arguments[i] = document.querySelector('#'+`${arguments[i]}`).value;
        console.log(arguments[i]);
      }
    }

    humanDataSet(name, feet, inches, weight, diet);

    humanData.name = document.querySelector('#name').value;
    humanData.heightFeet = parseInt(document.querySelector('#feet').value);
    humanData.heightInches = parseInt(document.querySelector('#inches').value);
    humanData.totalHeightInches = humanData.convertToInches(humanData.heightFeet, humanData.heightInches);
    humanData.weight = document.querySelector('#weight').value;
    humanData.diet = document.querySelector('#diet').value;

    creatures.push(humanData);

    // Create Dino Compare Method 1
    // Compare method one =====>
    Dino.prototype.heightCompare = function() {
      let heightCompare = this.height > humanData.totalHeightInches ? `${this.species} taller by: ${this.height - humanData.totalHeightInches} inches` : `${humanData.name} taller by: ${humanData.totalHeightInches - this.height} inches`;

      return heightCompare;
    };

    // Create Dino Compare Method 2
    // Compare method two =====>
    Dino.prototype.weightCompare = function() {
      let weightCompare = humanData.weight > this.weight ? `You are heavier than a ${this.species}!` : `A ${this.species} is heavier than you!`;

      return weightCompare;
    };

    // Create Dino Compare Method 3
    // Compare method three =====>
    Dino.prototype.dietCompare = function() {
      let dietCompare = humanData.diet !== this.diet && humanData.diet.localeCompare(this.diet, undefined, {sensitivity: 'accent'}) !== 0 ? `You have different diets! ${this.species} is a ${this.diet}, but you are a ${humanData.diet}.` : `You and ${this.species} have the same diet!`;

      return dietCompare;
    };

    // Generate Tiles for each Dino in Array
      // Add tiles to DOM
    // Building grid =====>
    creatures.forEach( creature => {
      let cell = document.createElement('div');
      !!creature.species ? cell.setAttribute('class', 'dino-cell') : cell.setAttribute('class', 'human-cell');
      cells.push(cell);
      grid.insertBefore(cell, null);

      // !!creature.species ? append dino data to div : append humanData to div

      if (!!creature.dietCompare) {
        console.log(creature.dietCompare());
      } else {
        console.log('no dietCompare avail');
      }
    });

    // // Move human cell to center/array position 4
    // cells.splice(4, 0, cells[8]);

    console.log(`height in inches: ${humanData.totalHeightInches}`);
    console.log(creatures);

    return humanData;
  }());
});

// Remove form from screen

// On button click, prepare and display infographic
