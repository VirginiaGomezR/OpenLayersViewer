import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Overlay from 'ol/Overlay';
import VectorSource from 'ol/source/Vector';
import {Attribution, ScaleLine, defaults as defaultControls} from 'ol/control';
import Data from '../data/countries.geojson';
import {query} from './helpers';

//Capa base
const baseLayer = new TileLayer ({
    source: new OSM(),
});
  
//Capa vectorial
const vectorLayer = new VectorLayer({
    source: new VectorSource({
      url: Data,
      format: new GeoJSON(),
    })
});

//Overlay
const overlay = new Overlay({
  element: query('#popup')
});

const attribution = new Attribution({collapsible: false});


//Ventana Mapa

const map = new Map({
  controls: defaultControls({attribution: false}).extend([new ScaleLine(), attribution]),
  target: 'map',
  layers: [
    baseLayer, vectorLayer
  ],
  view: new View({
    center: [0, 0],
    projection:'EPSG:3857',
    zoom: 2
  })
});

export {baseLayer, vectorLayer, overlay, attribution, map};
  