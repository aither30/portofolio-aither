"use client";

import GitHubCalendar from "react-github-calendar";

const GitHubCalendarUi: React.FC = () => {
  return (
    <section className="p-6 bg-black text-white rounded-xl shadow-lg border border-gray-800">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-300">
        GitHub Contributions
      </h2>

      <div className="flex justify-center">
        <GitHubCalendar
          username="Aither30"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={{
            light: ["#f8f8f8", "#e0e0e0", "#b0b0b0", "#606060", "#000000"], // Hitam Putih
            dark: ["#1a1a1a", "#333333", "#555555", "#777777", "#ffffff"], // Hitam Putih di mode gelap
          }}
        />
      </div>
    </section>
  );
};

export default GitHubCalendarUi;
