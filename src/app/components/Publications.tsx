import { motion } from 'motion/react';
import { BookOpen, Award, GraduationCap, Trophy } from 'lucide-react';

export function Publications() {
  const achievements = [
    {
      icon: BookOpen,
      category: 'Research Publication',
      title: 'Machine Learning Applications in Healthcare',
      organization: 'MAT Journals',
      description: 'Published research on applying machine learning algorithms for early disease detection and diagnostic systems.',
      year: '2024',
      color: 'from-[#2563EB] to-[#22D3EE]'
    },
    {
      icon: Trophy,
      category: 'National Hackathon',
      title: 'Smart India Hackathon - Grand Finalist',
      organization: 'Government of India',
      description: 'Three-time finalist in SIH, developing innovative solutions for national-level problems. Competed among 10,000+ teams nationwide.',
      year: '2024, 2025',
      color: 'from-[#22D3EE] to-[#A78BFA]'
    },
    {
      icon: Award,
      category: 'Professional Certification',
      title: 'Google Cloud Platform Training',
      organization: 'Google',
      description: 'Completed comprehensive training in cloud infrastructure, deployment, and scalable system design on GCP.',
      year: '2024',
      color: 'from-[#A78BFA] to-[#2563EB]'
    },
    {
      icon: GraduationCap,
      category: 'Academic Excellence',
      title: 'Data Science & Programming',
      organization: 'IIT Madras - NPTEL',
      description: 'Completed advanced courses in data science, machine learning, and Python programming with distinction.',
      year: '2025',
      color: 'from-[#2563EB] to-[#22D3EE]'
    },
    {
      icon: GraduationCap,
      category: 'Academic Excellence',
      title: 'Artificial Intelligence in Industrial and Management Engineering',
      organization: 'IIT Kanpur - NPTEL',
      description: 'Successfully completed the NPTEL course “Artificial Intelligence in Industrial and Management Engineering” with a consolidated score during Aug–Oct 2025.',
      year: '2025',
      color: 'from-[#2563EB] to-[#22D3EE]'
    },
    {
      icon: GraduationCap,
      category: 'Academic Excellence',
      title: 'Google Data Analytics Professional Certificate',
      organization: 'Google - Coursera',
      description: 'Earned the Google Data Analytics Professional Certificate on Coursera, mastering data cleaning, analysis, and visualization techniques using tools like python and SQL.',
      year: '2025',
      color: 'from-[#2563EB] to-[#22D3EE]'
    }

    
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-[#0B1220] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#A78BFA] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E5E7EB] mb-4">Publications & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] mx-auto rounded-full mb-4" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Recognition for research contributions and competitive excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-[#111827]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-6 hover:border-[#2563EB]/40 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[#22D3EE] mb-1">{achievement.category}</div>
                    <h3 className="text-[#E5E7EB] mb-1">{achievement.title}</h3>
                  </div>
                </div>
                <span className="text-[#9CA3AF] flex-shrink-0">{achievement.year}</span>
              </div>

              {/* Organization */}
              <div className="mb-4 px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-lg inline-block">
                <span className="text-[#E5E7EB]">{achievement.organization}</span>
              </div>

              {/* Description */}
              <p className="text-[#9CA3AF] leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-[#111827]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl px-8 py-4">
            <div className="text-center">
              <div className="text-[#E5E7EB] mb-1">1</div>
              <div className="text-[#9CA3AF]">Publication</div>
            </div>
            <div className="w-px h-12 bg-[#2563EB]/20" />
            <div className="text-center">
              <div className="text-[#E5E7EB] mb-1">3×</div>
              <div className="text-[#9CA3AF]">SIH Finalist</div>
            </div>
            <div className="w-px h-12 bg-[#2563EB]/20" />
            <div className="text-center">
              <div className="text-[#E5E7EB] mb-1">5+</div>
              <div className="text-[#9CA3AF]">Certifications</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
