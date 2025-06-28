import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner"; // ✅ Import this
import { inter } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "CineScope Movies Database",
  description: "Find your favorite movie ratings and recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader color="#1dd1a1" speed={400} crawlSpeed={400} />
        {children}
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
