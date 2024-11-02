import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/app/Provider"; // Ensure Provider is capitalized as it's a component

export const metadata: Metadata = {
  title: "Api-Hub",
  description: "Generate your own API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
