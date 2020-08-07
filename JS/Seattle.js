var map = L.map("map", {
  center: [47.60357, -122.32945], // Seattle Washington
  zoom: 11,
  minZoom: 10,
});

var defaultBase = L.tileLayer.provider("Stamen.TonerLite").addTo(map);

var baseLayers = {
  "Stamen Toner": defaultBase,
  "USGS TNM": L.tileLayer.provider("USGSTNM"),
  "ESRI Imagery": L.tileLayer.provider("Esri.WorldImagery"),
  "ESRI Ocean Basemap": L.tileLayer.provider("Esri.OceanBasemap"),
  "OSM Topo": L.tileLayer.provider("OpenTopoMap"),
};

//Load OSM Buildings then disable it on first load; can only be viewed at certain scales
var osmb = new OSMBuildings(map).load();
map.removeLayer(osmb);

// Race Layer

var race = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.AAA_Seattle_Seattle_POC_People_Of_Color;
    if (density <= 100 && density > 48.571429) fillColor = "#365c96";
    else if (density <= 48.571429 && density > 29.973118) fillColor = "#5681c2";
    else if (density <= 29.973118 && density > 20.138355) fillColor = "#8fabd6";
    else if (density <= 20.138355 && density > 13.348248) fillColor = "#c7d5eb";
    else if (density <= 13.348248 && density > 0) fillColor = "#eef2f9";
    else fillColor = "#555555"; // no data
    return {
      color: "#000000",
      weight: 0,
      fillColor: fillColor,
      fillOpacity: 1,
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "GEOID: " +
        "</strong>" +
        feature.properties.AAA_Seattle_Seattle_Final_Seattle_GEOID10 +
        "</br><strong>" +
        "Percent of Race: " +
        "</strong>" +
        feature.properties.AAA_Seattle_Seattle_POC_People_Of_Color +
        "</br><strong>" +
        "Total: " +
        "</strong>" +
        feature.properties.AAA_Seattle_Seattle_POC_Washington_POC_Total +
        "</br><strong>" +
        "White: " +
        "</strong>" +
        feature.properties.AAA_Seattle_Seattle_POC_Washington_POC_White
    );
  },
});

$.getJSON("AAA_Seattle.json", function (data) {
  race.addData(data);
});

race.addTo(map);

// ALICE Layer

var ALICE = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.AAA_Seattle_ALICE_Class;
    if (density <= 5 && density > 4) fillColor = "#365c96";
    else if (density <= 4 && density > 3) fillColor = "#5681c2";
    else if (density <= 3 && density > 2) fillColor = "#8fabd6";
    else if (density <= 2 && density > 1) fillColor = "#c7d5eb";
    else if (density <= 1 && density > 0) fillColor = "#eef2f9";
    else fillColor = "#555555"; // no data
    return {
      color: "#000000",
      weight: 0,
      fillColor: fillColor,
      fillOpacity: 1,
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "GEOID: " +
        "</strong>" +
        feature.properties.AAA_Seattle_Seattle_Final_Seattle_GEOID10 +
        "</br><strong>" +
        "ALICE Class: " +
        "</strong>" +
        feature.properties.AAA_Seattle_ALICE_Class
    );
  },
});

$.getJSON("AAA_Seattle.json", function (data) {
  ALICE.addData(data);
});

// Opportunity Layer

var opportunity = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density =
        feature.properties
          .AAA_Seattle_Seattle_Final_Seattle_Prime_Seattle_Final_Class;
    if (density <= 5 && density > 4) fillColor = "#365c96";
    else if (density <= 4 && density > 3) fillColor = "#5681c2";
    else if (density <= 3 && density > 2) fillColor = "#8fabd6";
    else if (density <= 2 && density > 1) fillColor = "#c7d5eb";
    else if (density <= 1 && density > 0) fillColor = "#eef2f9";
    else fillColor = "#555555"; // no data
    return {
      color: "#000000",
      weight: 0,
      fillColor: fillColor,
      fillOpacity: 1,
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "GEOID: " +
        "</strong>" +
        feature.properties.AAA_Seattle_Seattle_Final_Seattle_GEOID10 +
        "</br><strong>" +
        "Opportunity Class: " +
        "</strong>" +
        feature.properties
          .AAA_Seattle_Seattle_Final_Seattle_Prime_Seattle_Final_Class
    );
  },
});

$.getJSON("AAA_Seattle.json", function (data) {
  opportunity.addData(data);
});

opportunity.addTo(map);

// Sound Transit Link Light Rail

var rail = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#FF0000",
      weight: 3,
      fillOpacity: 0,
    };
  },
});

$.getJSON("LINKLine.json", function (data) {
  rail.addData(data);
});

rail.addTo(map);

// Seattle Tech Density

var polygon = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#111111",
      weight: 3,
      fillOpacity: 0,
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<strong>" + "Density: " + "</strong>" + feature.properties.gridcode
    );
  },
});

$.getJSON("Seattle_Polygon.json", function (data) {
  polygon.addData(data);
});

polygon.addTo(map);

//Overlay grouped layers
var groupOverLays = {
  "Seattle Layers": {
    "Seattle Tech Density": polygon,
    "Sound Transit Link Light Rail": rail,
    "Opportunity Layer": opportunity,
    "ALICE Layer": ALICE,
    "Race Layer": race,
  },

  "OSM Bldg Classic": {
    "2.5D Buildings": osmb,
  },
};

//add layer switch control
L.control.groupedLayers(baseLayers, groupOverLays).addTo(map);

//add scale bar to map
L.control
  .scale({
    position: "bottomleft",
  })
  .addTo(map);

// Overview mini map
var Esri_WorldTopoMap = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "&copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
  }
);

var miniMap = new L.Control.MiniMap(Esri_WorldTopoMap, {
  toggleDisplay: true,
  minimized: false,
  position: "bottomleft",
}).addTo(map);

//define Drawing toolbar options
var options = {
  position: "topleft", // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
  drawMarker: true, // adds button to draw markers
  drawPolyline: true, // adds button to draw a polyline
  drawRectangle: true, // adds button to draw a rectangle
  drawPolygon: true, // adds button to draw a polygon
  drawCircle: true, // adds button to draw a cricle
  cutPolygon: true, // adds button to cut a hole in a polygon
  editMode: true, // adds button to toggle edit mode for all layers
  removalMode: true, // adds a button to remove layers
};

// add leaflet.pm controls to the map
map.pm.addControls(options);

//Logo position: bottomright
var credctrl = L.controlCredits({
  image: "Images/opengislab_106x23.png",
  link: "https://www.opengislab.com/",
  text: "Leaflet map example by Stephanie @ <u>opengislab.com<u/>",
}).addTo(map);
