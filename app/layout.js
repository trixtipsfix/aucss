import './globals.css'
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: 'AUCSS',
  description: 'Air University Cyber Security Society',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body>
        <div className="gradient"></div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
