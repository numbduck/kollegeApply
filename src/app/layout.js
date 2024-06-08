import { MantineProvider } from '@mantine/core';
import { Inter, Roboto } from "next/font/google";
import Header from './(application)/common/header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "KollegeApply",
  description: "Information about educational institutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}><MantineProvider><Header/>{children}</MantineProvider></body>
    </html>
  );
}
