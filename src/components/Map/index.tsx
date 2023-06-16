import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useIpTracker } from "@/hooks/useIpTracker";

function Map() {
  const { zoom, customIcon, markerPosition } = useIpTracker();

  return (
    <>
      {markerPosition && (
        <MapContainer
          className="mt-[-57px] z-0"
          style={{ height: "100vh", width: "100%" }}
          center={markerPosition}
          zoom={zoom}
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
    </>
  );
}

export default Map;
