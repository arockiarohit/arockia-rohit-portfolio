import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Intervia-Tourism",
    description: "Developed a responsive tourism website to showcase destinations, hotels, restaurants, and parks with interactive pages and image galleries. Designed a user-friendly navigation system with dropdowns and ensured cross-device compatibility through responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/username/Intervia-Tourism",
    image: "/api/placeholder/400/250",
    features: [
      "Interactive image galleries",
      "Responsive design for all devices", 
      "User-friendly navigation with dropdowns",
      "Destination showcase pages",
      "Hotels and restaurants directory"
    ]
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="glass-effect overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30"
            >
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </motion.div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                  className="text-sm text-muted-foreground flex items-center space-x-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 tech-glow"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my development projects and technical achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Card className="glass-effect p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and expanding my portfolio. 
              Stay tuned for more exciting developments in web application design and development.
            </p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch for Collaborations
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}