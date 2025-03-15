"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Map component with SSR disabled
const Map = dynamic(() => import("../components/Map"), { ssr: false });

// Map modes
const MAP_MODES = {
  VIEW: "view",
  ADD_MARKERS: "add_markers",
  SET_MARKER: "set_marker",
} as const;

type MapMode = (typeof MAP_MODES)[keyof typeof MAP_MODES];

const HomePage = () => {
  const [mode, setMode] = useState<MapMode>(MAP_MODES.VIEW);

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 bg-gray-100 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded ${mode === MAP_MODES.VIEW ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setMode(MAP_MODES.VIEW)}
        >
          View Mode
        </button>
        <button
          className={`px-4 py-2 rounded ${mode === MAP_MODES.ADD_MARKERS ? "bg-green-500 text-white" : "bg-gray-300"}`}
          onClick={() => setMode(MAP_MODES.ADD_MARKERS)}
        >
          Add Markers
        </button>
        <button
          className={`px-4 py-2 rounded ${mode === MAP_MODES.SET_MARKER ? "bg-red-500 text-white" : "bg-gray-300"}`}
          onClick={() => setMode(MAP_MODES.SET_MARKER)}
        >
          Set Marker & Show LatLng
        </button>
      </div>
      <div className="flex-1">
        <Map mode={mode} />
      </div>
    </div>
  );
};

export default HomePage;