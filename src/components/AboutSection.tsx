import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-effect p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-primary">
                  Full Stack Developer
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am Arockia Rohit, detail-oriented and results-driven Python Full Stack Developer with practical experience in designing, developing, testing, and deploying scalable, responsive, and user-centric web applications.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Proficient in Python, Django, Flask, HTML5, CSS3, Bootstrap and foundational knowledge of JavaScript. Experienced in building RESTful APIs, implementing CRUD operations, managing relational databases (SQL/MySQL) and using Git and GitHub for version control and collaboration.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Possess a basic understanding of Docker containers. Dedicated to writing clean, maintainable code and delivering efficient, business-focused solutions.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Experience highlights */}
            <div className="grid gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-6 rounded-lg border-l-4 border-primary"
              >
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Web Development Expertise
                </h4>
                <p className="text-muted-foreground">
                  Specialized in creating responsive, scalable web applications with modern frameworks and best practices.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-6 rounded-lg border-l-4 border-secondary"
              >
                <h4 className="text-lg font-semibold text-secondary mb-2">
                  API Development
                </h4>
                <p className="text-muted-foreground">
                  Experienced in building robust RESTful APIs and implementing comprehensive CRUD operations.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-6 rounded-lg border-l-4 border-accent"
              >
                <h4 className="text-lg font-semibold text-accent mb-2">
                  Database Management
                </h4>
                <p className="text-muted-foreground">
                  Proficient in managing relational databases and optimizing data structures for performance.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect p-4 rounded-lg"
              >
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect p-4 rounded-lg"
              >
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}