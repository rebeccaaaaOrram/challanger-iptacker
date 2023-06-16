import { IpTrackerContext } from "./../context/geoContext";
import { useContext } from "react";

export function useIpTracker() {
  const context = useContext(IpTrackerContext);
  return context;
}
