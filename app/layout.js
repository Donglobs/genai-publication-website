import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GenAI Research Publication",
  description: "Research Publication Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">

  <Navbar />

  {children}

  <Footer />

</body>
    </html>
  );
}