mapboxgl.accessToken = 'pk.eyJ1Ijoib2JpaXRvMjEiLCJhIjoiY2t0aGVrOXZlMHJmdjJ1cGloN2FkMmppcyJ9.sstrpeA1dKWd0A8ccQ-48A';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-73.85250356058961,7.0601952536944514],
  zoom: 5
})


const geojson = {
type: 'FeatureCollection',
features: [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.85250356058961,7.0601952536944514]
    }, properties: {
      title: 'Mapbox',
      description: 'Barranca',
      'marker-color': '#3bb2d0',
    'marker-size': 'large',
    'marker-symbol': 'rocket'},

  },
  {
    type: 'Feature',
    geometry: {
      coordinates: [-73.05858943664668, 6.9976757891571175]
    },
  },
  {
    type: 'Feature',
    geometry: {
      coordinates: [-74.80685856419971, 11.004636355292996]
    },
  },
  {
    type: 'Feature',
    geometry: {
      coordinates: [-74.20986300065265,11.240616727455125]
    },
  },
  {
    type: 'Feature',
    geometry: {
      coordinates: [-81.71576525178338,12.591267466615935]
    },
  },
  {
    type: 'Feature',
    geometry: {
      coordinates: [-75.4839785990702,10.394118510161098]
    },
  },
  {
    type: 'Feature',
    geometry: {
      coordinates: [-74.06868007061459,4.7078228667514805]
    },
  }
]
}; 
// add markers to map
for (const { geometry, properties } of geojson.features) {
// create a HTML element for each feature
const el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
}


var marker = new mapboxgl.Marker()
    .setLngLat([-73.85250356058961,7.0601952536944514])
    .addTo(map);

const busStops = [
[-73.85250356058961,7.0601952536944514],
[-73.05858943664668, 6.9976757891571175],
[-74.20986300065265,11.240616727455125],
[-74.80685856419971, 11.004636355292996],
[-75.4839785990702,10.394118510161098],
[-81.71576525178338,12.591267466615935],
[-74.06868007061459,4.7078228667514805],


];

var counter = 0;
function move(){
  setTimeout(() =>{
    if (counter >= busStops.length) counter = 0;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  
   
  }, 1000);
}