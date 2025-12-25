import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Moahi | Abon Ikan Momfood",
  description:
    "Abon Ikan Moahi khas Sorowako dengan rasa gurih, tekstur lembut, dan tanpa pengawet.",
  openGraph: {
    title: "Moahi | Abon Ikan Momfood",
    description:
      "Abon Ikan Moahi khas Sorowako dengan rasa gurih, tekstur lembut, dan tanpa pengawet.",
    url: "https://moahi.vercel.app",
    siteName: "Moahi",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} bg-white text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}

