import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kushagra Jadiya — Software Development Engineer",
  description:
    "Portfolio of Kushagra Jadiya, focused on backend and AI-integrated systems.",
  openGraph: {
    title: "Kushagra Jadiya — Software Development Engineer",
    description:
      "Backend, AI-integrated systems, APIs, security and infrastructure.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ef",
  colorScheme: "light dark",
};

const themeScript = `(() => { try { const saved = localStorage.getItem('kj-theme'); const dark = saved ? saved === 'dark' : false; document.documentElement.classList.toggle('dark', dark); } catch {} })()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
