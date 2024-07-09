'use client';
import { Button } from '@repo/ui/components';

// @jh3yy
// https://x.com/jh3yy/status/1765168337254809849
// https://codepen.io/jh3y/pen/YzMyPmo

export default function ScrollToTop() {
  return (
    <Button
      type="button"
      id="cta"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="sr-only">Scroll</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </Button>
  );
}
