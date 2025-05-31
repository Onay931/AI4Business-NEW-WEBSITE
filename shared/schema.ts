import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

// Session storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// Contact inquiries table
export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  message: text("message").notNull(),
  inquiryType: varchar("inquiry_type", { length: 100 }), // 'general', 'ai_minipc', 'consultation', etc.
  status: varchar("status", { length: 50 }).default("new"), // 'new', 'in_progress', 'completed'
  createdAt: timestamp("created_at").defaultNow(),
  respondedAt: timestamp("responded_at"),
});

// AI chatbot conversations table
export const chatConversations = pgTable("chat_conversations", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 255 }).notNull(),
  userMessage: text("user_message").notNull(),
  aiResponse: text("ai_response").notNull(),
  responseTime: integer("response_time"), // in milliseconds
  createdAt: timestamp("created_at").defaultNow(),
});

// AI Mini PC inquiries table
export const miniPcInquiries = pgTable("minipc_inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  configurationRequested: jsonb("configuration_requested"), // Store custom specs
  businessUseCase: text("business_use_case"),
  estimatedBudget: varchar("estimated_budget", { length: 100 }),
  timeframe: varchar("timeframe", { length: 100 }),
  status: varchar("status", { length: 50 }).default("pending"), // 'pending', 'quoted', 'approved', 'delivered'
  createdAt: timestamp("created_at").defaultNow(),
  quotedAt: timestamp("quoted_at"),
  quotedPrice: varchar("quoted_price", { length: 100 }),
});

// Business consultation requests table
export const consultationRequests = pgTable("consultation_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  industry: varchar("industry", { length: 100 }),
  businessSize: varchar("business_size", { length: 100 }), // 'startup', 'small', 'medium', 'enterprise'
  aiExperience: varchar("ai_experience", { length: 100 }), // 'none', 'basic', 'intermediate', 'advanced'
  objectives: text("objectives"), // What they want to achieve with AI
  currentChallenges: text("current_challenges"),
  preferredDate: timestamp("preferred_date"),
  preferredTime: varchar("preferred_time", { length: 50 }),
  consultationType: varchar("consultation_type", { length: 100 }), // 'virtual', 'in_person', 'phone'
  status: varchar("status", { length: 50 }).default("pending"), // 'pending', 'scheduled', 'completed', 'cancelled'
  scheduledAt: timestamp("scheduled_at"),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Service demo requests table
export const demoRequests = pgTable("demo_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  serviceInterest: varchar("service_interest", { length: 100 }), // Which AI service they're interested in
  demoType: varchar("demo_type", { length: 100 }), // 'content_generation', 'text_analysis', 'business_ideas'
  inputData: text("input_data"), // What they tested in the demo
  outputData: text("output_data"), // What the AI generated for them
  userFeedback: text("user_feedback"),
  followUpRequested: boolean("follow_up_requested").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Export types for the new tables
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = typeof contactInquiries.$inferInsert;

export type ChatConversation = typeof chatConversations.$inferSelect;
export type InsertChatConversation = typeof chatConversations.$inferInsert;

export type MiniPcInquiry = typeof miniPcInquiries.$inferSelect;
export type InsertMiniPcInquiry = typeof miniPcInquiries.$inferInsert;

export type ConsultationRequest = typeof consultationRequests.$inferSelect;
export type InsertConsultationRequest = typeof consultationRequests.$inferInsert;

export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertDemoRequest = typeof demoRequests.$inferInsert;
