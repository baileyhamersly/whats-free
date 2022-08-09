const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/get/basic',
    params: {country: 'us', tmdb_id: 'movie/120', output_language: 'en'},
    headers: {
      'X-RapidAPI-Key': 'a12f6ee932msh9c1381f43fc2ffdp1ebacejsnf9057a04acb4',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

const searchOptions = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: 'us',
    service: 'netflix',
    type: 'movie',
    genre: '18',
    page: '1',
    output_language: 'en',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'a12f6ee932msh9c1381f43fc2ffdp1ebacejsnf9057a04acb4',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};


async function getMedia() {
    try {
    const response = await axios.get(options);
    console.log("++RESPONSE IN GETMEDIA: ++", response);
    return response;
    }
    catch(error) {
        console.log("**ERROR IN GETMEDIA: **", error);
    }
}

async function searchMedia() {
    try {
    const response = await axios.get(searchOptions);
    console.log("++RESPONSE IN SEARCHMEDIA: ++", response);
    return response;
    }
    catch(error) {
        console.log("**ERROR IN SEARCHMEDIA: **", error);
    }
}