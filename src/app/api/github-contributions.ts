// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const GITHUB_USERNAME = "Aither30";
//   const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

//   if (!GITHUB_TOKEN) {
//     return res.status(500).json({ error: "GITHUB_TOKEN is missing!" });
//   }

//   const query = `
//     {
//       user(login: "${GITHUB_USERNAME}") {
//         contributionsCollection {
//           contributionCalendar {
//             weeks {
//               contributionDays {
//                 contributionCount
//                 date
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     const response = await fetch("https://api.github.com/graphql", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${GITHUB_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ query }),
//     });

//     const text = await response.text(); // Cek response dulu

//     try {
//       const data = JSON.parse(text); // Parsing JSON
//       res.status(200).json(data);
//     } catch (jsonError) {
//       console.error("Invalid JSON response:", text);
//       res.status(500).json({ error: "Invalid JSON response from GitHub" });
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//     res.status(500).json({ error: "Failed to fetch GitHub data" });
//   }
// }
