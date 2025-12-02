import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "stock-market-tracker",
  ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } },
});
