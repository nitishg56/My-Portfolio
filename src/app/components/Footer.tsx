import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t border-[#2563EB]/20 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="text-[#9CA3AF] text-center md:text-left">
            © 2024 Nitish Gupta. All rights reserved.
          </div>

          {/* Made with */}
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-[#22D3EE] fill-[#22D3EE]" />
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
