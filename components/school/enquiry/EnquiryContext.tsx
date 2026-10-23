"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type EnquiryContextType = {
  isOpen: boolean;
  openEnquiry: () => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextType>({
  isOpen: false,
  openEnquiry: () => {},
  closeEnquiry: () => {},
});

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = () => setIsOpen(true);
  const closeEnquiry = () => setIsOpen(false);

  useEffect(() => {
    // Global fallback for any window events or direct method calls
    const handleOpenEvent = () => setIsOpen(true);
    const handleCloseEvent = () => setIsOpen(false);

    window.addEventListener("school:open-enquiry", handleOpenEvent);
    window.addEventListener("school:close-enquiry", handleCloseEvent);

    // Global document click delegation for any [data-open-enquiry] element
    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("[data-open-enquiry]") ||
        target?.closest(".enquiry-nav-trigger") ||
        target?.closest(".admissions-primary") ||
        target?.closest(".apply-button") ||
        target?.closest(".enquiry-trigger")
      ) {
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleDocClick);

    return () => {
      window.removeEventListener("school:open-enquiry", handleOpenEvent);
      window.removeEventListener("school:close-enquiry", handleCloseEvent);
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  return (
    <EnquiryContext.Provider value={{ isOpen, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  return useContext(EnquiryContext);
}
