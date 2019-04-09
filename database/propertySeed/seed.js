const mongoose = require('mongoose');
const Property = require('../index.js');

// --------------------------------------------
const adjectives = ['soft', 'open', 'amazing', 'expensive', 'beautiful', 'elegant', 'narrow', 'wet', 'classy', 'spacious', 'lively', 'colorful', 'shiny', 'marvelous', 'nicest', 'comfortable', 'small', 'big', 'huge', 'great', 'impossible', 'possible', 'unremarkable', 'remarkable', 'the best', 'spectacular', 'outstanding', 'lovely', 'incomparable', 'pleasant', 'wonderful', 'incredible', 'marvelous', 'perfect'];
const adverbs = ['lively', 'actively', 'happily', 'graciously', 'generously', 'genuinely', 'poorly', 'intensely', 'depressingly', 'properly', 'insanely', 'terribly', 'widely', 'wisely', 'stupidly', 'improperly', 'correctly', 'fairly', 'comfortably', 'dryly', 'inconspicuously', 'humorously', 'proactively', 'gracefully'];
const prepositions = ['to', 'in', 'on', 'over', 'above', 'below', 'under', 'at', 'from', 'into', 'onto', 'on top of', 'of'];
const verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed', 'enjoy','run', 'eat', 'walk', 'fly', 'talk', 'sing', 'dance', 'wallow', 'pace', 'sweat', 'draw', 'drink', 'teach', 'fall', 'joke', 'take', 'treat', 'peer', 'hear', 'listen', 'guess', 'cheer', 'whine', 'bark', 'sprint', 'write', 'help', 'swim', 'follow', 'make', 'break', 'fake', 'choke', 'beat', 'sit', 'lie', 'lay', 'watch'];
const area = ['entrance', 'doorway', 'bedroom', 'bathroom', 'study', 'living room', 'basement', 'attic', 'closet', 'library', 'porch', 'yard', 'roof', 'kitchen', 'dining room', 'garage', 'backdoor', 'sidedoor'];

