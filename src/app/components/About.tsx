import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Target } from 'lucide-react';

export function About() {
  const stats = [
    { icon: GraduationCap, label: 'CGPA', value: '8.35', color: 'from-[#2563EB] to-[#22D3EE]' },
    { icon: Award, label: 'SIH Finalist', value: '3×', color: 'from-[#22D3EE] to-[#A78BFA]' },
    { icon: BookOpen, label: 'Publications', value: '1', color: 'from-[#A78BFA] to-[#2563EB]' },
    { icon: Target, label: 'Projects', value: '10+', color: 'from-[#2563EB] to-[#22D3EE]' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#0B1220] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E5E7EB] mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#111827]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-6 hover:border-[#2563EB]/40 transition-all group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-[#E5E7EB] mb-1">{stat.value}</div>
                <div className="text-[#9CA3AF]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[#111827]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-8">
              <p className="text-[#E5E7EB] mb-4 leading-relaxed">
                I'm a B.Tech Computer Science student specializing in <span className="text-[#22D3EE]">Data Science</span>, <span className="text-[#22D3EE]">Analytics</span>, and <span className="text-[#22D3EE]">Full-Stack Development</span>. With a strong foundation in machine learning and enterprise systems, I build solutions that solve real-world problems.
              </p>
              <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                As a three-time <span className="text-[#E5E7EB]">Smart India Hackathon finalist</span>, I've demonstrated my ability to tackle complex challenges at a national level. My work spans from automating communication systems for 8,000+ employees to developing AI-powered diagnostic tools.
              </p>
              <p className="text-[#9CA3AF] leading-relaxed">
                I'm passionate about creating <span className="text-[#E5E7EB]">intelligent, scalable systems</span> that leverage data science and modern web technologies. My research publication in <span className="text-[#E5E7EB]">MAT Journals</span> reflects my commitment to contributing to the broader technical community.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-3">
              {[
                'Published researcher in data science and machine learning',
                'Smart India Hackathon 2024 Grand Finalist',
                'Experienced in enterprise automation and system integration',
                'Passionate about building production-ready, impactful solutions'
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-[#9CA3AF]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
