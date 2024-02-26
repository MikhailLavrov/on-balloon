import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YMapComponent = () => {
  const defaultState = {
    center: [59.553954, 30.104746],
    zoom: 10,
  };

  // Вставьте ваш API ключ вместо 'your_api_key'
  const apiKey = '20797a51-973a-44bf-b1a3-5e254e56e40a&lang=ru_RU';

  return (
    <YMaps apiKey={apiKey}>
      <Map defaultState={defaultState} height={257}>
        <Placemark geometry={[59.553954, 30.104746]} />
      </Map>
    </YMaps>
  );
}


// apikey=20797a51-973a-44bf-b1a3-5e254e56e40a&lang=ru_RU
