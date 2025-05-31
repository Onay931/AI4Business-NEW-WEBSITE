import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { industry, goals } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: 'API configuration missing',
        message: 'Gemini API key not configured' 
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Generate 5 innovative AI-powered business ideas for the ${industry} industry with the following goals: ${goals}

For each idea, provide:
- Brief description
- AI technology involved
- Potential impact
- Implementation considerations

Focus on practical, achievable solutions that could be implemented with AI4Business services.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const ideas = response.text();

    return res.status(200).json({
      ideas,
      status: 'success'
    });

  } catch (error) {
    console.error('Business Ideas Generation Error:', error);
    return res.status(500).json({
      error: 'Generation failed',
      message: 'Unable to generate business ideas',
      status: 'error'
    });
  }
}