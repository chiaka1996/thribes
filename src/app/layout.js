import { Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-outfit",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./utils/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./utils/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
     {
      path: "./utils/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata = {
  title: "Thribe Community",
  description: "Thribe community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${outfit.variable} ${clashDisplay.variable} font-[400] antialiased`}> 
      <body 
        className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
