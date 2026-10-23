import type { Metadata } from "next";
import "./globals.css";
import { EnquiryProvider } from "@/components/school/enquiry/EnquiryContext";
import EnquiryDialog from "@/components/school/enquiry/EnquiryDialog";

export const metadata: Metadata = {
  title: "Karnataka Public School | Excellence in Education",
  description: "Karnataka Public School - Premium CBSE Education from Pre-KG to Class 10.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <EnquiryProvider>
          {children}
          <EnquiryDialog />
        </EnquiryProvider>
      </body>
    </html>
  );
}
