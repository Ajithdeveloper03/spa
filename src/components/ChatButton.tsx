"use client";

import { useState } from "react";
import styles from "./ChatButton.module.css";

export default function ChatButton() {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className={styles.wrap}>
      {tooltip && (
        <div className={styles.tooltip}>
          Chat with us!<br />
          <small>hello@serene-oasis.com</small>
        </div>
      )}
      <button
        className={styles.btn}
        aria-label="Live Chat"
        onClick={() => setTooltip((t) => !t)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
}
