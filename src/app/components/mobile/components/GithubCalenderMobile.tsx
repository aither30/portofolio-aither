"use client";

import GitHubCalenderUi from "../../GitHubCalendarUi";

export default function GitHubContainer() {
  return (
    <section
      id="GitHub"
      className="py-6 px-4 text-white flex justify-center items-center max-w-md mx-auto relative z-10"
    >
      <div className="w-full">
        <GitHubCalenderUi />
      </div>
    </section>
  );
}
