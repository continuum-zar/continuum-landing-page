import React, { useState, useRef, useEffect } from "react";
import svgPaths from "./landing-mobile-svg";
import { useInvoiceCarousel, InvoiceCardStrip } from "@/components/InvoiceCardCarousel";
import { postWaitlistSignup } from "@/api/waitlist";
import { scrollToWaitlist } from "@/lib/scrollToWaitlist";

/** Hero panel images under `public/landing/`. */
const imgWip = "/landing/83a55141b039a44613c6c93d2b20289d9128f6c1.png";
const imgWip1 = "/landing/4c18501708f09ce453837dc0d00f9f3592d6896b.png";
const imgWip2 = "/landing/d50090486565d73083f0d763cbc6c9cf009a03fe.png";

function MobileWaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setStatus("loading");
    try {
      await postWaitlistSignup(email.trim());
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <form
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
        <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Component 27">
          <div
            aria-hidden="true"
            className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_7.928px_17.177px_0px_rgba(26,59,84,0.1)]"
          />
          <label className="flex flex-row items-center size-full cursor-text">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              disabled={status === "loading" || status === "success"}
              className="w-full h-full bg-transparent border-0 outline-none rounded-[8px] px-[16px] py-[8px] font-['Satoshi:Medium',sans-serif] text-[14px] text-[#252014] placeholder:text-[#606d76] disabled:opacity-70"
            />
          </label>
        </div>
        <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0">
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="h-full relative rounded-[8px] shrink-0 border-0 cursor-pointer bg-[#24b5f8] hover:bg-[#297ccb] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            data-name="Component 7"
            style={{
              backgroundImage:
                "linear-gradient(164.237deg, rgb(36, 181, 248) 123.02%, rgb(85, 33, 254) 802.55%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_3px_0px_rgba(45,154,249,0),0px_8px_3px_0px_rgba(45,154,249,0.03),0px_4px_3px_0px_rgba(45,154,249,0.11),0px_2px_2px_0px_rgba(45,154,249,0.19),0px_0px_1px_0px_rgba(45,154,249,0.21)]"
            />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[6px] h-full items-center justify-center px-[16px] py-[8px] relative">
                <span className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                  {status === "loading" ? "Sending…" : "Join Waitlist"}
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
      {status === "success" ? (
        <p className="font-['Satoshi:Medium',sans-serif] text-[14px] text-[#0b191f] text-center w-full" role="status">
          Thanks — check your inbox for a confirmation.
        </p>
      ) : null}
      {status === "error" && errorMessage ? (
        <p className="font-['Satoshi:Medium',sans-serif] text-[14px] text-red-600 text-center w-full" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}

function Wip() {
  return (
    <div className="h-[107.539px] pointer-events-none relative rounded-[2.614px] w-[112.606px]" data-name="WIP">
      <div aria-hidden="true" className="absolute inset-0 rounded-[2.614px]">
        <div className="absolute inset-0 rounded-[2.614px]" style={{ backgroundImage: "linear-gradient(0deg, rgba(178, 230, 247, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%)" }} />
        <img alt="" className="absolute max-w-none object-cover rounded-[2.614px] size-full" src={imgWip} />
      </div>
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.288px] border-solid inset-0 rounded-[2.614px] shadow-[0px_33.067px_9.201px_0px_rgba(26,58,84,0),0px_21.278px_8.339px_0px_rgba(26,58,84,0.01),0px_11.789px_7.188px_0px_rgba(26,58,84,0.05),0px_5.176px_5.176px_0px_rgba(26,58,84,0.09),0px_1.438px_2.875px_0px_rgba(26,58,84,0.1)]" />
    </div>
  );
}

function Wip1() {
  return (
    <div className="h-[107.54px] pointer-events-none relative rounded-[1.473px] w-[112.607px]" data-name="WIP">
      <div aria-hidden="true" className="absolute inset-0 rounded-[1.473px]">
        <div className="absolute inset-0 rounded-[1.473px]" style={{ backgroundImage: "linear-gradient(0deg, rgba(178, 230, 247, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%)" }} />
        <img alt="" className="absolute max-w-none object-cover rounded-[1.473px] size-full" src={imgWip1} />
      </div>
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.288px] border-solid inset-0 rounded-[1.473px] shadow-[0px_33.067px_9.201px_0px_rgba(26,58,84,0),0px_21.278px_8.339px_0px_rgba(26,58,84,0.01),0px_11.789px_7.189px_0px_rgba(26,58,84,0.05),0px_5.176px_5.176px_0px_rgba(26,58,84,0.09),0px_1.438px_2.875px_0px_rgba(26,58,84,0.1)]" />
    </div>
  );
}

function Wip2() {
  return (
    <div className="-translate-x-1/2 absolute h-[137.179px] left-[calc(50%+0.11px)] pointer-events-none rounded-[2.005px] top-[6.65px] w-[211.216px]" data-name="WIP">
      <div aria-hidden="true" className="absolute inset-0 rounded-[2.005px]">
        <div className="absolute inset-0 rounded-[2.005px]" style={{ backgroundImage: "linear-gradient(0deg, rgba(178, 230, 247, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%)" }} />
        <img alt="" className="absolute max-w-none object-cover rounded-[2.005px] size-full" src={imgWip2} />
      </div>
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.367px] border-solid inset-0 rounded-[2.005px] shadow-[0px_79.78px_22.338px_0px_rgba(26,58,84,0),0px_51.059px_20.477px_0px_rgba(26,58,84,0.01),0px_28.721px_17.286px_0px_rgba(26,58,84,0.04),0px_12.765px_12.765px_0px_rgba(26,58,84,0.07),0px_3.191px_6.914px_0px_rgba(26,58,84,0.08)]" />
    </div>
  );
}

