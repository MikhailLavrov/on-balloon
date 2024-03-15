import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YMapComponent = () => {
  const defaultState = {
    center: [59.553954, 30.104746],
    zoom: 10,
  };

  const apiKey = 'c1f44217-9f44-4e0e-878e-7b1b89f393a8';

  return (
    <YMaps query={{
      apikey: apiKey
    }}>
      <Map defaultState={defaultState} height={200}>
        <Placemark geometry={[59.553954, 30.104746]} />
      </Map>
    </YMaps>
  );
}


// apikey=20797a51-973a-44bf-b1a3-5e254e56e40a&lang=ru_RU
