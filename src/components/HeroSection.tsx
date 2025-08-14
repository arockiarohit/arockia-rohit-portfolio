import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-xl md:text-2xl text-primary font-medium">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">
              Arockia Rohit
            </h1>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              Python Full Stack Developer
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Crafting scalable, responsive, and user-centric web applications with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg tech-glow group"
            >
              <span className="mr-2">Get In Touch</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Button>
            
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-slow"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse-slow"
            />
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}