function Frame116() {
  return (
    <div className="-translate-x-1/2 absolute h-[166.802px] left-[calc(50%+0.27px)] top-[325px] w-[446.547px]">
      <div className="absolute flex h-[118.684px] items-center justify-center left-[34.8px] top-[27.39px] w-[123.196px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-5.98deg]">
          <Wip />
        </div>
      </div>
      <div className="absolute flex h-[118.687px] items-center justify-center left-[290.94px] top-[30.14px] w-[123.198px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.98deg]">
          <Wip1 />
        </div>
      </div>
      <Wip2 />
    </div>
  );
}

function Component2() {
  return (
    <button
      type="button"
      onClick={scrollToWaitlist}
      className="content-stretch flex cursor-pointer gap-[6px] h-[32px] items-center justify-center border-0 px-[16px] py-[8px] relative rounded-[8px] shrink-0"
      data-name="Component 7"
      style={{ backgroundImage: "linear-gradient(167.275deg, rgb(36, 181, 248) 123.02%, rgb(85, 33, 254) 802.55%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_3px_0px_rgba(45,154,249,0),0px_8px_3px_0px_rgba(45,154,249,0.03),0px_4px_3px_0px_rgba(45,154,249,0.11),0px_2px_2px_0px_rgba(45,154,249,0.19),0px_0px_1px_0px_rgba(45,154,249,0.21)]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Join Waitlist</p>
    </button>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Component2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[5px] top-[4px]">
      <p className="font-continuum leading-[24px] not-italic relative shrink-0 text-[#0b191f] text-[21.405px] text-center tracking-[-0.4281px] whitespace-nowrap">Continuum</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[314px] items-center justify-end left-[calc(50%-2px)] top-[28px] w-[374px]">
      <Frame25 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bottom-[52px] content-stretch flex flex-col items-center left-[101.3px] not-italic text-center top-auto whitespace-nowrap">
      <p className="font-continuum leading-[32.012px] relative shrink-0 text-[#0b191f] text-[28.551px] tracking-[-0.571px]">Continuum</p>
      <p className="font-['Sathu:Regular',sans-serif] leading-[normal] opacity-80 relative shrink-0 text-[#252014] text-[10.382px] tracking-[-0.1038px]">Time track with one click.</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="absolute left-[159px] top-[1794px] flex size-[8px] items-center justify-center">
      <span className="absolute inset-0 rounded-full bg-white border border-[#eb4335]" aria-hidden />
      <span className="relative size-[3px] shrink-0 rounded-none bg-[#eb4335]" aria-hidden />
    </div>
  );
}

function Component1() {
  return (
    <button
      type="button"
      onClick={scrollToWaitlist}
      className="-translate-x-1/2 absolute bg-white content-stretch flex cursor-pointer gap-[8px] h-[32px] items-center justify-center border-0 left-1/2 px-[16px] py-[8px] rounded-[8px] top-[273px]"
      data-name="Component 6"
    >
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_5px_1px_0px_rgba(14,14,34,0),0px_3px_1px_0px_rgba(14,14,34,0.01),0px_2px_1px_0px_rgba(14,14,34,0.02),0px_1px_1px_0px_rgba(14,14,34,0.03)]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0b191f] text-[14px] whitespace-nowrap">Join Waitlist</p>
    </button>
  );
}

function Frame115() {
  return (
    <div
      id="landing-waitlist"
      className="absolute content-stretch flex flex-col gap-[16px] items-center left-[16px] scroll-mt-28 top-[548px] w-[370px]"
    >
      <p className="font-['Satoshi:Medium',sans-serif] leading-[1.04] not-italic relative shrink-0 text-[#0b191f] text-[36px] text-center w-full">Join the Waitlist</p>
      <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#606d76] text-[14px] text-center w-full">We’re building a unified space for sprint planning, frictionless time tracking, and instant invoicing-but we need your help to perfect it. Join our exclusive Beta program to get early access, test our core features, and tell us exactly what your team needs to do its best deep work.</p>
      <MobileWaitlistForm />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[14px] items-center not-italic relative shrink-0 text-center">
      <p className="leading-[0] relative shrink-0 text-[#0b191f] text-[24.255px] tracking-[-0.7277px] whitespace-nowrap">
        <span className="leading-[1.04] tracking-[-0.48px]">{`Frictionless `}</span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[1.04] tracking-[-0.48px]">Time Logging</span>
      </p>
      <p className="leading-[16.457px] relative shrink-0 text-[#606d76] text-[14px] w-[278.511px]">Log hours without leaving your workflow. Track time directly on tasks or retroactively fill your week in seconds, not hours.</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[22.787px] items-center relative shrink-0 w-full">
      <Frame122 />
    </div>
  );
}

