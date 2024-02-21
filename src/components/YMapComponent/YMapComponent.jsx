import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YMapComponent = () => {
  const defaultState = {
    center: [59.553954, 30.104746],
    zoom: 10,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} height={257}>
        <Placemark geometry={[59.553954, 30.104746]} />
      </Map>
    </YMaps>
  );
}
