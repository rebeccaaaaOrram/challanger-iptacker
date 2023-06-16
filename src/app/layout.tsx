import { IpTrackerProvider } from "@/context/geoContext";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Ip Address Tracker",
  description: "Track any ip address or domain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>
        <IpTrackerProvider>{children}</IpTrackerProvider>
      </body>
    </html>
  );
}
