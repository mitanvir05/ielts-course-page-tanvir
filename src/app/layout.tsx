import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IELTS Course by Munzereen Shahid",
  description: "Complete IELTS preparation course.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-gray-50`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
