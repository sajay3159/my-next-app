import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <header
          style={{
            padding: "1rem",
            background: "#000000ff",
            textAlign: "center",
          }}
        >
          <h1>Product Store</h1>
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
      </body>
    </html>
  );
}
