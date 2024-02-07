import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/ProductContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eton Shirts",
  description: "Assignment for frontend role at Eton Shirts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ProductProvider>
  );
}
