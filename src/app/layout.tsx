import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hype-Market",
  description:
    "Hype-Market - Shop the Latest Hype and Streetwear Trends. Discover exclusive drops, limited editions, and the most hyped products in the skena. Stay ahead of the trend with fashion, tech, and lifestyle essentials. Shop now and join the hype revolution!",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <div id="backdrop"></div>
      </body>
    </html>
  );
}
