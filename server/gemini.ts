import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with API key
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is required");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get the Gemini Flash model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export interface AiGenerationRequest {
  prompt: string;
  businessContext?: string;
  tone?: string;
}

export interface AiGenerationResponse {
  generatedText: string;
  status: "success" | "error";
  message?: string;
}

/**
 * Generate AI response using Google's Gemini model
 */
export async function generateAiContent(request: AiGenerationRequest): Promise<AiGenerationResponse> {
  try {
    // Build the prompt with context
    let fullPrompt = request.prompt;
    
    if (request.businessContext) {
      fullPrompt = `Context: ${request.businessContext}\n\n${fullPrompt}`;
    }
    
    if (request.tone) {
      fullPrompt += `\n\nPlease use a ${request.tone} tone in your response.`;
    }

    // Call Gemini model
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return {
      generatedText: text,
      status: "success"
    };
  } catch (error) {
    console.error("Gemini API error:", error);
    return {
      generatedText: "",
      status: "error",
      message: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
}

/**
 * Analyze business text using AI
 */
export async function analyzeBusinessText(text: string): Promise<any> {
  try {
    const prompt = `
    Analyze the following business text and provide insights:
    1. Main topics and themes
    2. Sentiment (positive, negative, neutral)
    3. Key action items or opportunities
    4. Potential improvements or suggestions
    
    Text to analyze: "${text}"
    
    Please format your response as JSON with the following structure:
    {
      "topics": ["topic1", "topic2"],
      "sentiment": "positive/negative/neutral",
      "score": 0.8, // sentiment score from -1 to 1
      "actionItems": ["action1", "action2"],
      "suggestions": ["suggestion1", "suggestion2"]
    }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();
    
    // Parse the JSON from the response
    try {
      // Extract JSON from the text response if the AI included extra text
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse JSON from AI response:", parseError);
      return {
        error: "Failed to parse analysis results",
        rawResponse: responseText
      };
    }
  } catch (error) {
    console.error("Gemini API error during analysis:", error);
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred during analysis"
    };
  }
}

/**
 * Generate business ideas based on industry and goals
 */
export async function generateBusinessIdeas(industry: string, goals: string): Promise<string[]> {
  try {
    const prompt = `
    Generate 5 innovative AI implementation ideas for a business in the ${industry} industry 
    with the following goals: ${goals}.
    
    For each idea, provide:
    1. A concise title
    2. A brief description of how AI would be implemented
    3. The potential business impact
    
    Format each idea as a compact paragraph with the title in bold at the beginning.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Split the response into separate ideas
    const ideas = text.split(/\d+\./).filter(idea => idea.trim().length > 0);
    return ideas.map(idea => idea.trim());
  } catch (error) {
    console.error("Gemini API error generating ideas:", error);
    return ["Error generating AI business ideas. Please try again later."];
  }
}