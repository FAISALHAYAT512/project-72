import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobalTech Innovations",
  description: "Leading technology solutions for a connected world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-blue-700 text-white p-5 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🌍 GlobalTech Innovations</h1>
            <nav className="space-x-6">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
