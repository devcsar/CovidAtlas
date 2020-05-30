window.onload = function () {
  // Seven day slider based off today, remember what today is
  var today = new Date();

  // Selected day to show on the map
  var day = new Date(today.getTime());

  // GIBS needs the day as a string parameter in the form of YYYY-MM-DD.
  // Date.toISOString returns YYYY-MM-DDTHH:MM:SSZ. Split at the 'T' and
  // take the date which is the first part.
  var dayParameter = function () {
    return day.toISOString().split('T')[0];
  };

  var map = new ol.Map({
    view: new ol.View({
      maxResolution: 0.5625,
      projection: ol.proj.get('EPSG:4326'),
      extent: [-180, -90, 180, 90],
      center: [0, 0],
      zoom: 2,
      maxZoom: 8
    }),
    target: 'map',
    renderer: ['canvas', 'dom']
  });

  function update() {
    // There is only one layer in this example, but remove them all
    // anyway
    clearLayers();

    // Add the new layer for the selected time
    map.addLayer(createLayer());

    // Update the day label
    document.querySelector('#day-label').textContent = dayParameter();
  };

  function clearLayers() {
    // Get a copy of the current layer list and then remove each
    // layer.
    var activeLayers = map.getLayers().getArray();
    for (var i = 0; i < activeLayers.length; i++) {
      map.removeLayer(activeLayers[i]);
    }
  };

  function createLayer() {
    var source = new ol.source.WMTS({
      url: 'https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=' + dayParameter(),
      layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
      format: 'image/jpeg',
      matrixSet: 'EPSG4326_250m',
      tileGrid: new ol.tilegrid.WMTS({
        origin: [-180, 90],
        resolutions: [
          0.5625,
          0.28125,
          0.140625,
          0.0703125,
          0.03515625,
          0.017578125,
          0.0087890625,
          0.00439453125,
          0.002197265625
        ],
        matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        tileSize: 512
      })
    });

    var layer = new ol.layer.Tile({ source: source });
    return layer;
  };

  update();

  // Slider values are in 'days from present'.
  document.querySelector('#day-slider')
    .addEventListener('change', function (event) {
      // Add the slider value (effectively subracting) to today's
      // date.
      var newDay = new Date(today.getTime());
      newDay.setUTCDate(today.getUTCDate() +
        Number.parseInt(event.target.value));
      day = newDay;
      update();
    });
};