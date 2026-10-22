import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({ subsets:["latin"], variable:"--font-display", weight:["500","600","700"], style:["normal","italic"] });
const sans = Manrope({ subsets:["latin"], variable:"--font-sans" });
export const metadata: Metadata = { title:"BABI Growth Marketing | Abidjan", description:"Creative marketing studio in Abidjan. Create. Connect. Grow." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html> }

