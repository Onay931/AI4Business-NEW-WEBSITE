import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AiChatbot from './AiChatbot';

export default function ChatbotToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <Button
              onClick={toggleChatbot}
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle size={24} className="text-white group-hover:scale-110 transition-transform" />
              
              {/* Notification Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">AI</span>
              </div>
              
              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-full bg-[hsl(var(--primary))] opacity-20 animate-ping"></div>
            </Button>
            
            {/* Tooltip */}
            <div className="absolute bottom-16 right-0 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat with our AI Assistant
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Component */}
      <AnimatePresence>
        <AiChatbot isOpen={isOpen} onToggle={toggleChatbot} />
      </AnimatePresence>
    </>
  );
}