function MobileTag({ text }: { text: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[7.596px] items-center px-[10.128px] py-[5.064px] relative rounded-[62.665px] shrink-0">
      <div className="relative flex shrink-0 size-[10.128px] items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-white border border-[#eb4335]" aria-hidden />
        <span className="relative size-[4px] shrink-0 rounded-none bg-[#eb4335]" aria-hidden />
      </div>
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606d76] text-[8.862px] whitespace-nowrap">{text}</p>
    </div>
  );
}

const mobileTopRow = [
  "Create interactive prototypes",
  "Conduct usability testing",
  "Build user flow diagrams",
  "Design system components",
  "Write API documentation",
  "Review pull requests",
  "Run regression tests",
  "Refactor legacy modules",
];

const mobileBottomRow = [
  "Implement accessibility standards",
  "Create style guide documentation",
  "Ticket admin",
  "Sprint retrospective notes",
  "Deploy staging builds",
  "Update project roadmap",
  "Fix CI pipeline issues",
  "Audit dependency versions",
];

function Frame138() {
  return (
    <div className="absolute flex flex-col gap-[3.165px] left-0 top-[59.5px] w-full overflow-hidden">
      <div className="flex w-max gap-[3.165px]" style={{ animation: "marquee-left 25s linear infinite" }}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-[3.165px] shrink-0">
            {mobileTopRow.map((t) => <MobileTag key={t} text={t} />)}
          </div>
        ))}
      </div>
      <div className="flex w-max gap-[3.165px]" style={{ animation: "marquee-right 25s linear infinite" }}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-[3.165px] shrink-0">
            {mobileBottomRow.map((t) => <MobileTag key={t} text={t} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

function LucideChevronDown() {
  return (
    <div className="relative shrink-0 size-[12.342px]" data-name="lucide/chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3417 12.3417">
        <g id="lucide/chevron-down">
          <path d={svgPaths.p17450680} id="Vector" stroke="var(--stroke-0, #606D76)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.02847" />
        </g>
      </svg>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex gap-[1.543px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606d76] text-[9.256px] whitespace-nowrap">Select ticket</p>
      <LucideChevronDown />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0b191f] text-[10.799px] whitespace-nowrap">00:00:00</p>
      <Frame149 />
    </div>
  );
}

function LucideSquare() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.1px)] size-[29.117px] top-[calc(50%+0.32px)]" data-name="lucide/square">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.117 29.117">
        <g id="lucide/square">
          <rect fill="var(--fill-0, #EB4335)" height="29.117" rx="14.5585" width="29.117" />
          <path d={svgPaths.p1aa65c00} fill="var(--fill-0, #EB4335)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex gap-[6.824px] items-center justify-center p-[8.188px] relative rounded-[681.675px] shrink-0 size-[32.753px]" data-name="Component 139">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(235,67,53,0)] left-[calc(50%+0.26px)] rounded-[16.377px] size-[32.753px] top-[calc(50%+0.26px)]">
        <div aria-hidden="true" className="absolute border-[#8a8f91] border-[0.771px] border-solid inset-0 pointer-events-none rounded-[16.377px]" />
      </div>
      <LucideSquare />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6.171px] items-center pl-[6.171px] relative w-full">
          <Frame148 />
          <Component10 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[9.256px] items-center justify-center relative rounded-[770.583px] shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 absolute bg-white left-[calc(50%+0.6px)] rounded-[43.967px] top-0 w-[301.931px]" data-name="Component 154">
      <div className="content-stretch flex flex-col gap-[6.171px] items-start overflow-clip pl-[16.376px] pr-[5.461px] py-[5.461px] relative rounded-[inherit] w-full">
        <Frame34 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ebedee] border-[0.682px] border-solid inset-0 pointer-events-none rounded-[43.967px] shadow-[0px_43.909px_26.346px_0px_rgba(26,59,84,0.05),0px_19.655px_19.655px_0px_rgba(26,59,84,0.09),0px_5.018px_10.873px_0px_rgba(26,59,84,0.1)]" />
    </div>
  );
}

function LucideChevronDown1() {
  return (
    <div className="relative shrink-0 size-[12.342px]" data-name="lucide/chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3417 12.3417">
        <g id="lucide/chevron-down">
          <path d={svgPaths.p3ff55380} id="Vector" stroke="var(--stroke-0, #606D76)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.02847" />
        </g>
      </svg>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex gap-[1.543px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#606d76] text-[9.256px] text-ellipsis whitespace-nowrap">Implement accessibility standards</p>
      <LucideChevronDown1 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0b191f] text-[10.799px] whitespace-nowrap">32:10:12</p>
      <Frame152 />
    </div>
  );
}

