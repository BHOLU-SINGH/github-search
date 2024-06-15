import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub User Profile Search and Viewer - Next.js Project",
  keywords:
    "Next.js, GitHub, User Profile, API, Tailwind CSS, React, JavaScript, Web Development, Open-Source, Portfolio, Social Media, Followers, Following, Repositories, User Information",
  description:
    "Explore GitHub user profiles, view their social media, followers, following, and repositories with this powerful Next.js application.",
  robots: "index, follow",
  favicon: "favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Bholu Singh" />
        <meta name="googlebot" content="index, follow" />
        <link rel="favicon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
