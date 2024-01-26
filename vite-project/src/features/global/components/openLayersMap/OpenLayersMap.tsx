import React, { useEffect } from 'react';
import { MapContainer } from '../../styles/MapContainer';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

const OpenLayersMap = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: ['© OpenStreetMap contributors'],
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        center: [0, 51.509865], // מיקום של לונדון
        zoom: 2, // זום נוכחי
      }),
    });

    // יצירת מקור ושכבת וקטורים להוספת הסימון (Marker)
    const vectorSource = new VectorSource({
      features: [new Feature(new Point([11.0853, 34.7818]))], // הוסף סימון במקום הנבחר
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 8,
          fill: new Fill({ color: 'red' }),
          stroke: new Stroke({ color: 'white', width: 2 }),
        }),
      }),
    });

    map.addLayer(vectorLayer);

    return () => {
      map.dispose();
    };
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default OpenLayersMap;
