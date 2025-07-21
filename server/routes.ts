import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      // Here you could also integrate with email services like Mailgun, SendGrid, etc.
      // Example: await sendNotificationEmail(lead);
      
      res.json({ 
        success: true, 
        message: "Thank you! We'll contact you within 24 hours to schedule your free audit.",
        leadId: lead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      } else {
        console.error("Lead creation error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again or contact us directly." 
        });
      }
    }
  });

  // Contact form endpoint (for general inquiries)
  app.post("/api/contact", async (req, res) => {
    try {
      const contactSchema = insertLeadSchema.extend({
        message: z.string().min(1, "Message is required"),
      });
      
      const validatedData = contactSchema.parse(req.body);
      const lead = await storage.createLead({
        ...validatedData,
        source: "contact_form"
      });
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        leadId: lead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again or contact us directly." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
