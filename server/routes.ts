import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  industry: z.string(),
  message: z.string().min(10),
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

  const httpServer = createServer(app);

  return httpServer;
}
