import clsx from "clsx";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRightIcon } from "@/components/LandingIcons";

const TOOLS = ["Trello", "Jira", "ClickUp", "Asana", "Monday.com", "Notion"];

function Pill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-[32px] bg-[#edf0f3] px-[16px] py-[6px]">
      <span className="whitespace-nowrap font-['Satoshi:Regular',sans-serif] text-[16px] text-[#606d76]">{label}</span>
    </div>
  );
}

/** "Connect" illustration — wrapped tool pills. */
function ConnectArt() {
  return (
    <div className="flex w-[226px] flex-wrap justify-center gap-[8px]">
      {TOOLS.map((t) => (
        <Pill key={t} label={t} />
      ))}
    </div>
  );
}

/** "Map" illustration — grey columns transform into green columns. */
function MapArt() {
  return (
    <div className="flex items-center justify-center gap-[8px]">
      <div className="flex items-end gap-[8px]">
        <div className="h-[58px] w-[18px] rounded-[4px] bg-[#edf0f3]" />
        <div className="h-[63px] w-[18px] rounded-[4px] bg-[#edf0f3]" />
      </div>
      <ArrowRightIcon className="text-[#0b191f]" size={16} />
      <div className="flex items-end gap-[8px]">
        <div className="h-[58px] w-[18px] rounded-[4px] bg-[#22f26c]" />
        <div className="h-[63px] w-[18px] rounded-[4px] bg-[#22f26c]" />
      </div>
    </div>
  );
}

function KanbanColumn({ height, cards }: { height: number; cards: number }) {
  return (
    <div
      className="flex w-[22px] flex-col items-start gap-[2px] rounded-[2px] bg-[#f0f3f5] px-[2px] pt-[2px]"
      style={{ height }}
    >
      {Array.from({ length: cards }).map((_, i) => (
        <div key={i} className="h-[7px] w-full rounded-[1px] bg-[#cdd2d5]" />
      ))}
    </div>
  );
}

/** "Run" illustration — three kanban columns. */
function RunArt() {
  return (
    <div className="flex items-end justify-center gap-[8px]">
      <KanbanColumn height={61} cards={2} />
      <KanbanColumn height={51} cards={3} />
      <KanbanColumn height={61} cards={2} />
    </div>
  );
}

const STEPS: { title: string; body: string; art: React.ReactNode }[] = [
  { title: "Connect", body: "Import your board. Your structure comes with it.", art: <ConnectArt /> },
  { title: "Map", body: "Columns, labels, assignees transfer automatically.", art: <MapArt /> },
  { title: "Run", body: "First sprint live. Same structure, better visibility.", art: <RunArt /> },
];

const CARD_SHADOW =
  "shadow-[0px_39px_5.5px_0px_rgba(181,181,181,0),0px_25px_5px_0px_rgba(181,181,181,0.04),0px_14px_4px_0px_rgba(181,181,181,0.12),0px_6px_3px_0px_rgba(181,181,181,0.2),0px_2px_1.5px_0px_rgba(181,181,181,0.24)]";

function StepCard({ title, body, art }: (typeof STEPS)[number]) {
  return (
    <div className={clsx("flex flex-1 flex-col items-center justify-between gap-[20px] rounded-[8px] bg-white p-[20px]", CARD_SHADOW)}>
      <div className="flex min-h-[100px] flex-1 items-center justify-center">{art}</div>
      <div className="flex w-full flex-col items-center gap-[8px] text-center">
        <p className="font-['Satoshi:Medium',sans-serif] text-[20px] leading-[30px] text-[#0b191f]">{title}</p>
        <p className="font-['Satoshi:Regular',sans-serif] text-[16px] leading-[24px] text-[#606d76]">{body}</p>
      </div>
    </div>
  );
}

export type MigrationSectionProps = {
  variant: "desktop" | "mobile";
  className?: string;
};

export default function MigrationSection({ variant, className }: MigrationSectionProps) {
  const isMobile = variant === "mobile";

  return (
    <section
      data-name="Migration"
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
          label="Migration"
          heading={
            <>
              You've heard "easy migration" before.
              <br />
              This one's different.
            </>
          }
          body="No forced cutover. Your team works in both tools until the switch is done. Zero configuration tax” your first sprint can be live in under an hour."
        />

        <div
          className={clsx(
            "flex w-full gap-[16px]",
            isMobile ? "flex-col" : "items-stretch",
          )}
        >
          {STEPS.map((s) => (
            <StepCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
