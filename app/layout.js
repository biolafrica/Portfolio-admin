import { Manrope} from "next/font/google";
import "./globals.css";
import LayoutBody from "./components/nav/layoutBody";



const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Abiodun Portfolio | Admin",
  description: "Abiodun Biobaku - Software Engineer ",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={manrope.className}>
        <LayoutBody>{children}</LayoutBody>
      </body>
    </html>
  );
}
