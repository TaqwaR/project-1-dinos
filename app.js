/* eslint-disable max-len */

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, image) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = image;
}

// Create initial Dino objects array
const dinoObjects = [];

// Get Dinosaur data from JSON file
fetch('./dino.json')
.then((response) => response.json())
.then((data) => {
  const dinosaursArray = data.Dinos;

  // Create a new Dino constructor for each object from the JSON array
  dinosaursArray.forEach((dino) => {
    dino = new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact);

    // Push each newly created object to dinoObjects array
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
  // Function to convert feet value to inches
  'convertToInches': function(feetValue, inchesValue) {
    let toInches = feetValue * 12;
    let convertedNumber = toInches + inchesValue;

    return convertedNumber;
  }
};

const compareButton = document.getElementById('btn');

compareButton.addEventListener('click', () => {
  // Grid creation logic/IIFE
  (function getFormData() {
    let creatures =[...dinoObjects];
    let grid = document.querySelector('.js-grid');
    let cells = [];
    let thisFrom = document.getElementById('dino-compare');

    //Use humanObject as basis to create new humanData Object
    const humanData = Object.create(humanObject);

    //Grab form data from fields
    humanData.name = document.querySelector('#name').value;
    humanData.heightFeet = parseInt(document.querySelector('#feet').value);
    humanData.heightInches = parseInt(document.querySelector('#inches').value);
    humanData.totalHeightInches = humanData.convertToInches(humanData.heightFeet, humanData.heightInches);
    humanData.weight = document.querySelector('#weight').value;
    humanData.diet = document.querySelector('#diet').value;

    // Add humanData to creatures array
    creatures.push(humanData);

    // Move humanData cell from the end of array to the center/array position 4
    creatures.splice(4, 0, creatures[8]);
    creatures.splice(9, 1);

    // Create Dino Compare Method 1
    // Compare method one =====>
    Dino.prototype.heightCompare = function() {
      let heightCompare = this.height > humanData.totalHeightInches ? `<p>${this.species} taller by: ${this.height - humanData.totalHeightInches} inches</p>` : `${humanData.name}  taller than a ${this.species} by: ${humanData.totalHeightInches - this.height} inches`;

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

    // Generate Tiles for each Dino in Array + Add tiles to DOM
    // Building grid =====>
    creatures.forEach( creature => {
      let cell = document.createElement('div');
      let paragraph = document.createElement('p');
      !!creature.species ? cell.setAttribute('class', `dino-cell grid-item ${creature.species}`) : cell.setAttribute('class', 'human-cell');
      !!creature.species ? creature.image = `./images/${creature.species}.png` : null;
      cells.push(cell);
      grid.insertBefore(cell, null);
      cell.insertBefore(paragraph, null);

      if (!!Dino.prototype.isPrototypeOf(creature)) {
        dataPack = [creature.heightCompare(), creature.weightCompare(), creature.dietCompare()];
      }

      if (!!Dino.prototype.isPrototypeOf(creature) && creature.species == 'Pigeon') {
        dataPack = "All birds are dinosaurs";
      }

      if (!Dino.prototype.isPrototypeOf(creature)) {
        dataPack = humanData.name;
      }
      
      // Insert fact in cell, and randomize facts each time cells are created, for all cells except human and pigeon cells
      cell.innerText = !!Dino.prototype.isPrototypeOf(creature) && creature.species !== 'Pigeon' ? dataPack[Math.floor(Math.random() * dataPack.length)] : dataPack;
      cell.style.backgroundImage = !!Dino.prototype.isPrototypeOf(creature) ? `url(${creature.image})` : null;

    });

    // Remove form from screen
    thisFrom.remove();

    return humanData;
  }());
});
