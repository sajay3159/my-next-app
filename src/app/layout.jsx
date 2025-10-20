import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <header
            style={{
              padding: "1rem",
              background: "#000000ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Pngtree.png"
                alt="Logo"
                width={40}
                height={40}
                style={{ marginRight: "0.5rem", borderRadius: "4px" }}
              />
              <h1 style={{ color: "#fff", fontSize: "1.5rem", margin: 0 }}>
                Product Store
              </h1>
            </div>
            <nav>
              <Link href="/" style={{ marginRight: "1rem" }}>
                Home
              </Link>
              <Link href="/products">Products</Link>
            </nav>
          </header>
          {children}
          <footer
            style={{
              padding: "1rem",
              background: "#000000ff",
              textAlign: "center",
            }}
          >
            <p>© 2025 My Product Store — All rights reserved.</p>
          </footer>
        </Provider>
      </body>
    </html>
  );
}
