import { Metadata } from "next";
import React from "react";
import "./globals.css";
import MenuLateral from "./components/menu-lateral/menu-lateral";

export const metadata: Metadata = {
  title: "Gabriela Fraga",
  description: "Página de currículo profissional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full">
        <div className="min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-primary text-white flex flex-col">
            <MenuLateral />
          </div>
          <div className="w-full md:w-3/4 flex flex-col" id="root">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
