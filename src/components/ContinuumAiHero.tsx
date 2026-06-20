import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { scrollToWaitlist } from "@/lib/scrollToWaitlist";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/** The desktop hands design frame; mobile scales down from this. */
const FRAME_W = 1512;
const FRAME_H = 1150;

/** Desktop: px each hand is pulled toward centre at rest so the fingertips touch. */
const DESKTOP_PULL = 70;

/** Mobile tuning (frame-coordinate units, applied before the down-scale): */
// >1 enlarges the scene past the screen edges so the forearms enter from outside.
const MOBILE_FILL = 1.18;
// px each hand is pulled toward centre at rest so the fingertips actually touch.
const MOBILE_PULL = 70;
// how far the hands travel apart→together as you scroll (the "joint distance").
const MOBILE_DISTANCE = 300;

const HAND_HUMAN = "/landing/continuum-ai/hand-human.webp";
const HAND_ROBOT = "/landing/continuum-ai/hand-robot.webp";

function HeroButtons() {
  return (
    <div className="flex items-center gap-[8px]">
      <button
        type="button"
        onClick={scrollToWaitlist}
        className="relative flex h-[40px] cursor-pointer items-center justify-center gap-[6px] rounded-[8px] border border-[#ededed] bg-white px-[16px] py-[8px] shadow-[0px_5px_1px_0px_rgba(14,14,34,0),0px_3px_1px_0px_rgba(14,14,34,0.01),0px_2px_1px_0px_rgba(14,14,34,0.02),0px_1px_1px_0px_rgba(14,14,34,0.03)]"
      >
        <span className="whitespace-nowrap font-['Satoshi:Medium',sans-serif] text-[14px] text-[#0b191f]">
          Start building
        </span>
      </button>
      <PrimaryButton size="md" type="button" onClick={scrollToWaitlist}>
        Join Waitlist
      </PrimaryButton>
    </div>
  );
}

/** Eased gap-closing offset: hands start `distance`px apart, meet at progress 1. */
function handOffset(progress: number, distance: number) {
  // easeOutCubic for a settling-into-touch feel
  const eased = 1 - Math.pow(1 - progress, 3);
  return distance * (1 - eased);
}

/** The two Michelangelo hands at the desktop design coordinates (1512×1150 frame).
 * Both the desktop and mobile wrappers provide that same 1512×1150 positioning
 * context, so the mobile scene is a faithful, uniformly-scaled miniature — the
 * fit matches desktop exactly instead of being separately hand-tuned. */
/** Fade each forearm's hard edge into the page with a screen-space gradient on
 * the (un-rotated) outer wrapper: robot fades off the right, human off the left,
 * so both arms dissolve at the screen edge instead of showing a cut. */
const ROBOT_MASK = "linear-gradient(to right, #000 40%, transparent 82%)";
const HUMAN_MASK = "linear-gradient(to left, #000 40%, transparent 82%)";
/** Mobile: fade the human photo's hard wrist/forearm crop line. The photo is
 * rotated 75deg, so the straight crop edge reads as a diagonal line on screen.
 * Applying this fade in the rotated image's OWN coordinate space (on the inner
 * wrapper) makes the gradient run parallel to that crop edge, dissolving it
 * cleanly instead of leaving the diagonal seam a screen-space fade can't catch. */
const HUMAN_WRIST_MASK = "linear-gradient(to bottom, #000 62%, transparent 86%)";

function HandSprites({
  progress,
  pull = 0,
  distance = 220,
  mask = false,
  mobileMask = false,
}: {
  progress: number;
  /** px each hand is pulled toward centre at rest (closes the fingertip gap). */
  pull?: number;
  /** converge travel distance. */
  distance?: number;
  /** fade both forearms' hard outer edges into the background. */
  mask?: boolean;
  /** also fade the human hand's bottom wrist edge (mobile only). */
  mobileMask?: boolean;
}) {
  const gap = handOffset(progress, distance);
  const humanStyle: React.CSSProperties = { transform: `translateX(${pull - gap}px)` };
  const robotStyle: React.CSSProperties = { transform: `translateX(${gap - pull}px)` };
  const humanWristStyle: React.CSSProperties = {};
  if (mask) {
    humanStyle.maskImage = humanStyle.WebkitMaskImage = HUMAN_MASK;
    robotStyle.maskImage = robotStyle.WebkitMaskImage = ROBOT_MASK;
    if (mobileMask) {
      humanWristStyle.maskImage = humanWristStyle.WebkitMaskImage = HUMAN_WRIST_MASK;
    }
  }
  return (
    <>
      {/* Human hand — full image, padded so the rotated box edges do not slice finger/arm */}
      <div
        className="absolute left-[-336px] top-[120px] flex h-[1139px] w-[1379px] items-center justify-center will-change-transform"
        style={humanStyle}
      >
        <div className="flex-none rotate-[75deg]">
          <div className="box-content w-[678px] overflow-visible p-[90px]" style={humanWristStyle}>
            <img
              alt=""
              className="block h-[1017px] w-[678px] max-w-none"
              src={HAND_HUMAN}
            />
          </div>
        </div>
      </div>
      {/* Robot hand — reaches in from the right */}
      <div
        className="absolute right-[-112.17px] top-[85px] flex h-[776.107px] w-[979.174px] items-center justify-center will-change-transform"
        style={robotStyle}
      >
        <div className="flex-none rotate-[75deg] scale-y-[-1]">
          <div className="h-[860.181px] w-[573px] overflow-hidden">
            <img alt="" className="block size-full object-cover" src={HAND_ROBOT} />
          </div>
        </div>
      </div>
    </>
  );
}

