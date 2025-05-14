import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

interface ContentGenerationFormData {
  prompt: string;
  businessContext: string;
  tone: string;
}

interface TextAnalysisFormData {
  text: string;
}

interface IdeaGenerationFormData {
  industry: string;
  goals: string;
}

export default function AiDemo() {
  // State for the content generation form
  const [contentForm, setContentForm] = useState<ContentGenerationFormData>({
    prompt: '',
    businessContext: '',
    tone: 'professional',
  });

  // State for the text analysis form
  const [analysisForm, setAnalysisForm] = useState<TextAnalysisFormData>({
    text: '',
  });

  // State for the idea generation form
  const [ideaForm, setIdeaForm] = useState<IdeaGenerationFormData>({
    industry: '',
    goals: '',
  });

  // State for results
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [businessIdeas, setBusinessIdeas] = useState<string[]>([]);

  // Content generation mutation
  const contentMutation = useMutation({
    mutationFn: (data: ContentGenerationFormData) =>
      apiRequest('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
    onSuccess: (data) => {
      setGeneratedContent(data.generatedText);
      toast({
        title: 'Content Generated',
        description: 'Your AI content has been successfully generated.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to generate content',
        variant: 'destructive',
      });
    },
  });

  // Text analysis mutation
  const analysisMutation = useMutation({
    mutationFn: (data: TextAnalysisFormData) =>
      apiRequest('/api/ai/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
    onSuccess: (data) => {
      setAnalysisResult(data.analysis);
      toast({
        title: 'Analysis Complete',
        description: 'Your text has been analyzed successfully.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to analyze text',
        variant: 'destructive',
      });
    },
  });

  // Idea generation mutation
  const ideaMutation = useMutation({
    mutationFn: (data: IdeaGenerationFormData) =>
      apiRequest('/api/ai/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
    onSuccess: (data) => {
      setBusinessIdeas(data.ideas);
      toast({
        title: 'Ideas Generated',
        description: 'Your AI business ideas have been generated.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to generate ideas',
        variant: 'destructive',
      });
    },
  });

  // Form handlers
  const handleContentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contentMutation.mutate(contentForm);
  };

  const handleAnalysisSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analysisMutation.mutate(analysisForm);
  };

  const handleIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ideaMutation.mutate(ideaForm);
  };

  return (
    <section id="ai-demo" className="py-20 bg-[hsl(var(--light-gray))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-[hsl(var(--primary))] rounded-full uppercase tracking-wide mb-3">
            Interactive Demonstration
          </span>

          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] bg-clip-text text-transparent">
            Experience AI in Action
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Try our AI tools below to see how AI4Business can transform your operations. These demos
            showcase the power and versatility of our business AI solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="content" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="content">Content Generation</TabsTrigger>
            <TabsTrigger value="analysis">Business Text Analysis</TabsTrigger>
            <TabsTrigger value="ideas">AI Business Ideas</TabsTrigger>
          </TabsList>

          {/* Content Generation Tab */}
          <TabsContent value="content">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Content Generation</CardTitle>
                  <CardDescription>
                    Create professional business content with our AI assistant. Perfect for
                    marketing, communications, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContentSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="prompt">What would you like the AI to write about?</Label>
                      <Textarea
                        id="prompt"
                        placeholder="e.g., Write a professional email to clients about our new service launch"
                        value={contentForm.prompt}
                        onChange={(e) => setContentForm({ ...contentForm, prompt: e.target.value })}
                        className="min-h-[80px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="context">Business Context (Optional)</Label>
                      <Textarea
                        id="context"
                        placeholder="e.g., We are a financial services company launching a new investment app"
                        value={contentForm.businessContext}
                        onChange={(e) =>
                          setContentForm({ ...contentForm, businessContext: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tone">Tone</Label>
                      <Select
                        value={contentForm.tone}
                        onValueChange={(value) => setContentForm({ ...contentForm, tone: value })}
                      >
                        <SelectTrigger id="tone">
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="persuasive">Persuasive</SelectItem>
                          <SelectItem value="informative">Informative</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={contentMutation.isPending}
                    >
                      {contentMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Content...
                        </>
                      ) : (
                        'Generate Content'
                      )}
                    </Button>
                  </form>

                  {generatedContent && (
                    <motion.div
                      variants={itemVariants}
                      className="mt-8 p-4 bg-white rounded-md border"
                    >
                      <h3 className="font-semibold text-lg mb-2 text-[hsl(var(--primary))]">
                        Generated Content:
                      </h3>
                      <div className="whitespace-pre-line">{generatedContent}</div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Text Analysis Tab */}
          <TabsContent value="analysis">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Business Text Analysis</CardTitle>
                  <CardDescription>
                    Get AI-powered insights from your business documents, reports, or communications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAnalysisSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="analysis-text">Text to Analyze</Label>
                      <Textarea
                        id="analysis-text"
                        placeholder="Paste your business text here for AI analysis..."
                        value={analysisForm.text}
                        onChange={(e) => setAnalysisForm({ ...analysisForm, text: e.target.value })}
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={analysisMutation.isPending}
                    >
                      {analysisMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                        </>
                      ) : (
                        'Analyze Text'
                      )}
                    </Button>
                  </form>

                  {analysisResult && (
                    <motion.div
                      variants={itemVariants}
                      className="mt-8 p-4 bg-white rounded-md border"
                    >
                      <h3 className="font-semibold text-lg mb-2 text-[hsl(var(--primary))]">
                        Analysis Results:
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Main Topics:</h4>
                          <ul className="list-disc list-inside">
                            {analysisResult.topics?.map((topic: string, index: number) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Sentiment:</h4>
                          <p>
                            {analysisResult.sentiment} (Score:{' '}
                            {typeof analysisResult.score === 'number'
                              ? analysisResult.score.toFixed(2)
                              : analysisResult.score}
                            )
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Key Action Items:</h4>
                          <ul className="list-disc list-inside">
                            {analysisResult.actionItems?.map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Suggestions:</h4>
                          <ul className="list-disc list-inside">
                            {analysisResult.suggestions?.map((suggestion: string, index: number) => (
                              <li key={index}>{suggestion}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Business Ideas Tab */}
          <TabsContent value="ideas">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>AI Business Ideas Generator</CardTitle>
                  <CardDescription>
                    Discover innovative ways to implement AI in your specific industry and achieve
                    your business goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleIdeaSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Your Industry</Label>
                      <Input
                        id="industry"
                        placeholder="e.g., Financial Services, Healthcare, Retail"
                        value={ideaForm.industry}
                        onChange={(e) => setIdeaForm({ ...ideaForm, industry: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals">Business Goals</Label>
                      <Textarea
                        id="goals"
                        placeholder="e.g., Increase customer retention, Reduce operational costs, Improve decision-making"
                        value={ideaForm.goals}
                        onChange={(e) => setIdeaForm({ ...ideaForm, goals: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={ideaMutation.isPending}>
                      {ideaMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Ideas...
                        </>
                      ) : (
                        'Generate AI Implementation Ideas'
                      )}
                    </Button>
                  </form>

                  {businessIdeas.length > 0 && (
                    <motion.div
                      variants={itemVariants}
                      className="mt-8 space-y-4"
                    >
                      <h3 className="font-semibold text-lg text-[hsl(var(--primary))]">
                        AI Implementation Ideas:
                      </h3>

                      {businessIdeas.map((idea, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="p-4 bg-white rounded-md border"
                          dangerouslySetInnerHTML={{ 
                            __html: idea.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 p-8 rounded-2xl inline-block max-w-3xl">
            <h3 className="text-xl font-bold mb-4 text-[hsl(var(--primary))]">
              This is just a preview of what AI can do for your business
            </h3>
            <p className="text-gray-600 mb-6">
              Our custom AI solutions go far beyond these demonstrations. Contact us to explore how
              we can implement these capabilities and more directly into your business operations.
            </p>
            <a href="#contact">
              <Button 
                size="lg" 
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-light))]"
              >
                Schedule a Consultation
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}