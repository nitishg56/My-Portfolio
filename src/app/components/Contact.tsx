import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: formData.name.trim() === '' ? 'Name is required' : '',
      email: formData.email.trim() === '' ? 'Email is required' : !validateEmail(formData.email) ? 'Invalid email format' : '',
      message: formData.message.trim() === '' ? 'Message is required' : ''
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nitish.gupta888990@gmail.com',
      href: 'mailto:nitish.gupta888990@gmail.com',
      color: 'from-[#2563EB] to-[#22D3EE]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nitishgupta',
      href: 'https://linkedin.com',
      color: 'from-[#22D3EE] to-[#A78BFA]'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/nitishgupta',
      href: 'https://github.com',
      color: 'from-[#A78BFA] to-[#2563EB]'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#111827] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22D3EE] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E5E7EB] mb-4">Let's Build Something Impactful</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] mx-auto rounded-full mb-4" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Open to opportunities in data science, full-stack development, and innovative tech projects. Let's connect and create something meaningful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#0B1220]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-8">
              <h3 className="text-[#E5E7EB] mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#9CA3AF] mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#111827]/50 border-[#2563EB]/20 text-[#E5E7EB] focus:border-[#22D3EE]"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#9CA3AF] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#111827]/50 border-[#2563EB]/20 text-[#E5E7EB] focus:border-[#22D3EE]"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#9CA3AF] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#111827]/50 border-[#2563EB]/20 text-[#E5E7EB] focus:border-[#22D3EE] min-h-[150px]"
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-white hover:opacity-90 transition-opacity"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[#0B1220]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-8">
              <h3 className="text-[#E5E7EB] mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-[#111827]/50 border border-[#2563EB]/20 rounded-lg hover:border-[#2563EB]/40 transition-all group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[#9CA3AF]">{link.label}</div>
                      <div className="text-[#E5E7EB]">{link.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-[#0B1220]/50 backdrop-blur-xl border border-[#2563EB]/20 rounded-xl p-8">
              <h3 className="text-[#E5E7EB] mb-4">Quick Info</h3>
              <div className="space-y-3 text-[#9CA3AF]">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0" />
                  <span>Available for full-time opportunities starting Summer 2025</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0" />
                  <span>Open to remote and hybrid work arrangements</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0" />
                  <span>Interested in Data Science, ML, and Full-Stack roles</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