/** Desktop Michelangelo-hands scene, positioned within the 1512×1150 design frame. */
function DesktopHands({ progress }: { progress: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 h-[1150px] w-[1512px] -translate-x-1/2"
    >
      <HandSprites progress={progress} pull={DESKTOP_PULL} mask />
    </div>
  );
}

/** Mobile hands scene — the exact desktop composition uniformly scaled to the
 * container width, so the fit mirrors desktop on any phone size. The inner frame
 * is laid out at full desktop size and shrunk with `scale(width / 1512)`; the
 * scale factor is measured in JS because CSS calc() can't derive a unitless
 * ratio from a length. `aspect-[1512/1150]` reserves the matching height. */
function MobileHands({ progress }: { progress: number }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  // scale + centring offsets so the (over-filled) scene stays centred while its
  // edges bleed off-screen. Measured in JS because CSS can't derive a unitless
  // scale ratio from a length.
  const [t, setT] = useState(() => {
    const s = (typeof window === "undefined" ? 400 : Math.min(window.innerWidth, 640)) / FRAME_W * MOBILE_FILL;
    return { scale: s, x: 0, y: 0 };
  });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const scale = (w / FRAME_W) * MOBILE_FILL;
      setT({ scale, x: (w - FRAME_W * scale) / 2, y: (h - FRAME_H * scale) / 2 });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none relative aspect-[1512/1150] w-full overflow-hidden"
    >
      <div
        className="absolute left-0 top-0 h-[1150px] w-[1512px] origin-top-left will-change-transform"
        style={{ transform: `translate(${t.x}px, ${t.y}px) scale(${t.scale})` }}
      >
        <HandSprites progress={progress} pull={MOBILE_PULL} distance={MOBILE_DISTANCE} mask mobileMask />
      </div>
    </div>
  );
}

export type ContinuumAiHeroProps = {
  variant: "desktop" | "mobile";
  className?: string;
};

export default function ContinuumAiHero({ variant, className }: ContinuumAiHeroProps) {
  const isMobile = variant === "mobile";
  // Anchor progress to where the fingertips meet (offset down from the section
  // top), so the converge animation plays while that area is actually on screen.
  const { ref, progress } = useScrollProgress<HTMLElement>({
    anchor: isMobile ? 340 : 520,
    start: 1,
    end: 0.55,
  });

  return (
    <section
      ref={ref}
      id="landing-continuum-ai"
      aria-labelledby="continuum-ai-heading"
      data-name="Continuum AI hero"
      className={clsx(
        "relative overflow-x-hidden",
        isMobile
          // Break out of the parent column's 16px side gutters so the hands run
          // edge-to-edge instead of being clipped at the inset, while the centred
          // text stays put.
          ? "-mx-4 w-[calc(100%+32px)] flex flex-col items-center gap-[24px] py-[24px]"
          : "w-full h-[1150px] pt-[96px] pb-[32px]",
        className,
      )}
    >
      <div
        className={clsx(
          "z-10 flex flex-col items-center text-center",
          isMobile ? "w-full gap-[16px] px-2" : "mx-auto w-[776px] gap-[16px]",
        )}
      >
        <h2
          id="continuum-ai-heading"
          className={clsx(
            "font-['Satoshi:Medium',sans-serif] text-[#0b191f]",
            isMobile ? "text-[32px] leading-[1.08]" : "text-[62px] leading-[1.04]",
          )}
        >
          Continuum AI
        </h2>
        <p
          className={clsx(
            "text-balance font-['Satoshi:Medium',sans-serif] text-[#667085]",
            isMobile ? "max-w-[320px] text-[16px] leading-[24px]" : "max-w-[538px] text-[24px] leading-[1.35]",
          )}
        >
          Quiet intelligence that handles the administrative heavy lifting, so you can focus on shipping.
        </p>
        <HeroButtons />
      </div>
      {isMobile ? <MobileHands progress={progress} /> : <DesktopHands progress={progress} />}
    </section>
  );
}
