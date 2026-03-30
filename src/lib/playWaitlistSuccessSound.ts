/** Plays when the waitlist confirmation toast is shown (`public/sounds/draft-complete.mp3`). */
const WAITLIST_SUCCESS_SOUND = '/sounds/draft-complete.mp3';

export function playWaitlistSuccessSound(): void {
  try {
    const audio = new Audio(WAITLIST_SUCCESS_SOUND);
    audio.volume = 0.85;
    void audio.play().catch(() => {
      /* Autoplay policy or missing file — non-fatal */
    });
  } catch {
    /* ignore */
  }
}
