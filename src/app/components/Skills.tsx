import { motion } from 'motion/react';
import { Code2, Database, Cloud, BarChart3 } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Web',
      icon: Code2,
      color: 'from-[#2563EB] to-[#22D3EE]',
      skills: ['Python', 'JavaScript', 'React.js', 'Node.js', 'Express', 'HTML/CSS', 'Tailwind CSS', 'C++']
    },
    {
      title: 'Data Science & ML',
      icon: BarChart3,
      color: 'from-[#22D3EE] to-[#A78BFA]',
      skills: ['TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'CNN', 'Deep Learning', 'Statistical Analysis']
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      color: 'from-[#A78BFA] to-[#2563EB]',
      skills: ['MongoDB', 'MySQL', 'Oracle DB', 'PostgreSQL', 'Firebase', 'Google Cloud Platform']
    },
    {
      title: 'Tools & Visualization',
      icon: Cloud,
      color: 'from-[#2563EB] to-[#22D3EE]',
      skills: ['Git/GitHub', 'Tableau', 'Power BI', 'Excel', 'Jupyter', 'VS Code', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#111827] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22D3EE] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E5E7EB] mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#0B1220]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-8 hover:border-[#2563EB]/40 transition-all group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-[#E5E7EB]">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-[#111827]/50 border border-[#2563EB]/20 rounded-lg text-[#E5E7EB] hover:bg-[#2563EB]/10 hover:border-[#22D3EE]/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies. Focused on building scalable, production-ready solutions with modern best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
