import { Manrope} from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic"


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
    <html lang="en-GB" style={{transitionProperty: "none", marginRight: "0px"}}>
      <body className={manrope.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
