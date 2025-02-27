import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/admincomponents/header";
import { Sidebar } from "@/components/admincomponents/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white text-white border-r-2 ">
            <Sidebar />
          </aside>

          <div className="flex-1 flex flex-col">
            <header className="bg-white text-white p-4">
              <Header />
            </header>
            <main className="flex-1 p-6 bg-gray-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
