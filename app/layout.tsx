import type { Metadata } from "next";
import "./globals.css";
import { EnquiryProvider } from "@/components/school/enquiry/EnquiryContext";
import EnquiryDialog from "@/components/school/enquiry/EnquiryDialog";

export const metadata: Metadata = {
  title: "Karnataka College of Management (KCM) | Best MBA College in Bangalore | Admissions 2026",
  description:
    "Karnataka College of Management (KCM) Bangalore, established under Karnataka Education Trust (KET). Approved by AICTE, affiliated to Bengaluru City University. Offering industry-integrated MBA with 100% placement support, international study tours, and modern campus infrastructure.",
  keywords: [
    "KCM",
    "Karnataka College of Management",
    "Best MBA College in Bangalore",
    "Top MBA Colleges in Karnataka",
    "MBA Admissions Bangalore 2026",
    "Karnataka Education Trust",
    "MBA in Marketing",
    "MBA in Finance",
    "MBA in Human Resource",
    "MBA in Business Analytics"
  ],
  icons: {
    icon: "/assets/kcm/Kcm_Logo.png",
    shortcut: "/assets/kcm/Kcm_Logo.png",
    apple: "/assets/kcm/Kcm_Logo.png",
  },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
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
