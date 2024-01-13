import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: "Energy Analytics",
  description: "Website of energy analytics",
};

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Thin.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/Roboto-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Roboto-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Roboto-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Roboto-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
