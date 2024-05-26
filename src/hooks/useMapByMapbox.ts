import { Map, MapboxOptions } from 'mapbox-gl';
import React from 'react';

export default function useMapByMapbox({
  mapContainerId = 'map_container',
  defaultLatitude = 19.451119091716365,
  defaultLongitude = -99.15295438729619,
  levelZoom = 13,
}) {
  const [map, setMap] = React.useState<Map | null>(null);

  React.useEffect(() => {
    // Mapbox options
    const mapOptions: MapboxOptions = {
      accessToken: import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN,
      container: mapContainerId,
      style: import.meta.env.VITE_APP_MAPBOX_ACCESS_STYLE_MAP,
      center: [defaultLongitude, defaultLatitude],
      zoom: levelZoom,
    };

    // Creating map
    setMap(new Map(mapOptions));
  }, [defaultLongitude, defaultLatitude, levelZoom, mapContainerId, setMap]);

  return { map, setMap };
}