function LucideSquare1() {
  return (
    <div className="relative shrink-0 size-[13.647px]" data-name="lucide/square">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6471 13.6471">
        <g id="lucide/square">
          <path d={svgPaths.p13c66a00} fill="var(--fill-0, #EB4335)" id="Vector" stroke="var(--stroke-0, #EB4335)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13726" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6.171px] items-center pl-[6.171px] relative w-full">
          <Frame151 />
          <button className="content-stretch cursor-pointer flex gap-[6.824px] items-center justify-center p-[8.188px] relative rounded-[883.738px] shrink-0 size-[32.753px]" data-name="Component 139">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(235,67,53,0.1)] left-1/2 rounded-[21.231px] size-[32.753px] top-1/2" />
            <LucideSquare1 />
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[9.256px] items-center justify-center relative rounded-[770.583px] shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Component11() {
  return (
    <div className="-translate-x-1/2 absolute bg-white left-[calc(50%+0.6px)] rounded-[43.967px] top-[126.6px] w-[301.931px]" data-name="Component 144">
      <div className="content-stretch flex flex-col gap-[6.171px] items-start overflow-clip pl-[16.376px] pr-[5.461px] py-[5.461px] relative rounded-[inherit] w-full">
        <Frame35 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ebedee] border-[0.682px] border-solid inset-0 pointer-events-none rounded-[43.967px] shadow-[0px_43.91px_26.346px_0px_rgba(26,59,84,0.05),0px_19.655px_19.655px_0px_rgba(26,59,84,0.09),0px_5.018px_10.873px_0px_rgba(26,59,84,0.1)]" />
    </div>
  );
}

function Frame150() {
  return (
    <div className="absolute h-[170px] left-[11px] top-[166px] w-[343px]">
      <Frame138 />
      <div className="-translate-x-1/2 absolute h-[13.293px] left-[calc(50%+0.28px)] top-[44.94px] w-0">
        <div className="absolute inset-[-4.76%_-0.63px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.26596 14.5585">
            <path d="M0.632979 0.632979V13.9255" id="Vector 21" stroke="var(--stroke-0, #EB4335)" strokeDasharray="5.7 5.7" strokeLinecap="round" strokeWidth="1.26596" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[10.761px] left-[calc(50%+0.28px)] top-[107.61px] w-0">
        <div className="absolute inset-[-5.88%_-3.38px_-31.37%_-3.38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75177 14.7695">
            <path d={svgPaths.p26085000} fill="url(#paint0_linear_1_736)" id="Vector 22" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_736" x1="3.87589" x2="3.87589" y1="0.632979" y2="11.3936">
                <stop stopColor="#EB4335" />
                <stop offset="1" stopColor="#FC5244" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Component12 />
      <Component11 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="h-[357px] relative overflow-hidden rounded-[22.787px] shadow-[0px_24.686px_6.963px_0px_rgba(181,181,181,0),0px_15.824px_6.33px_0px_rgba(181,181,181,0.04),0px_8.862px_5.064px_0px_rgba(181,181,181,0.12),0px_3.798px_3.798px_0px_rgba(181,181,181,0.2),0px_1.266px_1.899px_0px_rgba(181,181,181,0.24)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgba(178, 230, 247, 0.48) 0%, rgba(253, 251, 247, 0.48) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6.33px] items-center p-[30.383px] relative size-full">
          <div className="-translate-x-1/2 absolute left-[calc(50%+128px)] size-[700px] top-[40px]">
            <div className="absolute inset-[-52%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1428 1428">
                <g filter="url(#filter0_f_1_748)" id="Ellipse 13">
                  <circle cx="714" cy="714" fill="var(--fill-0, white)" r="350" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1428" id="filter0_f_1_748" width="1428" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_748" stdDeviation="182" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Frame118 />
          <Frame150 />
        </div>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[14px] items-center not-italic relative shrink-0 text-center w-full">
      <p className="leading-[1.04] relative shrink-0 text-[#0b191f] text-[24.26px] w-full">Integrated Invoicing</p>
      <p className="leading-[16.5px] relative shrink-0 text-[#606d76] text-[14px] w-full">Turn billable hours into professional invoices with one click.</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame123 />
    </div>
  );
}

function LucideChevronDown2() {
  return (
    <div className="relative shrink-0 size-[9.273px]" data-name="lucide/chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.27288 9.27288">
        <g id="lucide/chevron-down">
          <path d={svgPaths.p2c0a3380} id="Vector" stroke="var(--stroke-0, #252014)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.77274" />
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-white relative rounded-[4.636px] shrink-0 w-full" data-name="Component 27">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.58px] border-solid inset-0 pointer-events-none rounded-[4.636px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9.273px] py-[6.955px] relative w-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0b191f] text-[9.273px] whitespace-nowrap">Set up high-fidelity prototypes with conditional logic</p>
          <LucideChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function TimeRange() {
  return (
    <div className="content-stretch flex flex-col gap-[2.318px] items-start relative shrink-0 w-full" data-name="Time Range">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606d76] text-[8.114px] whitespace-nowrap">Project</p>
      <Component7 />
    </div>
  );
}

function LucideCalendar() {
  return (
    <div className="relative shrink-0 size-[9.273px]" data-name="lucide/calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.27288 9.27288">
        <g id="lucide/calendar">
          <path d={svgPaths.p19165f00} id="Vector" stroke="var(--stroke-0, #252014)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.77274" />
        </g>
      </svg>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white relative rounded-[4.636px] shrink-0 w-full" data-name="Component 27">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.58px] border-solid inset-0 pointer-events-none rounded-[4.636px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9.273px] py-[6.955px] relative w-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0b191f] text-[9.273px] whitespace-nowrap">10/10/2025-10/10/2025</p>
          <LucideCalendar />
        </div>
      </div>
    </div>
  );
}

function DateRange() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.318px] items-start min-h-px min-w-px relative" data-name="Date Range">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606d76] text-[8.114px] whitespace-nowrap">Date Range</p>
      <Component8 />
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-white relative rounded-[4.636px] shrink-0 w-full" data-name="Component 27">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.58px] border-solid inset-0 pointer-events-none rounded-[4.636px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9.273px] py-[6.955px] relative w-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0b191f] text-[9.273px] whitespace-nowrap">09:00 AM - 10:00 AM</p>
        </div>
      </div>
    </div>
  );
}

