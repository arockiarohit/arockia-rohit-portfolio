import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  "Languages": [
    { name: "Python", level: 90, color: "hsl(var(--tech-python))" },
    { name: "JavaScript", level: 70, color: "hsl(var(--tech-javascript))" },
    { name: "HTML5", level: 95, color: "hsl(var(--tech-html))" },
    { name: "CSS3", level: 90, color: "hsl(var(--tech-css))" },
    { name: "SQL", level: 85, color: "hsl(var(--primary))" }
  ],
  "Frameworks/Libraries": [
    { name: "Django", level: 85, color: "hsl(var(--tech-django))" },
    { name: "Flask", level: 80, color: "hsl(var(--tech-flask))" },
    { name: "Bootstrap", level: 90, color: "hsl(var(--secondary))" }
  ],
  "Web Technologies": [
    { name: "RESTful APIs", level: 85, color: "hsl(var(--accent))" },
    { name: "JSON", level: 90, color: "hsl(var(--primary))" }
  ],
  "Tools/Platforms": [
    { name: "Git", level: 85, color: "hsl(var(--destructive))" },
    { name: "GitHub", level: 85, color: "hsl(var(--foreground))" },
    { name: "Docker", level: 70, color: "hsl(var(--tech-docker))" },
    { name: "VS Code", level: 95, color: "hsl(var(--primary))" }
  ]
};

function SkillBar({ skill, index }: { skill: { name: string; level: number; color: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: skill.color }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="glass-effect p-6 h-full hover:shadow-2xl transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full group-hover:animate-pulse" />
                    <h3 className="text-xl font-bold text-primary">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skill.name} 
                        skill={skill} 
                        index={skillIndex} 
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Full Stack Development",
              "RESTful API Design",
              "Database Management",
              "Version Control",
              "Responsive Design",
              "Clean Code",
              "Problem Solving",
              "Team Collaboration"
            ].map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm tech-glow border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  {competency}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}