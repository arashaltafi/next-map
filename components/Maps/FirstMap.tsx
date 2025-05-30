"use client";

import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import NeshanMap, { NeshanMapRef } from "@neshan-maps-platform/react-openlayers"
import "@neshan-maps-platform/react-openlayers/dist/style.css"
import React, { useRef } from 'react'

export const FirstMap = () => {
  const mapRef = useRef<NeshanMapRef | null>(null)

  return (
    // <MapComponent
    //   options={{
    //     mapKey: "web.2b84e570f3fb49f3bd5c180e3b131ae2",
    //     mapType: MapTypes.neshanVector,
    //     center: { lng: 51.338076, lat: 35.699756 },
    //     zoom: 14,
    //     mapTypeControllerOptions: { show: false },
    //   }}
    //   className="w-full h-full max-h-[400px] relative min-h-[400px]"
    // />
    <NeshanMap
      className='w-full h-80'
      ref={mapRef}
      mapKey="web.2b84e570f3fb49f3bd5c180e3b131ae2"
      center={{ latitude: 35.7009447852995, longitude: 51.39116262864598 }}
      zoom={18}
      defaultType="neshan" //standard-night  ,  neshan  ,  osm-bright   ,  dreamy
      traffic={true}
      poi={true}
    />
  );
};
