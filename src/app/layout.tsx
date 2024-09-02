import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

const libre_franklin = Raleway({
  subsets: ['latin'],
  weight: "variable"
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
