import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { prompt, tone, businessContext } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: 'API configuration missing',
        message: 'Gemini API key not configured' 
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = response.text();

    return res.status(200).json({
      generatedText,
      status: 'success'
    });

  } catch (error) {
    console.error('AI Generation Error:', error);
    return res.status(500).json({
      error: 'Generation failed',
      message: 'Unable to generate AI response',
      status: 'error'
    });
  }
}