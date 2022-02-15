export default function EuclideanDistance (coordenates) {
  let distances = [];

  for (let i = 0; i < coordenates.length - 1; i++) {
    for (let j = 1; j < coordenates.length; j++) {
      let lat1 = coordenates[i].lat;
      let lng1 = coordenates[i].lng;
      let lat2 = coordenates[j].lat;
      let lng2 = coordenates[j].lng;
      
      let diff1 = lat1 - lat2;
      let diff2 = lng1 - lng2;

      let sqrtSum = diff1 ** 2 + diff2 ** 2;

      let finalCalc = sqrtSum ** 0.5;
      let distance = {
        locations: [i,j],
        dist: finalCalc
      }

      distances.push(distance);
    }
  }

  return distances;
}