function DateRange1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.318px] items-start min-h-px min-w-px relative" data-name="Date Range">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606d76] text-[8.114px] whitespace-nowrap">Time Range</p>
      <Component9 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[9.273px] items-start relative shrink-0 w-full">
      <DateRange />
      <DateRange1 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[9.273px] items-center justify-end relative shrink-0 w-full">
      <TimeRange />
      <Frame114 />
    </div>
  );
}

function LucidePlus() {
  return (
    <div className="relative shrink-0 size-[9.273px]" data-name="lucide/plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.27288 9.27288">
        <g id="lucide/plus">
          <path d={svgPaths.pf86f000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.823347" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <button className="cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4.636px]" data-name="Component 4" style={{ backgroundImage: "linear-gradient(176.304deg, rgb(36, 181, 248) 123.02%, rgb(85, 33, 254) 802.55%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4.636px] items-center justify-center px-[9.273px] py-[5.796px] relative size-full">
          <LucidePlus />
          <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8.114px] text-left text-white whitespace-nowrap">Log Time</p>
        </div>
      </div>
    </button>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex h-[22.591px] items-center justify-end relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Component />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[13.909px] items-start relative shrink-0 w-full">
      <Frame112 />
      <Frame73 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(249, 249, 249) 0%, rgb(249, 249, 249) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[13.909px] items-start px-[20.864px] py-[13.909px] relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-bl-[9.273px] rounded-br-[9.27px] rounded-tl-[9.276px] rounded-tr-[9.273px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-[0.58px] border-solid inset-0 pointer-events-none rounded-bl-[9.273px] rounded-br-[9.27px] rounded-tl-[9.276px] rounded-tr-[9.273px]" />
    </div>
  );
}

function CreateTask() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[215.92px] shadow-[0px_218.822px_61.24px_0px_rgba(26,59,84,0),0px_139.658px_56.012px_0px_rgba(26,59,84,0.01),0px_78.417px_47.05px_0px_rgba(26,59,84,0.05),0px_35.101px_35.101px_0px_rgba(26,59,84,0.09),0px_8.962px_19.418px_0px_rgba(26,59,84,0.1)] top-[225.47px] w-[318.15px]" data-name="Create Task">
      <Frame1 />
    </div>
  );
}

