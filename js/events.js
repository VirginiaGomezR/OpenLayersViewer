import {query, setLocalStorageData} from './helpers';
import {defaultStyle, strokeStyle} from './vectorLayerStyles';
import {vectorLayer, overlay, attribution, map} from './openLayers';
import keys from './conf/keysLocalStorage';
import labelStrings from './conf/labelStrings';

//Funcion colapsable atributo
function onResize(e) {
  const small = map.getSize()[0] < 600;
  attribution.setCollapsible(small);
  attribution.setCollapsed(small);
}

//Funcion cambio de estilo Stroke
function strokeChange (e) {
  const labelCheckbox = query('#js-toggle');
    if(this.checked) {
      vectorLayer.setStyle(strokeStyle);
      labelCheckbox.innerText = labelStrings.labelToggleStyleB;
    } else {
      vectorLayer.setStyle(defaultStyle);
      labelCheckbox.innerText = labelStrings.labelToggleStyleA;
    }
  setLocalStorageData(keys.toggle, this.checked);
};
  
//Funcion hover mouse
function onMouseMove(e) {
  const coordinate = e.coordinate;
  const pixel = map.getPixelFromCoordinate(coordinate);
  const popup = query('#popup');
  const showText = query('#js-text-popup');
  let isWater = true;  
  
  map.forEachFeatureAtPixel(pixel, function(feature) {
    isWater = false;
    const text = feature.get('name') + '<br>'+ feature.get('continent');
    popup.classList.remove('hidden');
    showText.innerHTML = text;
    overlay.setPosition(coordinate);
  });

  if(isWater === true) {
    popup.classList.add('hidden');
  }
}

export {onResize, strokeChange, onMouseMove};