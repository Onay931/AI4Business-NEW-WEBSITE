import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Minimize2, Maximize2, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function AiChatbot({ isOpen, onToggle }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your AI4Business assistant. I can help you with service inquiries, pricing information, and guide you through our AI solutions. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { id: 'pricing', text: 'Pricing Information', icon: '💰' },
    { id: 'services', text: 'Our Services', icon: '🔧' },
    { id: 'minipc', text: 'AI Mini PC Details', icon: '💻' },
    { id: 'consultation', text: 'Book Consultation', icon: '📅' },
    { id: 'contact', text: 'Contact Information', icon: '📞' },
  ];

  const handleQuickAction = (actionId: string) => {
    let responseText = '';
    let userMessage = '';

    switch (actionId) {
      case 'pricing':
        userMessage = 'Tell me about your pricing';
        responseText = 'Our AI solutions are customized for each business, so pricing varies based on your specific needs. We offer competitive rates with 30-50% savings compared to traditional solutions. Would you like to schedule a consultation to discuss pricing for your specific requirements?';
        break;
      case 'services':
        userMessage = 'What services do you offer?';
        responseText = 'We provide comprehensive AI services: Strategic AI Transformation, Custom AI Development, Seamless Integration, Talent Acceleration, Performance Maximization, and Secure & Compliant AI solutions. We also offer our exclusive AI Mini PC for clients. Which service interests you most?';
        break;
      case 'minipc':
        userMessage = 'Tell me about the AI Mini PC';
        responseText = 'Our Custom AI Mini PC features AMD Ryzen 9 CPU with NPU, up to 128GB DDR5 RAM, and dual OS support. It\'s exclusively available to our clients at 30-50% less cost than traditional alternatives. Perfect for businesses wanting dedicated AI hardware. Would you like detailed specifications?';
        break;
      case 'consultation':
        userMessage = 'I want to book a consultation';
        responseText = 'I\'d be happy to help you book a consultation! You can reach out via WhatsApp at +27 69 299 2530 or through our contact form. Our team will assess your business needs and propose tailored AI solutions. What\'s the best way to contact you?';
        break;
      case 'contact':
        userMessage = 'How can I contact you?';
        responseText = 'You can reach us via WhatsApp at +27 69 299 2530, visit us in Linksfield, Johannesburg, or use our contact form. Office hours: Mon-Thu 9AM-7PM, Fri 9AM-3PM, Sunday by special request. What\'s your preferred contact method?';
        break;
    }

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString() + '-user',
      text: userMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    // Add AI response
    const aiMsg: ChatMessage = {
      id: Date.now().toString() + '-ai',
      text: responseText,
      sender: 'ai',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setShowQuickActions(false);
  };

  const chatMutation = useMutation({
    mutationFn: (userMessage: string) => {
      const contextualPrompt = `You are an AI assistant for AI4Business South Africa, a company providing custom AI solutions. The user asked: "${userMessage}"

Respond professionally focusing on:
- AI4Business services: Strategic AI Transformation, Custom AI Development, Seamless Integration, Talent Acceleration, Performance Maximization, Secure & Compliant AI
- Custom AI Mini PC (AMD Ryzen 9, NPU, 128GB DDR5, exclusive to clients, 30-50% cost savings)
- Industries: Manufacturing, Financial Services, Healthcare, Retail, Mining, Agriculture
- Business location: Linksfield, Johannesburg
- Contact: WhatsApp +27 69 299 2530
- Hours: Mon-Thu 9AM-7PM, Fri 9AM-3PM, Sunday by request

Keep responses concise and business-focused. Always offer next steps.`;

      return apiRequest('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: contextualPrompt,
          tone: 'professional',
          businessContext: 'AI4Business South Africa - Custom AI solutions provider',
        }),
      });
    },
    onSuccess: (data) => {
      if (data && data.generatedText) {
        const aiMessage: ChatMessage = {
          id: Date.now().toString() + '-ai',
          text: data.generatedText,
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    },
    onError: (error) => {
      const errorMessage: ChatMessage = {
        id: Date.now().toString() + '-error',
        text: 'I apologize, but I encountered an issue. Please try again or contact us directly via WhatsApp.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    },
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || chatMutation.isPending) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    chatMutation.mutate(inputText.trim());
    setInputText('');
    setShowQuickActions(false);
  };

  const handleClose = () => {
    onToggle();
    setIsMinimized(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed bottom-4 right-4 z-50 w-80 sm:w-96"
    >
      <Card className="shadow-2xl border-0 bg-white">
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">AI4Business Assistant</CardTitle>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMinimize}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                <X size={14} />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Chat Content */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {/* Quick Action Buttons */}
                  {showQuickActions && messages.length <= 1 && (
                    <div className="space-y-3">
                      <div className="text-center text-sm text-gray-600 mb-3">
                        Quick actions to get started:
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {quickActions.map((action) => (
                          <button
                            key={action.id}
                            onClick={() => handleQuickAction(action.id)}
                            className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-[hsl(var(--primary))] hover:bg-blue-50 transition-colors text-left"
                          >
                            <span className="text-lg">{action.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{action.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-[hsl(var(--primary))] text-white'
                            : 'bg-white shadow-sm border'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === 'ai' && (
                            <div className="w-6 h-6 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot size={12} className="text-white" />
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                              }`}
                            >
                              {message.timestamp.toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </p>
                          </div>
                          {message.sender === 'user' && (
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <User size={12} className="text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {chatMutation.isPending && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white shadow-sm border rounded-lg p-3 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
                          <Bot size={12} className="text-white" />
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <div className="p-4 border-t bg-white">
                  {!showQuickActions && (
                    <div className="mb-3">
                      <button
                        onClick={() => setShowQuickActions(true)}
                        className="text-xs text-[hsl(var(--primary))] hover:underline"
                      >
                        Show quick actions
                      </button>
                    </div>
                  )}
                  
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Ask about AI solutions, pricing, or services..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      disabled={chatMutation.isPending}
                      className="flex-1 text-sm"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      disabled={chatMutation.isPending || !inputText.trim()}
                      className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-light))]"
                    >
                      <Send size={14} />
                    </Button>
                  </form>
                  
                  <div className="mt-3 flex justify-between items-center text-xs">
                    <a
                      href="https://wa.me/0692992530"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      WhatsApp: +27 69 299 2530
                    </a>
                    <a
                      href="#contact"
                      onClick={handleClose}
                      className="text-gray-500 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      Contact Form
                    </a>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}