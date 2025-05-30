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
      text: "Hello! I'm the AI4Business assistant. I can help you understand how AI can transform your business. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: (userMessage: string) => {
      const contextualPrompt = `You are an AI assistant for AI4Business South Africa, a company that provides custom AI solutions for businesses. The user asked: "${userMessage}"

Please respond helpfully and professionally. Focus on:
- How AI can benefit businesses in South Africa
- AI4Business's services (Strategic AI Transformation, Custom AI Development, Seamless Integration, Talent Acceleration, Performance Maximization, Secure & Compliant AI)
- Industry applications (Manufacturing, Financial Services, Healthcare, Retail, Mining & Resources, Agriculture)
- Practical benefits and ROI

Keep responses concise (2-3 sentences max) and encouraging. Always relate back to business value.`;

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
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Ask about AI solutions for your business..."
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
                  <div className="mt-2 flex justify-center">
                    <a
                      href="https://wa.me/0692992530"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      Need immediate help? WhatsApp us
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