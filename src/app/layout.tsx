import { Metadata } from "next";
import React from "react";
import "./globals.css";
import MainLayout from "./main-layout/main-layout";

export const metadata: Metadata = {
  title: "Gabriela Fraga",
  description: "Página de currículo profissional",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full" suppressHydrationWarning>
      <body className="h-full">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
