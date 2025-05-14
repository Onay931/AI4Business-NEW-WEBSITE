import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="gradient-bg py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-white/90 mb-8">
            The time for deliberation is over; the time for action is now. Don't risk being left behind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact">
              <Button variant="gold" size="lg">
                Schedule a Free Consultation
              </Button>
            </a>
            <a href="#services">
              <Button variant="white" size="lg">
                Explore Our Solutions
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
