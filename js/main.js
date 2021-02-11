import 'ol/ol.css';
import {vectorLayer, overlay, map} from './openLayers';
import {defaultStyle, strokeStyle} from './vectorLayerStyles';
import {query, getLocalStorageData} from './helpers';
import {onResize, strokeChange, onMouseMove} from './events';
import keys from './conf/keysLocalStorage';
import labelStrings from './conf/labelStrings';

//Set checkbox value
const checkLocalStorageToggle = () => {
  const checkbox = query('#js-checkbox');
  const labelCheckbox = query('#js-toggle');
  const checkboxValueLocalStorage = getLocalStorageData(keys.toggle) == 'true';
  
  if(checkboxValueLocalStorage === null || checkboxValueLocalStorage === false){
    vectorLayer.setStyle(defaultStyle);
    labelCheckbox.innerText = labelStrings.labelToggleStyleA;
  } else { 
    vectorLayer.setStyle(strokeStyle);
    labelCheckbox.innerText = labelStrings.labelToggleStyleB;
  }
  checkbox.checked = checkboxValueLocalStorage; 
}
checkLocalStorageToggle();

/*Eventos*/

//Evento atributo colapsable
window.addEventListener('resize', onResize);

//Evento de toggle
const checkbox = query('#js-checkbox');
checkbox.addEventListener('change', strokeChange);

//Evento de hover mouse
map.on('pointermove', onMouseMove);
map.addOverlay(overlay);