let randomElement = function(array){
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const sentences = [
  `Our ${randomElement(adjectives)} ${randomElement(adjectives)} ${randomElement(area)} with ${randomElement(adjectives)} ${randomElement(area)} is ${randomElement(adjectives)} as heck and just ${randomElement(prepositions)} the hill from the LA's ${randomElement(adjectives)}-running farmer's market! You can ${randomElement(verbs)} the ${randomElement(adjectives)} sights of the city then get comfy in your ${randomElement(adjectives)} ${randomElement(area)} with ${randomElement(adjectives)} bath.`,
  `If you're ${randomElement(verbs)} ${randomElement(prepositions)} a car, it's a ${randomElement(adjectives)} street where ${randomElement(adjectives)} street parking can ${randomElement(adverbs)} be found. Freeway access is just ${randomElement(prepositions)} the corner. Lyft/Uber have ${randomElement(adjectives)} drivers nearby.`,
  `Located on a ${randomElement(adjectives)} street, you'll ${randomElement(verbs)} ${randomElement(adjectives)} views while coming and going. You ${randomElement(verbs)} just a few blocks ${randomElement(prepositions)} the many restaurants and shops ${randomElement(prepositions)} the ${randomElement(adjectives)} street (aka the ${randomElement(adjectives)} drag) and just steps ${randomElement(prepositions)} the hill from the Farmer's Market on Saturday and Flea Market on Sunday. Keep venturing ${randomElement(prepositions)} to ${randomElement(verbs)} to the top of the hill, where you'll ${randomElement(verbs)} the ${randomElement(adjectives)} views in the city. No seriously, they're the best!`,
  `There is no ${randomElement(area)} or ${randomElement(adjectives)} appliances.`,
  `This listing is ${randomElement(adverbs)} private ${randomElement(adjectives)} ${randomElement(area)} with attached ${randomElement(adjectives)} ${randomElement(area)}. It's ${randomElement(adjectives)} with plenty of room for two people. Despite that it is attached ${randomElement(prepositions)} our house and we live ${randomElement(prepositions)} the second floor, it is completely private. You will enter through the separate ${randomElement(area)}, located ${randomElement(prepositions)} the ${randomElement(area)}.`,
  `Guests have access to one ${randomElement(adjectives)} ${randomElement(area)} on the lower level of the house, which is accessible by separate ${randomElement(area)} and contains a ${randomElement(adjectives)} ${randomElement(area)} with shower. You'll access through the ${randomElement(area)}. ${randomElement(adverbs)} sweet, eh?`,
  `We're a ${randomElement(adjectives)} couple with a ${randomElement(adjectives)} dog and ${randomElement(adjectives)} cat. If you like to ${randomElement(verbs)} about electric vehicles or Internet memes, we'll all get along just fine! :) We're also happy to keep our distance and let you enjoy your stay ${randomElement(adverbs)}. You may happen to ${randomElement(verbs)} the pitter-patter of tiny paws or the rumblings of an ${randomElement(adjectives)} Netflix marathon, but your ${randomElement(area)} is on a ${randomElement(adjectives)} level with ${randomElement(adjectives)} ${randomElement(area)}.`,
  `Despite these gems, some guests are not satisfied by our location. It is not ${randomElement(adverbs)} close to the pier, the bridge, and other ${randomElement(adverbs)} ${randomElement(adjectives)} areas. This is a location best for those who do not mind ${randomElement(verbs)}ing a Lyft and are ${randomElement(verbs)}ing to ${randomElement(verbs)} a ${randomElement(adjectives)} and ${randomElement(adjectives)} area. Please decide if our home is right for you before ${randomElement(verbs)}ing.`,
  `Our ${randomElement(adjectives)} and ${randomElement(adjectives)} one ${randomElement(area)} unit with ${randomElement(adjectives)} ${randomElement(area)}! It ${randomElement(adjectives)} fits two and is ${randomElement(adverbs)} located on a ${randomElement(adjectives)} street, just few blocks ${randomElement(prepositions)} the park and Central St. Enjoy ${randomElement(adjectives)} in-suite ${randomElement(area)}, hotel standard linen. This is just a bit short of being called an apartment as we don't have a ${randomElement(adjectives)} ${randomElement(area)}! You'll have a ${randomElement(area)} with place to ${randomElement(verbs)} coffee, a mini fridge, microwave and tons of others amenities making your stay easy and ready like a local.`,
  `As a note: we ${randomElement(verbs)} upstairs with two kids, as you can see from our reviews, most guests don't have a problem with the noise they ${randomElement(verbs)} in the morning. Our kids wake up around 6:30AM to 7AM (quiet time for them is 9PM), we ${randomElement(verbs)} their activities to the ${randomElement(area)} which is not ${randomElement(adverbs)} on top of yours. If you are a light sleeper, the light sound might wake you up but it's ${randomElement(adverbs)} not loud.`,
  `You will have your own ${randomElement(area)} and your own ${randomElement(area)}s. A ${randomElement(adjectives)} ${randomElement(area)} with sink to make coffee and tea and tons of ${randomElement(area)} space! This is an in-law unit with about 600 sqft in space (yay!) and we live upstairs. We have a ${randomElement(adjectives)} fridge, a microwave, toaster and hot water kettle. You'll have everything you need to make your stay ${randomElement(adjectives)}. Also did we mention we have a ${randomElement(adjectives)} local phone for you to use if you are not from the US, it comes with power bank and data so you can have data access wherever you go.`,
  `Parking is available for 2hr between 8AM and 5PM. You can park ${randomElement(adverbs)} between 3PM and 10AM and anytime in the weekend. When you are in town, I ${randomElement(verbs)} you will ${randomElement(verbs)} your car so parking won't be a ${randomElement(adjectives)} problem. Make sure to ${randomElement(verbs)} the ${randomElement(verbs)}ing sign posted since we have street ${randomElement(verbs)}ing occasionally.`,
  `Update: we just ${randomElement(verbs)}ed our ${randomElement(area)} with TV with ${randomElement(adjectives)} Netflix and an Alexa echo device with Spotify.`,
  `Extremely ${randomElement(adjectives)} and ${randomElement(adjectives)} for you. We want you to ${randomElement(verbs)} ${randomElement(adjectives)} while watching the sunset over the mountains and ${randomElement(adjectives)} views of the hills with a ${randomElement(adjectives)} breeze coming ${randomElement(prepositions)} the ${randomElement(adjectives)} french doors while ${randomElement(verbs)}ing on the Harrison sofa ${randomElement(verbs)}ing to your fav playlist on the Iphone dock.`,
  `Other Amenities include a ${randomElement(adjectives)} foam mattress, 1500 thread count white linens, 15 MB high speed WIFI, 50" Samsung LED with 250 channels of programming, Iphone music dock, ${randomElement(adjectives)} floors, ${randomElement(adverbs)} stocked ${randomElement(area)} with cookware and dining set for easy meal preparation and entertaining. There is also ample walk in ${randomElement(area)} space which includes a walk in closet, central air/heat, ${randomElement(adjectives)} ${randomElement(area)}. in-${randomElement(area)} laundry and controlled secure building ${randomElement(area)}.`
];

var makeParagraph = () => {
  let result = [];
  let randomIndex = Math.floor(Math.random() * 3) + 1;
  while (randomIndex > 0){
    result.push(randomElement(sentences));
    randomIndex--
  };
  return result.join(" ");
};

var makeDescription = () => {
  let result = [];
  let randomIndex = Math.floor(Math.random() * 5) + 1;
  while(randomIndex > 0){
    result.push(makeParagraph())
    randomIndex--
  };
  return result
};
//-----------------------------------------------

const propTypes = ['Room in boutique hotel', 'Private room in hostel', 'Room in hotel', 'Shared room in apartment', 'Shared room in villa', 'Shared room in house', 'Entire house', 'Entire townhouse', 'Entire guest suite', 'Entire apartment'];
const locations = ['Los Angeles', 'Glendale', 'Marina del Rey', 'Hollywood', 'Hawthorne', 'Pasadena', 'Inglewood', 'Compton', 'Koreatown', 'Westchester', "Bel-Air", "Beverley Hills", "West LA", 'Santa Monica', 'Venice', 'Malibu'];
const noun = ['Home', 'Flat', 'Apartment', 'Suite', 'Loft', 'Cottage', 'Townhouse', 'Condo', 'Bungalow', 'Retreat', 'House', 'Castle', 'Mansion'];
const adjective = ['', "Beautiful", 'Cozy', 'Convenient', 'Magical', 'Private', 'Vintage', 'Charming', 'Themed', 'Modern', 'Luxurious', 'Getaway', 'Quaint', 'Hilltop', 'Scenic', 'Picturesque', 'Comfy'];

const titles = [`${randomElement(adjective)} ${randomElement(noun)}`, `${randomElement(adjective)} and ${randomElement(adjective)} ${randomElement(noun)}`, `${randomElement(adjective)} ${randomElement(noun)} around ${randomElement(locations)} area`, `${randomElement(adjective)} ${randomElement(propTypes)}`];
  
const bedTypes = ['single', 'double', 'queen', 'king', 'sofa', 'sofa bed', 'hammock', 'air mattress', 'bunk bed', 'water bed', 'floor mattress', 'crib', 'toddler bed'];

// let randomElement = function(array){
//   let randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// };

let xRandomElements = function(array, value){
  let result = [];
  while (value > 0){
    result.push(randomElement(array));
    value--
  }
  return result
}

// Property Functions: {propType: String, title: String, location: String, numGuests: Number},
// Property Types
var propType = randomElement(propTypes);
// Property Title
var propName = randomElement(titles);
// Property Locations
var propLoc = randomElement(locations);
// Number of Guests
var guestNum = randomElement([2, 3, 4, 5, 6, 7, 8, 9, 10])

//Bed Functions: {quantity:Number, bedType: String, iconUrl: Array},
// Number of Beds
let numBeds = randomElement([1, 2, 3, 4, 5, 6]);
// Bed Types
let bedTypesArr = xRandomElements(bedTypes, numBeds);
// UrlIcons
let bedIcons = [
  {floor: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/beds/bed-floor.png'},
  {queen: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/beds/bed-queenking.png'},
  {king: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/beds/bed-queenking.png'},
  {single: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/beds/bed-single.png'},
  {sofa: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/beds/bed-sofa.png'}
];
//////////// TODO ///////////////
// let bedIconUrl = xRandomElements(bedUrls, numBeds) 

// numBaths: Number,
randomElement([2, 3, 4]);

//Amenities Functions: {basic: Array, notIncluded: Array, iconUrl: Array},
const amenities = ['Pool', 'Kitchen', 'Wireless Internet', 'Pet-Friendly', 'Free Parking', 'TV', 'Essentials', 'Heating', 'Elevator', 'Gym', 'Washer', 'Dryer'];
// Number of Amenities
let numAmenities = randomElement([6, 7, 8]);
xRandomElements(amenities, numAmenities);
// Number of Not Includeded
let numNotIncluded = randomElement([2, 3, 4, 5]);
xRandomElements(amenities, numNotIncluded);
// UrlIcons
let amenIcons = [
  {Elevator: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-elevator.png'},
  {Gym: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-gym.png'},
  {Kitchen: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-kitchen.png'},
  {Parking: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-parking.png'},
  {TV: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-tv.png'},
  {Washer: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-washdry.png'},
  {Dryer: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-washdry.png'},
  {Wifi: 'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/amenities/amen-wifi.png'}
];
//////////// TODO ///////////////
// let amIconUrl = xRandomElements(bedUrls, randomElement([6, 7, 8])) 


// Number of Bathrooms
let randomBath = Math.floor(Math.random() * 4) + 1;

//Host Functions: { name: String, pictureUrl: String },
const firstNames = ['Mark', 'Jaime', 'Arya', 'Cersei', 'Tyrion', 'Michael', 'Sansa', 'Cassie', 'Sarah', 'Jackie', 'John', 'Fred', 'Jacob', 'Daniel', 'Jason', 'Anthony'];
const lastNames = ['', 'Johnson', 'Lee', 'Smith', 'Snow', 'Matthews', 'Rodriquez', 'Chan', 'Schmidt', 'Lannister', 'Tyrell', 'Stark', 'Bolton'];
const names = [`${randomElement(firstNames)}`, `${randomElement(firstNames)} ${randomElement(lastNames)}`, `${randomElement(firstNames)} and ${randomElement(firstNames)}`];
randomElement(names);
// UrlIcons
let hostImgs = [
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-adam.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-anthony.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-arash.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-calvin.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-celia.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-charles.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-drew.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-gabrielle.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-harrison.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-jeff.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-julie.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-julien.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-justin.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-kin.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-matt.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-wendy.png',
  'https://s3-us-west-1.amazonaws.com/airbnb-icons-png/hosts/host-yongsoo.png'
];
//////////// TODO ///////////////
// randomElement(hostUrls)

// summary: Array

var result = [];

// generateProperty = (value) => {
generateProperty = () => {
  // var value = value || 1;
  // var result = [];
  var propObj = {
    propertyInfo: {
      propType: randomElement(propTypes), 
      title: randomElement(titles), 
      location: randomElement(locations),
      numGuests: randomElement([2, 3, 4, 5, 6, 7, 8])
    },
    beds: {
      quantity: randomElement([1, 2, 3, 4, 5, 6]), 
      bedType: xRandomElements(bedTypes, this.quantity), 
      iconUrl: xRandomElements(bedIcons, this.quantity) // iconUrl
    },
    amenities: {
      basic: xRandomElements(amenities, numAmenities),
      notIncluded: xRandomElements(amenities, numNotIncluded),
      iconUrl: xRandomElements(amenIcons, randomElement([2, 3, 4])) // iconUrl
    },
    numBaths: ((Math.floor(Math.random() * 4)) + 1),
    host: {
      name: randomElement(names), 
      pictureUrl: randomElement(hostImgs) // randomElement(hostUrls)
    },
    summary: makeDescription()
  };
  // while (value > 0){
  //   result.push(propObj);
  //   value--
  // }
  // console.log(result)
  // return result
  return propObj
};
// generateProperty(2)
// --------------------------------------------------

for (var i = 0; i <= 100; i++){
  result.push(generateProperty())
}

var insertAllProperties = function() {
  // create will take either an object or an array of objects
  // Property.create(generateProperty(100))
  Property.create(result)
    .then(() => {
      console.log('database seeded');
      mongoose.connection.close();
    })
    .catch(error => console.error(error));
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

insertAllProperties();
