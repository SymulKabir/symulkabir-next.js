import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/global.scss'
import CustomScript from "@/shared/scripts/script"
import { ToastContainer } from "react-toastify";
import Loading from '@/components/Loading'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Symul Kabir | Full-Stack Developer & DevOps Enthusiast ",
  description:
    "Explore the portfolio of Symul Kabir, a passionate Full-Stack Developer and DevOps engineer specializing in modern web technologies, scalable backend systems, and efficient CI/CD pipelines.",
  openGraph: {
    images: [{
      url: "/images/website-preview.jpeg",
      alt: "Symul Kabir's Portfolio Preview",
      type: "image/png",
      width: 1260,
      height: 800
    }]
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <CustomScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <ToastContainer />
      </body>
    </html>
  );
}
