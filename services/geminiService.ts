import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getAuroraRecommendation = async (mood: string): Promise<string> => {
  if (!ai) return "I can't connect to the stars right now (API Key missing).";

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are Aurora, a magical librarian spirit. The user says they are feeling: "${mood}". 
      Recommend 2-3 types of books (genres or specific public domain titles) that would suit this mood. 
      Keep the tone ethereal, comforting, and romantic. Keep it under 100 words.`,
    });
    
    return response.text || "The stars remain silent regarding your query.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The aurora is fluctuating. Please try again later.";
  }
};
