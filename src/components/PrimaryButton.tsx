import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const SHADOW =
  "shadow-[0px_12px_3px_0px_rgba(45,154,249,0),0px_8px_3px_0px_rgba(45,154,249,0.03),0px_4px_3px_0px_rgba(45,154,249,0.11),0px_2px_2px_0px_rgba(45,154,249,0.19),0px_0px_1px_0px_rgba(45,154,249,0.21)]";

type PrimaryButtonProps = ComponentPropsWithoutRef<"button"> & {
  size?: "sm" | "md";
  containerClassName?: string;
};

export function PrimaryButton({
  children,
  className,
  containerClassName,
  size = "sm",
  disabled,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  const height = size === "md" ? "h-[40px]" : "h-[32px]";

  return (
    <HoverBorderGradient
      as="button"
      type={type}
      disabled={disabled}
      containerClassName={clsx(
        "h-min shrink-0 gap-0 rounded-[8px] border-0 bg-transparent p-px hover:bg-transparent",
        disabled && "pointer-events-none opacity-70",
        containerClassName,
      )}
      backgroundClassName="bg-[#24b5f8]"
      className={clsx(
        "flex cursor-pointer items-center justify-center gap-[6px] rounded-[inherit] border border-[rgba(255,255,255,0.1)] bg-[#24b5f8] px-[16px] py-[8px] font-['Satoshi:Bold',sans-serif] text-[14px] whitespace-nowrap text-white transition-colors hover:bg-[#297ccb] disabled:cursor-not-allowed",
        height,
        SHADOW,
        className,
      )}
      {...props}
    >
      {children}
    </HoverBorderGradient>
  );
}
