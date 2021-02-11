import {Fill, Stroke, Style} from 'ol/style';

//Estilo A
const defaultStyle = new Style({
    fill: new Fill({
      color: 'rgba(163, 206, 178, 0.6)'
    }),
    stroke: new Stroke({
      color: '#08772f',
      width: 1
    })
});
  
//Estilo B
const strokeStyle = new Style({ 
    fill: new Fill({
      color: 'rgba(224, 222, 219, 0.6)'
    }),
    stroke: new Stroke({
      color: '#000',
      lineDash: [4, 8],
      width: 1,
    })
});

export {defaultStyle, strokeStyle};