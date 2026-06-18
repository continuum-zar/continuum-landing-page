import { useState } from "react";
import clsx from "clsx";
import SectionHeader from "@/components/SectionHeader";
import { ChevronRightIcon } from "@/components/LandingIcons";

const TABS = [
  "Security & Access Control",
  "Migration",
  "Scaleability & Pricing",
  "Getting Started",
];

type Faq = { question: string; answer?: string };

const FAQS: Faq[] = [
  { question: "Is Continuum POPIA compliant?" },
  { question: "Who can see my team's sprint board?" },
  { question: "Can I control what each team member sees and accesses?" },
  { question: "Where is my data hosted, and who at Continuum can access it?" },
];

export type FaqSectionProps = {
  variant: "desktop" | "mobile";
  className?: string;
};

export default function FaqSection({ variant, className }: FaqSectionProps) {
  const isMobile = variant === "mobile";
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      data-name="FAQ"
      className={clsx(
        "flex w-full flex-col items-center",
        isMobile ? "gap-[40px]" : "py-[96px]",
        className,
      )}
    >
      <div
        className={clsx(
          "flex w-full flex-col",
          isMobile ? "gap-[40px]" : "max-w-[1164px] gap-[64px] px-[32px]",
        )}
      >
        <SectionHeader
          variant={variant}
          size="lg"
          label="Security & Compliance"
          heading={
            <>
              Built for teams that can't afford
              <br />
              to get security wrong.
            </>
          }
          body="POPIA compliance isn't a checkbox added after the fact. It's built into how Continuum stores, logs, and manages your data” so your legal team has what they need before they ask."
        />

        <div className="flex w-full flex-col gap-[24px]">
          {/* Category tabs */}
          <div className={clsx("flex gap-[8px]", isMobile && "overflow-x-auto pb-1")}>
            {TABS.map((tab, i) => {
              const active = i === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={clsx(
                    "flex h-[40px] shrink-0 items-center rounded-[8px] border-l-[2px] bg-[#edf0f3] px-[16px] py-[8px] font-['Satoshi:Medium',sans-serif] text-[14px] transition-colors",
                    active ? "border-[#cfecff] text-[#043e59]" : "border-transparent text-[#606d76]",
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Accordion */}
          <div className="flex w-full flex-col overflow-hidden rounded-[24px] border border-[#ebedee]">
            {FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.question} className={clsx(i > 0 && "border-t border-[#ebedee]")}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center gap-[8px] px-[24px] py-[16px] text-left"
                  >
                    <ChevronRightIcon
                      className={clsx("shrink-0 text-[#606d76] transition-transform", open && "rotate-90")}
                      size={24}
                    />
                    <span className="font-['Satoshi:Regular',sans-serif] text-[16px] leading-[26px] text-[#151515]">
                      {faq.question}
                    </span>
                  </button>
                  {open && faq.answer && (
                    <p className="px-[24px] pb-[16px] pl-[56px] font-['Satoshi:Regular',sans-serif] text-[16px] leading-[26px] text-[#606d76]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
