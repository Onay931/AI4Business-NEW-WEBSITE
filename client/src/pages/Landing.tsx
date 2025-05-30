import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon, RobotIcon, CheckCircleIcon } from "@/assets/icons";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary-light))] to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/images/logo.png"
              alt="AI4Business Logo" 
              className="h-16 w-auto mr-4"
            />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-2">
                AI4BUSINESS
              </h1>
              <p className="text-xl text-white/80">SOUTH AFRICA</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions designed for South African enterprises
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <RobotIcon className="w-12 h-12 mb-4 text-[hsl(var(--gold))]" />
              <CardTitle>AI-Powered Solutions</CardTitle>
              <CardDescription className="text-white/70">
                Custom AI tools tailored for your specific business needs
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CheckCircleIcon className="w-12 h-12 mb-4 text-[hsl(var(--gold))]" />
              <CardTitle>Proven Results</CardTitle>
              <CardDescription className="text-white/70">
                Increase efficiency by 30% and reduce operational costs significantly
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <ArrowRightIcon className="w-12 h-12 mb-4 text-[hsl(var(--gold))]" />
              <CardTitle>Easy Integration</CardTitle>
              <CardDescription className="text-white/70">
                Seamless implementation without disrupting your current operations
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Login Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="max-w-md mx-auto bg-white">
            <CardHeader>
              <CardTitle className="text-[hsl(var(--primary))]">Get Started Today</CardTitle>
              <CardDescription>
                Access our AI platform and transform your business operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/api/login">
                <Button 
                  size="lg" 
                  className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-light))] text-white font-semibold"
                >
                  Sign In with Replit
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Secure authentication powered by Replit
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 text-white/70"
        >
          <p>© 2025 AI4Business South Africa. All rights reserved.</p>
          <p className="mt-2">Empowering South African businesses with AI innovation</p>
        </motion.div>
      </div>
    </div>
  );
}