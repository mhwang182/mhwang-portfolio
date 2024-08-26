import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Hi i'm Matt Hwang!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${libre_franklin.className} tracking-wider`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
