var map = L.map("map", {
  center: [32.759547, -97.035321], // Dallas-Fort Worth Texas
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

// Dallas Race Layer

var Dallas_race = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density =
        feature.properties.AAA_Dallas_Dallas_Race_Dallas_POC_People_of_Color;
    if (density <= 100 && density > 60.75217) fillColor = "#365c96";
    else if (density <= 60.75217 && density > 36.252415) fillColor = "#5681c2";
    else if (density <= 36.252415 && density > 21.19883) fillColor = "#8fabd6";
    else if (density <= 21.19883 && density > 9.867964) fillColor = "#c7d5eb";
    else if (density <= 9.867964 && density > 0) fillColor = "#eef2f9";
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
          .AAA_Dallas_DA_Final_Dallas_Final_Dallas_SPJN_Clipped_GEOID10 +
        "</br><strong>" +
        "Percent of Race: " +
        "</strong>" +
        feature.properties.AAA_Dallas_Dallas_Race_Dallas_POC_People_of_Color +
        "</br><strong>" +
        "Total: " +
        "</strong>" +
        feature.properties.AAA_Dallas_Dallas_Race_Dallas_POC_Total +
        "</br><strong>" +
        "White: " +
        "</strong>" +
        feature.properties.AAA_Dallas_Dallas_Race_Dallas_POC_White
    );
  },
});

$.getJSON("AAA_Dallas.json", function (data) {
  Dallas_race.addData(data);
});

Dallas_race.addTo(map);

// Dallas ALICE Layer

var Dallas_ALICE = L.geoJson(null, {
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
          .AAA_Dallas_DA_Final_Dallas_Final_Dallas_SPJN_Clipped_GEOID10 +
        "</br><strong>" +
        "ALICE Class: " +
        "</strong>" +
        feature.properties.ALICE_Class
    );
  },
});

$.getJSON("AAA_Dallas.json", function (data) {
  Dallas_ALICE.addData(data);
});

Dallas_ALICE.addTo(map);

// Dallas Opportunity Layer

var Dallas = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.AAA_Dallas_DA_Final_Dallas_Final_Class;
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
          .AAA_Dallas_DA_Final_Dallas_Final_Dallas_SPJN_Clipped_GEOID10 +
        "</br><strong>" +
        "Opportunity Class: " +
        "</strong>" +
        feature.properties.AAA_Dallas_DA_Final_Dallas_Final_Class
    );
  },
});

$.getJSON("AAA_Dallas.json", function (data) {
  Dallas.addData(data);
});

Dallas.addTo(map);

// Fort Worth Race Layer

var Fort_Worth_race = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density = feature.properties.AAA_Ft_Worth_Fort_Worth_Race_People_Of_Color;
    if (density <= 100 && density > 51.333814) fillColor = "#365c96";
    else if (density <= 51.333814 && density > 35.250918) fillColor = "#5681c2";
    else if (density <= 35.250918 && density > 23.558484) fillColor = "#8fabd6";
    else if (density <= 23.558484 && density > 11.886901) fillColor = "#c7d5eb";
    else if (density <= 11.886901 && density > 0) fillColor = "#eef2f9";
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
          .AAA_Ft_Worth_AAA_Fort_Worth_Fort_Worth_Final_Fort_Worth_Prime__4 +
        "</br><strong>" +
        "Percent of Race: " +
        "</strong>" +
        feature.properties.AAA_Ft_Worth_Fort_Worth_Race_People_Of_Color +
        "</br><strong>" +
        "Total: " +
        "</strong>" +
        feature.properties.AAA_Ft_Worth_Fort_Worth_Race_Texas_POC_Total +
        "</br><strong>" +
        "White: " +
        "</strong>" +
        feature.properties.AAA_Ft_Worth_Fort_Worth_Race_Texas_POC_White
    );
  },
});

$.getJSON("AAA_Fort_Worth.json", function (data) {
  Fort_Worth_race.addData(data);
});

Fort_Worth_race.addTo(map);

// Fort Worth ALICE Layer

var Fort_Worth_ALICE = L.geoJson(null, {
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
          .AAA_Ft_Worth_AAA_Fort_Worth_Fort_Worth_Final_Fort_Worth_Prime__4 +
        "</br><strong>" +
        "ALICE Class: " +
        "</strong>" +
        feature.properties.ALICE_Class
    );
  },
});

$.getJSON("AAA_Fort_Worth.json", function (data) {
  Fort_Worth_ALICE.addData(data);
});

Fort_Worth_ALICE.addTo(map);

// Fort Worth Opportunity Layer

var FortWorth = L.geoJson(null, {
  style: function (feature) {
    var fillColor,
      density =
        feature.properties.AAA_Ft_Worth_AAA_Fort_Worth_Fort_Worth_Final_Class;
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
          .AAA_Ft_Worth_AAA_Fort_Worth_Fort_Worth_Final_Fort_Worth_Prime__4 +
        "</br><strong>" +
        "Opportunity Class: " +
        "</strong>" +
        feature.properties.AAA_Ft_Worth_AAA_Fort_Worth_Fort_Worth_Final_Class
    );
  },
});

$.getJSON("AAA_Fort_Worth.json", function (data) {
  FortWorth.addData(data);
});

FortWorth.addTo(map);

// Texas Tech Density

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

$.getJSON("Texas_Polygon.json", function (data) {
  polygon.addData(data);
});

polygon.addTo(map);

// Dallas - Fort Worth Light Rail

var rail = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#FF0000",
      weight: 3,
      fillOpacity: 0,
    };
  },
});

$.getJSON("Transit_Rail.json", function (data) {
  rail.addData(data);
});

rail.addTo(map);

//Overlay grouped layers
var groupOverLays = {
  "Dallas-Fort Worth Layers": {
    "Texas Tech Density": polygon,
    "Dallas-Fort Worth Light Rail": rail,
    "Dallas Opportunity Layer": Dallas,
    "Dallas ALICE Layer": Dallas_ALICE,
    "Dallas Race Layer": Dallas_race,
    "Fort Worth Opportunity Layer": FortWorth,
    "Fort Worth ALICE Layer": Fort_Worth_ALICE,
    "Fort Worth Race Layer": Fort_Worth_race,
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