function Frame134() {
  const invCarousel = useInvoiceCarousel();
  return (
    <div className="h-[379.522px] relative w-[749.361px]">
      <div className="absolute flex h-[580.094px] items-center justify-center left-[-16.23px] top-[-162.57px] w-[721.685px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.91deg] scale-x-89 scale-y-121 skew-x-[-12.77deg]">
          <div className="h-[395px] relative w-[539px]">
            <div className="absolute inset-[-0.17%_0_-0.13%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540.061 396.173">
                <path d={svgPaths.p3341a900} fill="url(#paint0_linear_1_675)" id="Vector 20" stroke="var(--stroke-0, white)" strokeDasharray="9 9" strokeLinecap="round" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_675" x1="226.526" x2="483.026" y1="89.1665" y2="377.166">
                    <stop stopColor="#F9FAFB" />
                    <stop offset="1" stopColor="#F9FAFB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <CreateTask />
      <InvoiceCardStrip {...invCarousel} />
      <div className="absolute h-[25.5px] left-[58px] top-[164px] w-[631px]">
        <div className="absolute inset-[-5.85%_-0.94%_-77.82%_-0.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642.912 46.836">
            <g filter="url(#filter0_dddd_1_645)" id="Vector 13">
              <path d={svgPaths.p2ee8a200} stroke="var(--stroke-0, #E4EAEC)" strokeDasharray="9 9" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.836" id="filter0_dddd_1_645" width="642.912" x="0" y="5.96046e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.992" />
                <feGaussianBlur stdDeviation="0.992" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.121569 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_645" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.472" />
                <feGaussianBlur stdDeviation="1.736" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.03 0" />
                <feBlend in2="effect1_dropShadow_1_645" mode="normal" result="effect2_dropShadow_1_645" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="7.936" />
                <feGaussianBlur stdDeviation="2.48" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.02 0" />
                <feBlend in2="effect2_dropShadow_1_645" mode="normal" result="effect3_dropShadow_1_645" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="13.888" />
                <feGaussianBlur stdDeviation="2.728" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.01 0" />
                <feBlend in2="effect3_dropShadow_1_645" mode="normal" result="effect4_dropShadow_1_645" />
                <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_645" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[25px] left-[185px] top-[164px] w-0">
        <div className="absolute inset-[-5.97%_-5.96px_-79.38%_-5.96px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.912 46.336">
            <g filter="url(#filter0_dddd_1_750)" id="Vector 14">
              <path d="M5.956 1.492V26.492" stroke="var(--stroke-0, #E4EAEC)" strokeDasharray="9 9" strokeLinecap="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.336" id="filter0_dddd_1_750" width="11.912" x="0" y="5.96046e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.992" />
                <feGaussianBlur stdDeviation="0.992" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.121569 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.472" />
                <feGaussianBlur stdDeviation="1.736" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.03 0" />
                <feBlend in2="effect1_dropShadow_1_750" mode="normal" result="effect2_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="7.936" />
                <feGaussianBlur stdDeviation="2.48" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.02 0" />
                <feBlend in2="effect2_dropShadow_1_750" mode="normal" result="effect3_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="13.888" />
                <feGaussianBlur stdDeviation="2.728" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.01 0" />
                <feBlend in2="effect3_dropShadow_1_750" mode="normal" result="effect4_dropShadow_1_750" />
                <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_750" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[25px] left-[311px] top-[164px] w-0">
        <div className="absolute inset-[-5.97%_-5.96px_-79.38%_-5.96px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.912 46.336">
            <g filter="url(#filter0_dddd_1_638)" id="Vector 15">
              <path d="M5.956 1.492V26.492" stroke="var(--stroke-0, #24B5F8)" strokeDasharray="9 9" strokeLinecap="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.336" id="filter0_dddd_1_638" width="11.912" x="0" y="5.96046e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.992" />
                <feGaussianBlur stdDeviation="0.992" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.121569 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_638" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.472" />
                <feGaussianBlur stdDeviation="1.736" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.03 0" />
                <feBlend in2="effect1_dropShadow_1_638" mode="normal" result="effect2_dropShadow_1_638" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="7.936" />
                <feGaussianBlur stdDeviation="2.48" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.02 0" />
                <feBlend in2="effect2_dropShadow_1_638" mode="normal" result="effect3_dropShadow_1_638" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="13.888" />
                <feGaussianBlur stdDeviation="2.728" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.01 0" />
                <feBlend in2="effect3_dropShadow_1_638" mode="normal" result="effect4_dropShadow_1_638" />
                <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_638" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[35px] left-[375px] top-[190px] w-0">
        <div className="absolute inset-[-2.83%_-5.96px_-55.27%_-5.96px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.912 55.336">
            <g filter="url(#filter0_dddd_1_752)" id="Vector 18">
              <path d="M5.956 0.992V35.992" stroke="var(--stroke-0, #24B5F8)" strokeDasharray="9 9" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55.336" id="filter0_dddd_1_752" width="11.912" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.992" />
                <feGaussianBlur stdDeviation="0.992" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.121569 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_752" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.472" />
                <feGaussianBlur stdDeviation="1.736" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.03 0" />
                <feBlend in2="effect1_dropShadow_1_752" mode="normal" result="effect2_dropShadow_1_752" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="7.936" />
                <feGaussianBlur stdDeviation="2.48" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.02 0" />
                <feBlend in2="effect2_dropShadow_1_752" mode="normal" result="effect3_dropShadow_1_752" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="13.888" />
                <feGaussianBlur stdDeviation="2.728" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.01 0" />
                <feBlend in2="effect3_dropShadow_1_752" mode="normal" result="effect4_dropShadow_1_752" />
                <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_752" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[25px] left-[437px] top-[164px] w-0">
        <div className="absolute inset-[-5.97%_-5.96px_-79.38%_-5.96px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.912 46.336">
            <g filter="url(#filter0_dddd_1_750)" id="Vector 14">
              <path d="M5.956 1.492V26.492" stroke="var(--stroke-0, #E4EAEC)" strokeDasharray="9 9" strokeLinecap="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.336" id="filter0_dddd_1_750" width="11.912" x="0" y="5.96046e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.992" />
                <feGaussianBlur stdDeviation="0.992" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.121569 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.472" />
                <feGaussianBlur stdDeviation="1.736" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.03 0" />
                <feBlend in2="effect1_dropShadow_1_750" mode="normal" result="effect2_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="7.936" />
                <feGaussianBlur stdDeviation="2.48" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.02 0" />
                <feBlend in2="effect2_dropShadow_1_750" mode="normal" result="effect3_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="13.888" />
                <feGaussianBlur stdDeviation="2.728" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.01 0" />
                <feBlend in2="effect3_dropShadow_1_750" mode="normal" result="effect4_dropShadow_1_750" />
                <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_750" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[25px] left-[563px] top-[164px] w-0">
        <div className="absolute inset-[-5.97%_-5.96px_-79.38%_-5.96px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.912 46.336">
            <g filter="url(#filter0_dddd_1_750)" id="Vector 14">
              <path d="M5.956 1.492V26.492" stroke="var(--stroke-0, #E4EAEC)" strokeDasharray="9 9" strokeLinecap="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.336" id="filter0_dddd_1_750" width="11.912" x="0" y="5.96046e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.992" />
                <feGaussianBlur stdDeviation="0.992" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.121569 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.472" />
                <feGaussianBlur stdDeviation="1.736" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.03 0" />
                <feBlend in2="effect1_dropShadow_1_750" mode="normal" result="effect2_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="7.936" />
                <feGaussianBlur stdDeviation="2.48" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.02 0" />
                <feBlend in2="effect2_dropShadow_1_750" mode="normal" result="effect3_dropShadow_1_750" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="13.888" />
                <feGaussianBlur stdDeviation="2.728" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.105882 0 0 0 0 0.121569 0 0 0 0.01 0" />
                <feBlend in2="effect3_dropShadow_1_750" mode="normal" result="effect4_dropShadow_1_750" />
                <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_750" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[39.238px] items-center justify-center left-[310.5px] top-[170.02px] w-[64.386px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.91deg] scale-x-89 scale-y-121 skew-x-[-12.77deg]">
          <div className="h-[19px] relative w-[61.5px]">
            <div className="absolute inset-[-2.51%_-0.24%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.7952 19.9554">
                <path d={svgPaths.p19b12a40} id="Vector 19" stroke="var(--stroke-0, #24B5F8)" strokeDasharray="9 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="h-[564px] relative overflow-hidden rounded-[36px] shadow-[0px_39px_11px_0px_rgba(181,181,181,0),0px_25px_10px_0px_rgba(181,181,181,0.04),0px_14px_8px_0px_rgba(181,181,181,0.12),0px_6px_6px_0px_rgba(181,181,181,0.2),0px_2px_3px_0px_rgba(181,181,181,0.24)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-22.3232deg, rgba(178, 230, 247, 0.39) 177.11%, rgba(253, 251, 247, 0.39) 89.39%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[48px] relative size-full">
          <div className="-translate-x-1/2 absolute left-[calc(50%-39px)] size-[230px] top-[255px]">
            <div className="absolute inset-[-65.22%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 530 530">
                <g filter="url(#filter0_f_1_643)" id="Ellipse 13">
                  <circle cx="265" cy="265" fill="var(--fill-0, white)" r="115" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="530" id="filter0_f_1_643" width="530" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_643" stdDeviation="75" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Frame124 />
          <div className="-translate-x-1/2 absolute flex h-[513.342px] items-center justify-center left-[calc(50%+47.9px)] top-[111px] w-[957.794px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1492" } as React.CSSProperties}>
            <div className="flex-none rotate-[-17.13deg] scale-y-92 skew-x-[22.42deg]">
              <Frame134 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[14px] items-center not-italic relative shrink-0 text-center w-full">
      <p className="leading-[1.04] relative shrink-0 text-[#0b191f] text-[24.26px] w-full">Real-time Project Health</p>
      <p className="leading-[16.5px] relative shrink-0 text-[#606d76] text-[14px] w-full">{`Never be surprised by a missed deadline. Track velocity and see instantly if a project is "Project On Track" or "At Risk."`}</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame133 />
    </div>
  );
}

