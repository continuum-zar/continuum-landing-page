import clsx from "clsx";

const ICON = "/landing/continuum-ai";

const ROW1 = [
  {
    icon: `${ICON}/icon-command.svg`,
    title: "AI Project Planner",
    body: "Instantly generate structured project outlines. Simply chat with Continuum or upload your existing strategy documents, and watch it build out your initial project phases.",
  },
  {
    icon: `${ICON}/icon-zap.svg`,
    title: "Contextual Task Drafting",
    body: "Eliminate manual data entry. Our Create Task assistant automatically drafts detailed, accurate task descriptions by pulling direct context from your codebase.",
  },
  {
    icon: `${ICON}/icon-bar-chart.svg`,
    title: "Repository AI Indexing",
    body: "Continuum deeply indexes your connected repositories, establishing an intelligent foundation that ensures all AI-generated tasks and suggestions are highly relevant to your specific architecture.",
  },
] as const;

const ROW2 = [
  {
    icon: `${ICON}/icon-smile.svg`,
    title: "Client Dashboard Assistant",
    body: "Give your clients instant answers. A dedicated Q&A chat on the client dashboard allows stakeholders to query project status and sprint health without interrupting the development team.",
  },
  {
    icon: `${ICON}/icon-command.svg`,
    title: "Smart Time Logs",
    body: "Let AI do the reporting. Continuum automatically suggests accurate time log descriptions based on your developers' recent commits. Review, approve, and move on.",
  },
  {
    icon: `${ICON}/icon-shield-check.svg`,
    title: "Secure & Private",
    body: "Your codebase and project data are never used to train outside models. Continuum AI is sandboxed specifically for your workspace's momentum.",
  },
] as const;

const ALL_FEATURES = [...ROW1, ...ROW2] as const;

function FeaturedIcon({ src }: { src: string }) {
  return (
    <div className="relative shrink-0 size-[48px] rounded-[24px] bg-[#cfecff]">
      <div className="absolute left-[12px] top-[12px] size-[24px] overflow-clip">
        <img alt="" className="block size-full max-w-none" src={src} />
      </div>
    </div>
  );
}

function FeatureBlock({
  icon,
  title,
  body,
  stacked,
}: {
  icon: string;
  title: string;
  body: string;
  /** Mobile: one feature per row — no flex-grow so blocks don’t share height like a row grid */
  stacked?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-start gap-[20px]",
        stacked ? "w-full shrink-0" : "min-h-px min-w-px flex-[1_0_0]",
      )}
    >
      <FeaturedIcon src={icon} />
      <div className="flex w-full flex-col items-start gap-[8px] not-italic">
        <p className="w-full font-['Satoshi:Medium',sans-serif] text-[20px] leading-[30px] text-[#0b191f]">{title}</p>
        <p className="w-full font-['Satoshi:Regular',sans-serif] text-[16px] leading-[24px] text-[#606d76]">{body}</p>
      </div>
    </div>
  );
}

export type ContinuumAiFeaturesProps = {
  variant: "desktop" | "mobile";
  className?: string;
};

export default function ContinuumAiFeatures({ variant, className }: ContinuumAiFeaturesProps) {
  const isMobile = variant === "mobile";

  return (
    <section
      aria-labelledby="continuum-ai-heading"
      className={clsx(
        /* Desktop: no opaque bg so the squiggly line can show through; page bg is already #f9fafb */
        isMobile && "bg-[#f9fafb]",
        isMobile
          ? "relative flex w-full shrink-0 flex-col gap-[64px]"
          : "flex flex-col items-center gap-[64px] px-[32px] py-[96px]",
        className,
      )}
      data-name="Continuum AI features"
      id={isMobile ? undefined : "landing-continuum-ai"}
    >
      <div className={clsx("flex w-full flex-col items-start", isMobile ? "gap-[20px]" : "")}>
        <div className="flex w-full max-w-[768px] flex-col items-start gap-[20px]">
          <div className="flex w-full flex-col items-start gap-[12px] font-['Satoshi:Medium',sans-serif] not-italic">
            <p
              className="w-full bg-clip-text text-[16px] leading-[24px] text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(169.20773662156353deg, rgb(36, 181, 248) 4.6217%, rgb(85, 33, 254) 148.53%)",
              }}
            >
              Features
            </p>
            <h2
              className={clsx(
                "font-continuum-ai-wordmark w-full tracking-[-0.72px] text-[#101828]",
                isMobile ? "text-[28px] leading-[36px]" : "text-[36px] leading-[44px]",
              )}
              id="continuum-ai-heading"
            >
              Continuum AI
            </h2>
          </div>
          <p
            className={clsx(
              "w-full font-['Satoshi:Regular',sans-serif] text-[#667085]",
              isMobile ? "text-[16px] leading-[24px]" : "text-[20px] leading-[30px]",
            )}
          >
            Quiet intelligence that handles the administrative heavy lifting, so you can focus on shipping.
          </p>
        </div>
      </div>

      <div className={clsx("flex w-full flex-col items-start", isMobile ? "" : "gap-[64px]")}>
        {isMobile ? (
          <div className="flex w-full flex-col gap-[40px]">
            {ALL_FEATURES.map((f) => (
              <FeatureBlock key={f.title} {...f} stacked />
            ))}
          </div>
        ) : (
          <>
            <div className="flex w-full items-start gap-[32px]">
              {ROW1.map((f) => (
                <FeatureBlock key={f.title} {...f} />
              ))}
            </div>
            <div className="flex w-full items-start gap-[32px]">
              {ROW2.map((f) => (
                <FeatureBlock key={f.title} {...f} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
