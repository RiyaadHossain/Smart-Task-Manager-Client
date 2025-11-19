import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Task Manager",
  description: "Manage your tasks intelligently with Smart Task Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">{children}</body>
    </html>
  );
}
