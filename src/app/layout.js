import SideNav from "@/components/SideNav";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-gray-100 flex overflow-hidden">
        <SideNav />
        {children}
        
      </body>
    </html>
  );
}
