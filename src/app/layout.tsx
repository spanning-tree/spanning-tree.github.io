import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
    title: "Zekai Li",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-black font-mono text-green-500 antialiased selection:bg-green-900 selection:text-white">
                <div className="scanline"></div>
                <Navbar />
                <main className="min-h-screen p-4 md:p-8">{children}</main>
            </body>
        </html>
    );
}
