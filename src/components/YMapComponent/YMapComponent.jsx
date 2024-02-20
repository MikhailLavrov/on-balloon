import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YMapComponent = () => {
  const defaultState = {
    center: [59.568410, 30.122892],
    zoom: 10,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} height={257}>
        <Placemark geometry={[59.568410, 30.122892]} />
      </Map>
    </YMaps>
  );
}
