var map = L.map("map", {
  center: [39.95228, -75.16245], // Philadelphia Pennsylvania
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

var geojsonMarkerOptions = {
  fillOpacity: 1,
  fillColor: "red",
  color: "red",
  radius: 2,
};

//Load OSM Buildings then disable it on first load; can only be viewed at certain scales
var osmb = new OSMBuildings(map).load();
map.removeLayer(osmb);

// Toxic Layer

var toxic = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Toxic_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Toxic Class: " +
        "</strong>" +
        feature.properties.Toxic_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  toxic.addData(data);
  controlLayers.addOverlay(toxic, "Toxic Layer");
});

// Bus Layer

var bus = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Bus_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Bus Class: " +
        "</strong>" +
        feature.properties.Bus_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  bus.addData(data);
  controlLayers.addOverlay(bus, "Bus Layer");
});

// Unemployment Layer

var unemployment = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Unemployment_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Unemployment Class: " +
        "</strong>" +
        feature.properties.Unemployment_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  unemployment.addData(data);
  controlLayers.addOverlay(unemployment, "Unemployment Layer");
});

// Commute Layer

var commute = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Commute_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Commute Class: " +
        "</strong>" +
        feature.properties.Commute_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  commute.addData(data);
  controlLayers.addOverlay(commute, "Commute Layer");
});

// Income Layer

var income = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Income_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Income Class: " +
        "</strong>" +
        feature.properties.Income_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  income.addData(data);
  controlLayers.addOverlay(income, "Income Layer");
});

// Education Layer

var education = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Education_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Education Class: " +
        "</strong>" +
        feature.properties.Education_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  education.addData(data);
  controlLayers.addOverlay(education, "Education Layer");
});

// Education Attain Layer

var highed = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.EducationAttain_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Education Attain Class: " +
        "</strong>" +
        feature.properties.EducationAttain_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  highed.addData(data);
  controlLayers.addOverlay(highed, "Education Attain Layer");
});

// Rent Layer

var rent = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Rent_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Rent Class: " +
        "</strong>" +
        feature.properties.Rent_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  rent.addData(data);
  controlLayers.addOverlay(rent, "Rent Layer");
});

// Mortgage Layer

var mortgage = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Mortgage_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Mortgage Class: " +
        "</strong>" +
        feature.properties.Mortgage_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  mortgage.addData(data);
  controlLayers.addOverlay(mortgage, "Mortgage Layer");
});

// Community Layer

var community = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Community_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Community Class: " +
        "</strong>" +
        feature.properties.Community_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  community.addData(data);
  controlLayers.addOverlay(community, "Community Layer");
});

// Vehicle Layer

var vehicle = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.Vehicle_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Vehicle Class: " +
        "</strong>" +
        feature.properties.Vehicle_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  vehicle.addData(data);
  controlLayers.addOverlay(vehicle, "Vehicle Layer");
});

// Race Layer

var race = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density =
        feature.properties.AAA_Philadelphia_Philadelphia_Race_People_Of_Color;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Percent of Race: " +
        "</strong>" +
        feature.properties.AAA_Philadelphia_Philadelphia_Race_People_Of_Color +
        "</br><strong>" +
        "Total: " +
        "</strong>" +
        feature.properties
          .AAA_Philadelphia_Philadelphia_Race_Pennsylvania_POC_Total +
        "</br><strong>" +
        "White: " +
        "</strong>" +
        feature.properties
          .AAA_Philadelphia_Philadelphia_Race_Pennsylvania_POC_White
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  race.addData(data);
});

race.addTo(map);

// ALICE Layer

var ALICE = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.ALICE_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "ALICE Class: " +
        "</strong>" +
        feature.properties.ALICE_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  ALICE.addData(data);
});

ALICE.addTo(map);

// Opportunity Layer

var opportunity = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.AAA_Philadelphia_PA_Final_Class;
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
        feature.properties
          .AAA_Philadelphia_PA_Final_PA_Prime_PA_Final_Philadelphia_GEOID10 +
        "</br><strong>" +
        "Opportunity Class: " +
        "</strong>" +
        feature.properties.AAA_Philadelphia_PA_Final_Class
    );
  },
});

$.getJSON("AAA_Philadelphia.json", function (data) {
  opportunity.addData(data);
});

opportunity.addTo(map);

// SEPTA Regional Rail

var rail = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#FF0000",
      weight: 3,
      fillOpacity: 0,
    };
  },
});

$.getJSON("SEPTAGISRegionalRailLines_201207.json", function (data) {
  rail.addData(data);
});

rail.addTo(map);

// Philadelphia Tech Density

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

$.getJSON("Pennsylvannia_Polygon.json", function (data) {
  polygon.addData(data);
});

polygon.addTo(map);

// Philadelphia Tech Companies

var companies = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Company Name: " +
        "</strong>" +
        feature.properties.ÃÂÂNAME +
        "</br><strong>" +
        "Address: " +
        "</strong>" +
        feature.properties.ADDRESS +
        "</br><strong>" +
        "City: " +
        "</strong>" +
        feature.properties.CITY +
        "</br><strong>" +
        "State: " +
        "</strong>" +
        feature.properties.STATE +
        "</br><strong>" +
        "Zip Code: " +
        "</strong>" +
        feature.properties.ZIP
    );
  },
});

$.getJSON("Pennsylvannia_Tech_Companies.json", function (data) {
  companies.addData(data);
});

companies.addTo(map);

//Overlay grouped layers
var groupOverLays = {
  "Philadelphia Layers": {
    "Philadelphia Tech Companies": companies,
    "Philadelphia Tech Density": polygon,
    "SEPTA Regional Rail": rail,
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

var controlLayers = L.control.layers().addTo(map);

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
