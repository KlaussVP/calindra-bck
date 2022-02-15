const addressesController = require("./addressesController");
const EuclideanDistance = require("../utils/EuclideanDistance");

class DistanceController {
  async getDistances({ addresses }) {
    const geocodingAddresses = await addressesController.getAddresses(addresses);

    const distances = EuclideanDistance(geocodingAddresses);

    return distances;
  }

  getFurther(distances) {
    let further = Number.parseFloat(distances[0].dist.split(" ")[0]);
    let furtherAddresses = distances[0].locations;
    
    for (let i = 1; i < distances.length; i++) {
      let compareDist = Number.parseFloat(distances[i].dist.split(" ")[0]);

      if (compareDist > further) {
        further = compareDist;
        furtherAddresses = distances[i].locations;
      }
    }

    return furtherAddresses;
  }

  getCloser(distances) {
    let closer = Number.parseFloat(distances[0].dist.split(" ")[0]);
    let closerAddresses = distances[0].locations;
    
    for (let i = 1; i < distances.length; i++) {
      let compareDist = Number.parseFloat(distances[i].dist.split(" ")[0]);

      if (compareDist < closer) {
        closer = compareDist;
        closerAddresses = distances[i].locations;
      }
    }

    return closerAddresses;
  }
}

module.exports = new DistanceController();