import { useEffect } from 'react';
import LandingPage from '@/pages/LandingPage';
import LandingPageMobile from '@/pages/LandingPageMobile';
import { Toaster } from '@/components/Toaster';
import { useMinWidthMd } from '@/hooks/useMinWidthMd';

export default function App() {
  const isDesktop = useMinWidthMd();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname);
    }
  }, [isDesktop]);

  return (
    <>
      <main className="relative w-full overflow-x-hidden bg-[#f9fafb]">
        {isDesktop ? (
          <LandingPage />
        ) : (
          <div className="w-full overflow-x-hidden bg-[#f9fafb]">
            <div className="relative mx-auto w-full max-w-[402px] overflow-x-hidden">
              <LandingPageMobile />
            </div>
          </div>
        )}
      </main>
      <Toaster />
    </>
  );
}
