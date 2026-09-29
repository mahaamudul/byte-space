
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace",
  icons: {
    icon: "/assets/nav/logo%20.png",
  },
};




export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      
    >
      <body className="">{children}</body>
    </html>
  );
}
