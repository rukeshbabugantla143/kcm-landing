"use client";

import type { ReactNode, MouseEvent } from "react";
import { useEnquiry } from "./EnquiryContext";

type EnquiryTriggerProps = {
  className?: string;
  children?: ReactNode;
};

export default function EnquiryTrigger({
  className = "enquiry-trigger",
  children = "ENQUIRE NOW",
}: EnquiryTriggerProps) {
  const { openEnquiry } = useEnquiry();
  const isTextTrigger = typeof children === "string";

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    openEnquiry();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("school:open-enquiry", {
          detail: { trigger: event.currentTarget },
        }),
      );
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      data-open-enquiry="true"
    >
      {isTextTrigger ? (
        <>
          <span>{children}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </>
      ) : (
        children
      )}
    </button>
  );
}
