"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define custom icon
const customIcon = new L.Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Map modes
const MAP_MODES = {
    VIEW: "view",
    ADD_MARKERS: "add_markers",
    SET_MARKER: "set_marker",
} as const;

type MapMode = (typeof MAP_MODES)[keyof typeof MAP_MODES];

// Map component
const Map = ({ mode }: { mode: MapMode }) => {
    const [markers, setMarkers] = useState<[number, number][]>([]);
    const [selectedMarker, setSelectedMarker] = useState<[number, number] | null>(null);

    // Handle map click events
    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;

                if (mode === MAP_MODES.ADD_MARKERS) {
                    setMarkers((prev) => [...prev, [lat, lng]]);
                } else if (mode === MAP_MODES.SET_MARKER) {
                    setSelectedMarker([lat, lng]);
                    alert(`Selected Marker: Latitude ${lat}, Longitude ${lng}`);
                }
            },
        });

        return null;
    };

    return (
        <MapContainer center={[35.701272919175025, 51.39058221021294]} zoom={16} className="h-full w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((pos, idx) => (
                <Marker key={idx} position={pos} icon={customIcon} />
            ))}
            {selectedMarker && <Marker position={selectedMarker} icon={customIcon} />}
            <MapClickHandler />
        </MapContainer>
    );
};

export default Map;