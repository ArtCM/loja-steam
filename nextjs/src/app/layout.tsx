import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../public/assets/css/globals.css"
import "../../public/assets/css/style.css"

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Loja da Steam",
  description: "Loja de skins de cs da Steam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
