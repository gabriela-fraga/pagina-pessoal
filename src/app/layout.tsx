import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";
import React from "react";
import "./index.scss";
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
    <html suppressHydrationWarning>
      <body>
        <div className="row min-vh-100 flex-md-row flex-column">
          <div className="col-12 col-md-3 h-md-100">
            <MenuLateral></MenuLateral>
          </div>
          <div className="col-12 col-md-7 h-md-100" id="root">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
