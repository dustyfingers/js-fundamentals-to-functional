// create an object using bracket and dot notation that
// represents the characters and related data you may find in a game of clue

var game = {};

game.murderer = "???";

game["weapons"] = [
  {type: "brick", location: 'laboratory'},
  {type: "cleaver", location: 'conservatory'},
  {type: "torch", location: 'pantry'},
  {type: "pistol", location: 'ballroom'},
  {type: "rifle", location: 'foyer'},
  {type: "poison", location: 'parlor'}
];

game['names'] = [
    'Mr. Green', 
    'Miss Scarlett',
    'Colonel Mustard',
    'Sir Ashe'
];

console.log(game);


