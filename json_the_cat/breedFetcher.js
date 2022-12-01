const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, resp, body) => {
    if (error) {
      callback("Failed to load request", null);
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback('Failed to find the breed');
    }

  });

};

module.exports = { fetchBreedDescription };