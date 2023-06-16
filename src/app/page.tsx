"use client";
import Map from "@/components/Map";
import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";

export default function Home() {
  return (
    <>
      <Header />
      <Summary />
      <Map />
    </>
  );
}
