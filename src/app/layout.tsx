import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MathToWord Products",
  description:
    "Explore all the AI-powered tools built under the MathToWord platform — from document conversion to math utilities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
