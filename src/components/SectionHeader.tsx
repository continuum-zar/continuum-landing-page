import clsx from "clsx";
import type { ReactNode } from "react";

const LABEL_GRADIENT =
  "linear-gradient(169.20773662156353deg, rgb(36, 181, 248) 4.6217%, rgb(85, 33, 254) 148.53%)";

export type SectionHeaderProps = {
  /** Small gradient eyebrow label, e.g. "Security & Compliance". */
  label: string;
  /** Main heading. Pass JSX (with <br/>) to control line breaks. */
  heading: ReactNode;
  /** Supporting paragraph. */
  body: string;
  variant: "desktop" | "mobile";
  /** "xl" = 62px statement headline (Access control); "lg" = 36px section heading. */
  size?: "lg" | "xl";
  headingId?: string;
  className?: string;
};

/**
 * Shared landing section header: gradient eyebrow + Satoshi heading + muted body.
 * Matches the eyebrow treatment used in ContinuumAiFeatures. Left-aligned, capped at 768px.
 */
export default function SectionHeader({
  label,
  heading,
  body,
  variant,
  size = "lg",
  headingId,
  className,
}: SectionHeaderProps) {
  const isMobile = variant === "mobile";
  const isXl = size === "xl";

  return (
    <div
      className={clsx(
        "flex w-full max-w-[768px] flex-col items-start gap-[20px]",
        className,
      )}
    >
      <div className="flex w-full flex-col items-start gap-[12px] font-['Satoshi:Medium',sans-serif] not-italic">
        <p
          className="bg-clip-text text-[16px] leading-[24px] text-transparent"
          style={{ backgroundImage: LABEL_GRADIENT }}
        >
          {label}
        </p>
        <h2
          id={headingId}
          className={clsx(
            "w-full font-['Satoshi:Medium',sans-serif] text-[#101828]",
            isXl
              ? isMobile
                ? "text-[32px] leading-[1.08] tracking-[-0.64px]"
                : "text-[62px] leading-[1.04] tracking-[-1.24px]"
              : isMobile
                ? "text-[28px] leading-[36px] tracking-[-0.56px]"
                : "text-[36px] leading-[44px] tracking-[-0.72px]",
          )}
        >
          {heading}
        </h2>
      </div>
      <p
        className={clsx(
          "w-full text-[#667085]",
          isXl
            ? isMobile
              ? "font-['Satoshi:Medium',sans-serif] text-[16px] leading-[24px]"
              : "font-['Satoshi:Medium',sans-serif] text-[24px] leading-[1.35]"
            : isMobile
              ? "font-['Satoshi:Regular',sans-serif] text-[16px] leading-[24px]"
              : "font-['Satoshi:Regular',sans-serif] text-[20px] leading-[30px]",
        )}
      >
        {body}
      </p>
    </div>
  );
}
