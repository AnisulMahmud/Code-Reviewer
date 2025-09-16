// CommonJS file
async function generateContent(prompt) {
  // ESM-only library — import it dynamically inside the async function
  const { GoogleGenAI } = await import("@google/genai");

  const ai = new GoogleGenAI({}); // uses GEMINI_API_KEY from env
  const model = "gemini-2.5-flash";
  const systemInstruction = require('../config/systemInstruction')
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    systemInstruction
  });

  return response.text;
}

module.exports = generateContent;
