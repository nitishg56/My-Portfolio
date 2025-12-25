import { motion } from 'motion/react';
import { Briefcase, TrendingUp } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#0B1220] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#A78BFA] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E5E7EB] mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#22D3EE] to-[#A78BFA]" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 md:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#2563EB] to-[#22D3EE] rounded-full border-4 border-[#0B1220] z-10" />

            {/* Content */}
            <div className="md:grid md:grid-cols-2 md:gap-8 ml-8 md:ml-0">
              {/* Left side - Company info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="md:text-right mb-4 md:mb-0 md:pr-12"
              >
                <div className="inline-block md:block">
                  <div className="flex md:justify-end items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#22D3EE] rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-[#E5E7EB] mb-1">Software Intern</h3>
                  <div className="text-[#22D3EE] mb-2">Jayaswal NECO Industries</div>
                  <div className="text-[#9CA3AF]">June 2024 - August 2024</div>
                </div>
              </motion.div>

              {/* Right side - Role details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="md:pl-12"
              >
                <div className="bg-[#111827]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-6 hover:border-[#2563EB]/40 transition-all">
                  <p className="text-[#E5E7EB] mb-4 leading-relaxed">
                    Developed and deployed an <span className="text-[#22D3EE]">enterprise communication automation system</span> serving 8,000+ employees across multiple departments.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-[#9CA3AF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0" />
                      <span>Engineered automated email scheduling system using <span className="text-[#E5E7EB]">Python, Oracle DB, SMTP, and Cron</span></span>
                    </div>
                    <div className="flex items-start gap-3 text-[#9CA3AF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0" />
                      <span>Implemented robust error handling and logging for mission-critical operations</span>
                    </div>
                    <div className="flex items-start gap-3 text-[#9CA3AF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0" />
                      <span>Integrated with existing Oracle database infrastructure for seamless data flow</span>
                    </div>
                  </div>

                  {/* Impact metric */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#2563EB]/20">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-[#22D3EE]/10 rounded-lg border border-[#22D3EE]/20">
                      <TrendingUp className="h-4 w-4 text-[#22D3EE]" />
                      <span className="text-[#E5E7EB]">+40%</span>
                      <span className="text-[#9CA3AF]">engagement increase</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
