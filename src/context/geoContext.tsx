'use client'
import dynamic from "next/dynamic";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import L from "leaflet";

interface IpTrackerData {
  value: string;
  setValue: (value: string) => void;
  data: any;
  setData: (data: any) => void;
  handleSubmit: (e: any) => void;
  zoom: number;
  customIcon: L.Icon<L.IconOptions>;
  markerPosition: any;
  newCoords: number[];
  setNewCoords: (newCoords: number[]) => void;
  updatedMarkerPosition?: any;
  newMarkerPosition?: any;
}

interface IpTrackerProps {
  children: ReactNode;
}

export const IpTrackerContext = createContext<IpTrackerData>(null!);

const MapContainer = dynamic(() => import("react-leaflet").then((module) => module.MapContainer), {
  ssr: false, // Ensure the component is only loaded in the browser
});

const TileLayer = dynamic(() => import("react-leaflet").then((module) => module.TileLayer), {
  ssr: false,
});

const Marker = dynamic(() => import("react-leaflet").then((module) => module.Marker), {
  ssr: false,
});


async function getData(value: string) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${value}`
  );
  const data = await res.json();
  return data;
}

export function IpTrackerProvider({ children }: IpTrackerProps) {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>();
  const [defaultCoords, setDefaultCoords] = useState<number[]>([]);
  const [newCoords, setNewCoords] = useState<number[]>([]);
  const [newMarkerPosition, setNewMarkerPosition] = useState<any>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await getData(value);
    setData(res);
    setNewCoords([res.location.lat, res.location.lng]);
  };

  const zoom = 50;
  const customIcon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
  });

  useEffect(() => {
    if (newCoords.length > 0) {
      setDefaultCoords(newCoords); // Update the default coordinates with the new coordinates received
      console.log("newCoords", newCoords);
    } else {
      // Get latitude and longitude coordinates using the geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setDefaultCoords([latitude, longitude]);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [newCoords]);

  const markerPosition = L.latLng(defaultCoords[0], defaultCoords[1]);

  useEffect(() => {
    const updatedMarkerPosition = L.latLng(defaultCoords[0], defaultCoords[1]);
    setNewMarkerPosition(updatedMarkerPosition);
  }, [defaultCoords]);

  return (
    <IpTrackerContext.Provider
      value={{
        value,
        setValue,
        data,
        setData,
        handleSubmit,
        zoom,
        customIcon,
        markerPosition,
        newCoords,
        setNewCoords,
        newMarkerPosition,
      }}
    >
      {children}
    </IpTrackerContext.Provider>
  );
}