function Frame120() {
  const gaugeRef = useRef<HTMLDivElement>(null);
  const [gaugeVisible, setGaugeVisible] = useState(false);
  const [gaugePercent, setGaugePercent] = useState(0);
  const gaugePctRef = useRef(0);

  useEffect(() => {
    const el = gaugeRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setGaugeVisible(e.isIntersecting),
      { threshold: 0.45 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const target = gaugeVisible ? 100 : 0;
    const start = gaugePctRef.current;
    if (start === target) return;
    const duration = 1500;
    let t0: number | null = null;
    let frame: number;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      const ease = 1 - (1 - p) * (1 - p);
      const val = Math.round(start + (target - start) * ease);
      gaugePctRef.current = val;
      setGaugePercent(val);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [gaugeVisible]);

  return (
    <div ref={gaugeRef} className="h-[444px] relative overflow-hidden rounded-[36px] shadow-[0px_39px_11px_0px_rgba(181,181,181,0),0px_25px_10px_0px_rgba(181,181,181,0.04),0px_14px_8px_0px_rgba(181,181,181,0.12),0px_6px_6px_0px_rgba(181,181,181,0.2),0px_2px_3px_0px_rgba(181,181,181,0.24)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgba(178, 247, 194, 0.48) 0%, rgba(253, 251, 247, 0.48) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[48px] relative size-full">
          <div className="-translate-x-1/2 absolute flex h-[824.007px] items-center justify-center left-[calc(50%+318.64px)] top-[-169px] w-[1603.272px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-[14.7deg]">
              <div className="h-[448px] relative w-[1540px]">
                <div className="absolute inset-[-81.25%_-23.64%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2268 1176">
                    <g filter="url(#filter0_f_1_630)" id="Ellipse 14">
                      <ellipse cx="1134" cy="588" fill="var(--fill-0, white)" rx="770" ry="224" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1176" id="filter0_f_1_630" width="2268" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_1_630" stdDeviation="182" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame132 />
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-0.5px)] px-[22.072px] top-[221px] w-[283px]">
            <div className="h-[141.5px] relative shrink-0 w-[283px] overflow-visible">
              <div className="absolute inset-[-4.85%_-2.43%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296.734 155.234">
                  <path d={svgPaths.p2dadad00} stroke="#E4EAEC" strokeLinecap="round" strokeWidth="13.7339" />
                  <g transform="translate(296.734 0) scale(-1 1)">
                    <path
                      d={svgPaths.p2dadad00}
                      stroke="#6EC679"
                      strokeLinecap="round"
                      strokeWidth="13.7339"
                      pathLength="100"
                      strokeDasharray="100"
                      strokeDashoffset={100 - gaugePercent}
                      style={{ transition: "none" }}
                    />
                  </g>
                </svg>
              </div>
            </div>
            <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic overflow-hidden text-[#0b191f] text-[36px] text-ellipsis top-[71px] whitespace-nowrap left-1/2 -translate-x-1/2">{gaugePercent}%</p>
            <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[normal] not-italic overflow-hidden text-[#13a82e] text-[22.072px] text-ellipsis top-[120px] tracking-[-0.2207px] whitespace-nowrap left-1/2 -translate-x-1/2" style={{ opacity: gaugePercent === 100 ? 1 : 0, transition: "opacity 0.3s" }}>Project on track</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[16px] top-[867px] w-[370px]">
      <Frame121 />
      <Frame119 />
      <Frame120 />
    </div>
  );
}

function Component5() {
  return (
    <button
      type="button"
      onClick={scrollToWaitlist}
      className="content-stretch flex cursor-pointer gap-[6px] h-[32px] items-center justify-center border-0 px-[16px] py-[8px] relative rounded-[8px] shrink-0"
      data-name="Component 7"
      style={{ backgroundImage: "linear-gradient(167.275deg, rgb(36, 181, 248) 123.02%, rgb(85, 33, 254) 802.55%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_3px_0px_rgba(45,154,249,0),0px_8px_3px_0px_rgba(45,154,249,0.03),0px_4px_3px_0px_rgba(45,154,249,0.11),0px_2px_2px_0px_rgba(45,154,249,0.19),0px_0px_1px_0px_rgba(45,154,249,0.21)]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Join Waitlist</p>
    </button>
  );
}

function Frame155() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex gap-[8px] items-center left-[145px] top-auto">
      <Component5 />
    </div>
  );
}

export default function LandingPageMobile() {
  return (
    <div className="relative min-h-[2478px] w-full overflow-x-hidden bg-[#f9fafb]" data-name="Landing page - Vertical">
      <div
        className="pointer-events-none absolute left-1/2 top-[120px] z-0 h-[420px] w-[min(220%,52rem)] -translate-x-1/2 rounded-[50%] bg-[#EEF9F9]/[0.55] blur-[72px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[260px] z-0 h-[320px] w-[110%] max-w-[420px] -translate-x-1/2 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(238,249,249,0.85)_0%,rgba(238,249,249,0.28)_55%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[8%] top-[300px] z-0 h-[180px] w-[45%] max-w-[200px] rounded-full bg-[#EEF9F9]/[0.35] blur-[48px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[5%] top-[200px] z-0 h-[200px] w-[40%] max-w-[180px] rounded-full bg-[#EEF9F9]/[0.4] blur-[56px]"
        aria-hidden
      />
      <Frame116 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[453px] left-0 to-[#f9fafb] top-[1001px] w-full max-w-[402px]" />
      <div className="absolute flex h-[453px] items-center justify-center left-0 top-[1359px] w-full max-w-[402px]">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[453px] to-[#f9fafb] w-full max-w-[402px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#f9fafb] h-[1020px] left-1/2 top-[1458px] w-full max-w-[402px]" />
      {/* Clip height so curves do not extend below the footer Join Waitlist (~2474px) */}
      <div className="absolute h-[282px] left-[-123.73px] top-[2192px] w-[1823.234px] overflow-hidden">
        <div className="absolute inset-[-3.17%_0_-3.17%_-0.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1835.7 402.904">
            <path d={svgPaths.p296fcf40} id="Vector 12" stroke="var(--stroke-0, #E4EAEC)" strokeWidth="24" />
          </svg>
        </div>
      </div>
      <Frame127 />
      <Frame4 />
      <Frame136 />
      <p className="-translate-x-1/2 absolute bg-clip-text font-['Satoshi:Medium',sans-serif] leading-[0] left-1/2 not-italic text-[0px] text-[transparent] text-center top-[142px] w-[307.565px]" style={{ backgroundImage: "linear-gradient(114.626deg, rgb(36, 181, 248) 4.6217%, rgb(85, 33, 254) 148.53%)" }}>
        <span className="bg-clip-text font-continuum leading-[1.04] text-[36px]" style={{ backgroundImage: "linear-gradient(114.626deg, rgb(36, 181, 248) 4.6217%, rgb(85, 33, 254) 148.53%)" }}>
          Continuum
        </span>
        <span className="leading-[1.04] text-[36px]">{` `}</span>
        <span className="leading-[1.04] text-[#0b191f] text-[36px]">connects delivery with profitability.</span>
      </p>
      <Component1 />
      <Frame115 />
      <Frame154 />
      <Frame155 />
    </div>
  );
}