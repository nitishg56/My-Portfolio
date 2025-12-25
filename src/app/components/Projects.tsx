import { motion } from 'motion/react';
import { ExternalLink, Github, Leaf, Database, MessageSquare, Shield } from 'lucide-react';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: 'DBT Awareness & Verification Portal',
      icon: Shield,
      description: 'Comprehensive web platform for Direct Benefit Transfer awareness and government scheme verification.',
      problem: 'Lack of centralized information about DBT schemes leading to low awareness and fraudulent claims.',
      solution: 'Built a full-stack portal with real-time verification, educational resources, and scheme discovery features.',
      impact: 'Enhanced transparency and accessibility to 100+ government schemes for citizens nationwide.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
      github: 'https://github.com/nitishg56/DBT-Aadhar-Awareness-Website-',
      demo: 'https://dbt-bxvo.onrender.com/',
      color: 'from-[#2563EB] to-[#22D3EE]'
    },
    {
      title: 'Plant Disease Recognition System',
      icon: Leaf,
      description: 'AI-powered diagnostic tool for early detection of plant diseases using deep learning.',
      problem: 'Farmers struggle with early disease detection, leading to crop loss and reduced yield.',
      solution: 'Developed CNN-based image classification model using TensorFlow with 94% accuracy across 38 disease classes.',
      impact: 'Enables farmers to detect diseases early, reducing potential crop loss by up to 30%.',
      tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Flask'],
      github: '#',
      demo: '#',
      color: 'from-[#22D3EE] to-[#34D399]'
    },
    {
      title: 'Scholarship Disbursement System',
      icon: Database,
      description: 'Smart India Hackathon 2024 project for automating scholarship distribution and tracking.',
      problem: 'Manual scholarship processing causes delays, errors, and lack of transparency in fund disbursement.',
      solution: 'Created automated system with eligibility verification, payment tracking, and real-time analytics dashboard.',
      impact: 'Streamlined processing for 10,000+ applications with 85% reduction in processing time.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Chart.js'],
      github: 'https://github.com/nitishg56/pmsss',
      demo: '#',
      color: 'from-[#A78BFA] to-[#2563EB]'
    },
    {
      title: 'Real-Time Chat Application',
      icon: MessageSquare,
      description: 'Full-featured MERN stack chat application with real-time messaging and user authentication.',
      problem: 'Need for scalable, secure real-time communication platform with modern features.',
      solution: 'Built using Socket.io for WebSocket connections, JWT authentication, and optimized MongoDB queries.',
      impact: 'Supports 500+ concurrent users with sub-100ms message latency.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
      github: '#',
      demo: '#',
      color: 'from-[#2563EB] to-[#A78BFA]'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#111827] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22D3EE] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E5E7EB] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] mx-auto rounded-full mb-4" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Production-ready applications solving real-world problems with measurable impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-[#0B1220]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl overflow-hidden hover:border-[#2563EB]/40 transition-all group"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#E5E7EB] mb-2">{project.title}</h3>
                    <p className="text-[#9CA3AF]">{project.description}</p>
                  </div>
                </div>

                {/* Problem → Solution → Impact */}
                <div className="space-y-3 mb-6">
                  <div className="bg-[#111827]/50 rounded-lg p-3 border border-[#2563EB]/10">
                    <div className="text-[#22D3EE] mb-1">Problem</div>
                    <p className="text-[#9CA3AF]">{project.problem}</p>
                  </div>
                  <div className="bg-[#111827]/50 rounded-lg p-3 border border-[#2563EB]/10">
                    <div className="text-[#22D3EE] mb-1">Solution</div>
                    <p className="text-[#9CA3AF]">{project.solution}</p>
                  </div>
                  <div className="bg-[#111827]/50 rounded-lg p-3 border border-[#2563EB]/10">
                    <div className="text-[#22D3EE] mb-1">Impact</div>
                    <p className="text-[#9CA3AF]">{project.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-[#9CA3AF] mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-md text-[#E5E7EB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-[#2563EB]/30 text-[#22D3EE] hover:bg-[#2563EB]/10"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#2563EB]/30 text-[#22D3EE] hover:bg-[#2563EB]/10"
                      disabled
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#2563EB]/30 text-[#22D3EE] hover:bg-[#2563EB]/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
