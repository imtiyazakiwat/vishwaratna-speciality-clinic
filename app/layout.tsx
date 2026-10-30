import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Dr. Adarsh | Vishwaratna Speciality Clinic – General Physician & Diagnostics", template: "%s | Vishwaratna Speciality Clinic" },
  description: "Expert general physician, laboratory testing, echocardiography and pulmonary function testing services in Belgaum by Dr. Adarsh at Vishwaratna Speciality Clinic.",
  metadataBase: new URL("https://vishwaratnaspeciality.in"),
  openGraph: { type: "website", locale: "en_IN", siteName: "Vishwaratna Speciality Clinic", title: "Dr. Adarsh – General Physician & Specialist", description: "Trusted general physician and diagnostic services in Belgaum, Karnataka." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
