const geocodingRequest = require("../utils/geocodingRequest");

class AddressesController {
  async getAddresses(addresses) {
    let geocodingAddresses = [];

    for (let i = 0; i < addresses.length; i++) {
      let params = {
        address: addresses[i],
        key: process.env.GOOGLE_API_KEY
      }
      const geoAd = await geocodingRequest(params);

      geocodingAddresses.push(geoAd);
    }

    return geocodingAddresses;
  }
}

module.exports = new AddressesController();