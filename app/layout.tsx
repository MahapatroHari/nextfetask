import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Front end task",
  description: "This is a front end task for skill developm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
