const { default: axios } = require("axios");

async function geocodingRequest(params) {
  if (!params) return {};

  let geocodingAddress = {};

  await axios.get(`${process.env.GOOGLE_API}`, { params })
  .then(resp => {
    geocodingAddress = { 
      "address": resp.data.results[0].formatted_address,
      "lat": resp.data.results[0].geometry.location.lat,
      "lng": resp.data.results[0].geometry.location.lng
    };
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  });

  return geocodingAddress;
}

module.exports = geocodingRequest;