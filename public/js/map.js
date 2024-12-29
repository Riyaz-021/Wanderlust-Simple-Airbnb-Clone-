mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

// // Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 45 })
      .setHTML(
        `<h5></h5><p><b>Exact location will be provided after booking!</b></p>`
      )
      .setMaxWidth("800px")
  )
  .addTo(map);
