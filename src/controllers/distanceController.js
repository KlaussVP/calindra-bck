const addressesController = require("./addressesController");
const EuclideanDistance = require("../utils/EuclideanDistance");

class DistanceController {
  async getDistances({ addresses }) {
    const geocodingAddresses = await addressesController.getAddresses(addresses);

    const distances = EuclideanDistance(geocodingAddresses);

    return distances;
  }

  getFurther(distances) {
    let further = distances[0].dist;
    
    for (let i = 1; i < distances.length; i++) {
      if (distances[i].dist > further) {
        further = distances[i].dist;
      }
    }

    return further;
  }

  getCloser(distances) {
    let closer = distances[0].dist;
    
    for (let i = 1; i < distances.length; i++) {
      if (distances[i].dist < closer) {
        closer = distances[i].dist;
      }
    }

    return closer;
  }
}

module.exports = new DistanceController();