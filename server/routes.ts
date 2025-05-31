import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { generateAiContent, analyzeBusinessText, generateBusinessIdeas, AiGenerationRequest } from "./gemini";
// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  industry: z.string(),
  message: z.string().min(10),
});

// AI request validation schemas
const generateContentSchema = z.object({
  prompt: z.string().min(5),
  businessContext: z.string().optional(),
  tone: z.string().optional(),
});

const analyzeTextSchema = z.object({
  text: z.string().min(10),
});

const generateIdeasSchema = z.object({
  industry: z.string().min(2),
  goals: z.string().min(5),
});

export async function registerRoutes(app: Express): Promise<Server> {

  // API endpoint for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body against the schema
      const validated = contactFormSchema.parse(req.body);
      
      // Here you would typically send an email or store the contact request
      // Since we're not implementing actual email sending, just log the data and return success
      console.log('Contact form submission:', validated);
      
      res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.'
      });
    } catch (error) {
      // If validation fails
      res.status(400).json({
        success: false,
        message: 'Invalid form data',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // AI Demo Endpoints
  
  // Generate AI content
  app.post("/api/ai/generate", async (req, res) => {
    try {
      // Validate request
      const validated = generateContentSchema.parse(req.body);
      
      const result = await generateAiContent(validated as AiGenerationRequest);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error generating AI content:", error);
      res.status(400).json({ 
        status: "error", 
        message: error instanceof Error ? error.message : "An unknown error occurred" 
      });
    }
  });

  // Analyze business text
  app.post("/api/ai/analyze", async (req, res) => {
    try {
      // Validate request
      const validated = analyzeTextSchema.parse(req.body);
      
      const analysis = await analyzeBusinessText(validated.text);
      res.status(200).json({
        status: "success",
        analysis
      });
    } catch (error) {
      console.error("Error analyzing text:", error);
      res.status(400).json({ 
        status: "error", 
        message: error instanceof Error ? error.message : "An unknown error occurred during analysis" 
      });
    }
  });

  // Generate business ideas
  app.post("/api/ai/ideas", async (req, res) => {
    try {
      // Validate request
      const validated = generateIdeasSchema.parse(req.body);
      
      const ideas = await generateBusinessIdeas(validated.industry, validated.goals);
      res.status(200).json({ 
        status: "success", 
        ideas 
      });
    } catch (error) {
      console.error("Error generating business ideas:", error);
      res.status(400).json({ 
        status: "error", 
        message: error instanceof Error ? error.message : "An unknown error occurred" 
      });
    }
  });

  // AI Chatbot endpoint (uses the same generate endpoint with specific context)
  app.post("/api/ai/chat", async (req, res) => {
    try {
      // Validate request
      const validated = generateContentSchema.parse(req.body);
      
      const result = await generateAiContent(validated as AiGenerationRequest);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error in AI chat:", error);
      res.status(400).json({ 
        status: "error", 
        message: error instanceof Error ? error.message : "An unknown error occurred in chat" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
