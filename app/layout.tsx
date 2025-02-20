import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armaand Consultancy",
  description: "Your Trusted partner in Cyber Security & Emerging technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
