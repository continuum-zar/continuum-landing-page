import clsx from "clsx";
import { scrollToWaitlist } from "@/lib/scrollToWaitlist";

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
      <button
        type="button"
        onClick={scrollToWaitlist}
        className="relative flex h-[40px] cursor-pointer items-center justify-center gap-[6px] rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[#24b5f8] px-[16px] py-[8px] transition-colors hover:bg-[#297ccb] shadow-[0px_12px_3px_0px_rgba(45,154,249,0),0px_8px_3px_0px_rgba(45,154,249,0.03),0px_4px_3px_0px_rgba(45,154,249,0.11),0px_2px_2px_0px_rgba(45,154,249,0.19),0px_0px_1px_0px_rgba(45,154,249,0.21)]"
      >
        <span className="whitespace-nowrap font-['Satoshi:Bold',sans-serif] text-[14px] text-white">
          Join Waitlist
        </span>
      </button>
    </div>
  );
}

/** Desktop Michelangelo-hands scene, positioned within the 1512×949 design frame. */
function DesktopHands() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 h-[949px] w-[1512px] -translate-x-1/2"
    >
      {/* Human hand — reaches up from the lower left */}
      <div className="absolute left-[-110px] top-[314px] flex h-[856.456px] w-[927.704px] items-center justify-center">
        <div className="flex-none rotate-[75deg]">
          <div className="h-[778.761px] w-[678px] overflow-hidden">
            <img alt="" className="block size-full object-cover" src={HAND_HUMAN} />
          </div>
        </div>
      </div>
      {/* Robot hand — reaches in from the right */}
      <div className="absolute right-[-112.17px] top-[121px] flex h-[776.107px] w-[979.174px] items-center justify-center">
        <div className="flex-none rotate-[75deg] scale-y-[-1]">
          <div className="h-[860.181px] w-[573px] overflow-hidden">
            <img alt="" className="block size-full object-cover" src={HAND_ROBOT} />
          </div>
        </div>
      </div>
      {/* Bottom fades that feather the hands into the page background */}
      <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-b from-[rgba(249,250,251,0)] to-[#f9fafb]" />
    </div>
  );
}

/** Mobile hands scene — scaled composition with the two hands meeting near center. */
function MobileHands() {
  return (
    <div aria-hidden className="pointer-events-none relative h-[260px] w-full overflow-hidden">
      <div className="absolute left-[-70px] top-[70px] flex h-[300px] w-[320px] items-center justify-center">
        <div className="flex-none rotate-[75deg]">
          <div className="h-[270px] w-[235px] overflow-hidden">
            <img alt="" className="block size-full object-cover" src={HAND_HUMAN} />
          </div>
        </div>
      </div>
      <div className="absolute right-[-60px] top-[-10px] flex h-[280px] w-[330px] items-center justify-center">
        <div className="flex-none rotate-[75deg] scale-y-[-1]">
          <div className="h-[300px] w-[200px] overflow-hidden">
            <img alt="" className="block size-full object-cover" src={HAND_ROBOT} />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-b from-[rgba(249,250,251,0)] to-[#f9fafb]" />
    </div>
  );
}

export type ContinuumAiHeroProps = {
  variant: "desktop" | "mobile";
  className?: string;
};

export default function ContinuumAiHero({ variant, className }: ContinuumAiHeroProps) {
  const isMobile = variant === "mobile";

  return (
    <section
      id="landing-continuum-ai"
      aria-labelledby="continuum-ai-heading"
      data-name="Continuum AI hero"
      className={clsx(
        "relative w-full overflow-hidden",
        isMobile
          ? "flex flex-col items-center gap-[24px] py-[24px]"
          : "h-[820px] py-[96px]",
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
      {isMobile ? <MobileHands /> : <DesktopHands />}
    </section>
  );
}
