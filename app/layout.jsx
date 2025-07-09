import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { headers } from "next/headers";
import NavBarComponent from "@/component/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gemini Ling",
  description: "Let's know more about me",
};

export default async function RootLayout({ children }) {
  // Get current pathname from headers (server-side)
  const headersList = headers();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My CV</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-50 to-violet-50 min-h-screen font-sans`}
      >
        <div className="min-h-screen flex flex-col  bg-violet-50 ">
          <NavBarComponent />

          {/* Main Content */}
          <main className="flex-1 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-violet-100 via-purple-50 to-violet-100 border-t border-violet-200 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-violet-600 text-sm">
                © 2025 Gemini Ling. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
