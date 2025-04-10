import 'bootstrap/dist/css/bootstrap.min.css';
import { Metadata } from "next";
import React from "react";
import '../index.scss';

export const metadata: Metadata = {
    title: 'Gabriela Fraga',
    description: 'Página de currículo profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"suppressHydrationWarning={true}>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
