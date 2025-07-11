import "@/styles/globals.css";

export const metadata = {
  title: "Nguyen Portfolio",
  description: "Welcome to Nuwen Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
