import clsx from "clsx";
import type { ReactNode } from "react";

const LABEL_GRADIENT =
  "linear-gradient(169.20773662156353deg, rgb(36, 181, 248) 4.6217%, rgb(85, 33, 254) 148.53%)";

/** Staggered fade-up applied to label / heading / body when `reveal` is on.
 * Uses the built-in `transition` utility (covers transform + opacity); an
 * arbitrary `transition-[transform,opacity]` value fails to compile in v4. */
const REVEAL_BASE = "transition duration-500 ease-out will-change-transform";

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
  /**
   * When set, label/heading/body fade + slide up in sequence once `reveal`
   * flips to true (drive it from a scroll-into-view trigger). Omit to keep the
   * header static, which is the default for every other section.
   */
  reveal?: boolean;
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
  reveal,
}: SectionHeaderProps) {
  const isMobile = variant === "mobile";
  const isXl = size === "xl";

  // When `reveal` is undefined the header stays static. Once provided, each
  // line carries the transition + a staggered delay and toggles hidden/visible.
  const animate = reveal !== undefined;
  const revealLine = (delayMs: number, hiddenY: string) =>
    animate
      ? {
          className: clsx(REVEAL_BASE, reveal ? "translate-y-0 opacity-100" : `${hiddenY} opacity-0`),
          style: { transitionDelay: `${delayMs}ms` },
        }
      : { className: undefined, style: undefined };

  const labelReveal = revealLine(0, "translate-y-3");
  const headingReveal = revealLine(80, "translate-y-4");
  const bodyReveal = revealLine(160, "translate-y-4");

  return (
    <div
      className={clsx(
        "flex w-full max-w-[768px] flex-col items-start gap-[20px]",
        className,
      )}
    >
      <div className="flex w-full flex-col items-start gap-[12px] font-['Satoshi:Medium',sans-serif] not-italic">
        <p
          className={clsx("bg-clip-text text-[16px] leading-[24px] text-transparent", labelReveal.className)}
          style={{ backgroundImage: LABEL_GRADIENT, ...labelReveal.style }}
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
            headingReveal.className,
          )}
          style={headingReveal.style}
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
          bodyReveal.className,
        )}
        style={bodyReveal.style}
      >
        {body}
      </p>
    </div>
  );
}
