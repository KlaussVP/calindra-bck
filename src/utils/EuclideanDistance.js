function EuclideanDistance (coordenates) {
  let distances = [];
  let earthRd = 6371;

  for (let i = 0; i < coordenates.length - 1; i++) {
    for (let j = i+1; j < coordenates.length; j++) {
      const lat1 = coordenates[i].lat;
      const lng1 = coordenates[i].lng;
      const lat2 = coordenates[j].lat;
      const lng2 = coordenates[j].lng;
      
      const lat1Rad = (lat1*Math.PI)/180;
      const lng1Rad = (lng1*Math.PI)/180;
      const lat2Rad = (lat2*Math.PI)/180;
      const lng2Rad = (lng2*Math.PI)/180;
      
      const x1 = Math.abs(lat1Rad) * earthRd;
      const x2 = Math.abs(lng1Rad) * earthRd;
      const y1 = Math.abs(lat2Rad) * earthRd;
      const y2 = Math.abs(lng2Rad) * earthRd;
      
      const diff1 = x1 - y1;
      const diff2 = x2 - y2;

      const sqrtSum = diff1 ** 2 + diff2 ** 2;

      const finalCalc = sqrtSum ** 0.5;
      const distance = {
        locations: [coordenates[i].address, coordenates[j].address],
        dist: finalCalc.toFixed(1) + " km"
      }

      distances.push(distance);
    }
  }

  return distances;
}

module.exports = EuclideanDistance;
