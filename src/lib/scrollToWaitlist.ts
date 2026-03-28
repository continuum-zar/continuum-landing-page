/** Scroll to waitlist section and keep URL clean (same behavior on desktop + mobile). */
export function scrollToWaitlist() {
  const el = document.getElementById("landing-waitlist");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }
}
