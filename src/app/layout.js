import { JetBrains_Mono, Silkscreen, Pixelify_Sans } from "next/font/google";
//import {JetBrains_Mono, Bytesized} from "next/font/google";
import "./globals.css";
import {NavBar} from "./components";

// const geistSans = JetBrains_Mono({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


//className={`${jetBrains.className} ${silkscreen.className} antialiased`}
export const silkscreen = Silkscreen({
    subsets:["latin"],
    weight:'400',
    variable:"--silkscreen",
})
export const jetbrains = JetBrains_Mono({
    subsets:["latin"],
    weight:['400', '700'],
    style:['normal','italic'],
    variable:"--jetbrains",
})
export const pixelify = Pixelify_Sans({
    subsets:["latin"],
    weight:["400", "700"],
    style:["normal"],
})

export const metadata = {
  title: "crashdotcom !!",
  description: "Personal site",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      
      <body >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
