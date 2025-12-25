
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });
      return response.text || "I'm sorry, I couldn't process that.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having trouble connecting right now. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
