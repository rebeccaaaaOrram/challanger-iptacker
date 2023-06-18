import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useIpTracker } from "@/hooks/useIpTracker";

export function Map() {
  const { zoom, customIcon, markerPosition } = useIpTracker();

  // Conditionally render the map only in the browser environment
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {markerPosition && (
        <MapContainer
          className="mt-[-57px] z-0"
          center={markerPosition}
          zoom={zoom}
          style={{ height: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={markerPosition}
            icon={customIcon}
            autoPanOnFocus={true}
            autoPanSpeed={1000}
          />
        </MapContainer>
      )}
    </div>
  );
}
