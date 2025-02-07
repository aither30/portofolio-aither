declare module "github-calendar" {
    export default function GitHubCalendar(
      selector: string | Element,
      username: string,
      options?: Record<string, unknown>
    ): void;
  }
  