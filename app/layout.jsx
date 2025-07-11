
import "@/styles/globals.css";
import Navbar from "@/components/Header/Navbar";

export const metadata = {
  title: "Nguyen Portfolio",
  description: "Welcome to Nuwen Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
