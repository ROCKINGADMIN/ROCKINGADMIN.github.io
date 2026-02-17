import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Wasim A. R. Shekh | DevOps Engineer",
  description: "Portfolio and Resume of Wasim A. R. Shekh, DevOps Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-slate-900 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
