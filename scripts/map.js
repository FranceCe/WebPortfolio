const myAddressCoordinates = {
  lat: 45.59768,
  lon: 9.2644,
};

let ip;

fetch("https://api.ipify.org?format=json")
  .then((res) => res.json())
  .then((ipObj) => {
    ip = ipObj.ip;
    console.log("ip", ip);
  })
  .then(() => {
    fetch(`http://ip-api.com/json/${ip}`)
      .then((res) => res.json())
      .then((geoData) => {
        console.log(geoData);
        const distance = getDistance(
          myAddressCoordinates.lat,
          myAddressCoordinates.lon,
          geoData.lat,
          geoData.lon
        );
        const roundedDistance = Math.round(distance);
        console.log("distance", roundedDistance);
        showDistance(roundedDistance);
      });
  })
  .catch((err) => console.log(err));

function getDistance(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const diffLat = deg2rad(lat2 - lat1);
  const diffLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(diffLon / 2) *
      Math.sin(diffLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = radius * c;
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function showDistance(distance) {
  const messageContainer = document.querySelector(
    ".distance-message-container"
  );
  const text = `Roughly estimating based on your current ip address, it looks like we are ${
    distance < 50 ? "just" : ""
  } ${distance} Km apart!`;
  messageContainer.innerText = text;
}
