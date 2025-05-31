import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { text } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: 'API configuration missing',
        message: 'Gemini API key not configured' 
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Analyze the following business text for sentiment, key themes, and actionable insights. Provide a professional analysis that could help business decision-making:

Text to analyze: "${text}"

Please provide:
1. Overall sentiment (positive/neutral/negative)
2. Key themes identified
3. Business insights
4. Recommended actions

Format the response professionally for business use.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = response.text();

    return res.status(200).json({
      analysis,
      status: 'success'
    });

  } catch (error) {
    console.error('Text Analysis Error:', error);
    return res.status(500).json({
      error: 'Analysis failed',
      message: 'Unable to analyze text',
      status: 'error'
    });
  }
}