import type { ReactNode } from 'react';
import { Toaster as Sonner } from 'sonner';

/** Black disc + white check (Sonner’s default success glyph is single-color `currentColor`, so we replace it). */
function WaitlistSuccessIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle cx="10" cy="10" r="10" fill="#0b191f" />
      <path
        d="M6 10.25 8.75 13 14.25 6.75"
        stroke="#fff"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Sonner host for the landing page (Vite — no next-themes; light UI to match continuum-MVP login toast). */
export function Toaster() {
  return (
    <Sonner
      theme="light"
      position="top-center"
      className="toaster group"
      icons={{ success: <WaitlistSuccessIcon /> }}
      toastOptions={{
        classNames: {
          toast:
            '!bg-white !text-[#0b191f] !border !border-[#e9e9e9] !shadow-[0_4px_24px_rgba(26,59,84,0.12)] !rounded-2xl',
          title: '!text-[#0b191f] !text-[14px] !font-medium',
          description: '!text-[#606d76] !text-[13px]',
        },
      }}
    />
  );
}
