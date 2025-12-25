import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#0B1220]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE] rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#22D3EE] backdrop-blur-sm">
              Smart India Hackathon Grand Finalist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#E5E7EB] mb-4"
          >
            Nitish Gupta
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#9CA3AF] mb-6"
          >
            Data Scientist | Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#E5E7EB] mb-8 max-w-xl"
          >
            Building intelligent, data-driven systems that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/Nitishguptad.pdf" download="Nitish_Gupta_Resume.pdf">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-white hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="border-[#2563EB]/30 text-[#22D3EE] hover:bg-[#2563EB]/10"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Animated Code Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Code window mockup */}
            <div className="bg-[#111827]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-lg p-6 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-3 font-mono">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#9CA3AF]"
                >
                  <span className="text-[#22D3EE]">const</span>{' '}
                  <span className="text-[#E5E7EB]">developer</span> ={' '}
                  <span className="text-[#A78BFA]">{'{'}</span>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#9CA3AF] pl-4"
                >
                  name: <span className="text-[#34D399]">"Nitish Gupta"</span>,
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#9CA3AF] pl-4"
                >
                  role: <span className="text-[#34D399]">"Full-Stack Developer"</span>,
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#9CA3AF] pl-4"
                >
                  skills: [<span className="text-[#34D399]">"Python"</span>,{' '}
                  <span className="text-[#34D399]">"React"</span>,{' '}
                  <span className="text-[#34D399]">"ML"</span>],
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#9CA3AF] pl-4"
                >
                  passion: <span className="text-[#34D399]">"Building Impact"</span>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#9CA3AF]"
                >
                  <span className="text-[#A78BFA]">{'}'}</span>;
                </motion.div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#22D3EE] rounded-lg blur-xl opacity-50"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#A78BFA] to-[#2563EB] rounded-lg blur-xl opacity-50"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#2563EB]/30 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-1.5 bg-[#22D3EE] rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
