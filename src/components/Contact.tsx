import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chemical.aarthi@gmail.com',
      link: 'mailto:chemical.aarthi@gmail.com',
      color: 'from-cyan-500 to-blue-600',
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9789068734',
      link: 'tel:+919789068734',
      color: 'from-emerald-500 to-teal-600',
      copyable: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India',
      link: null,
      color: 'from-purple-500 to-pink-600',
      copyable: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'aarthi-kannan-743a71181',
      link: 'https://www.linkedin.com/in/aarthi-kannan-743a71181/',
      color: 'from-blue-500 to-indigo-600',
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Open to process engineering opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full blur-2xl transition-opacity group-hover:opacity-20`} />

                <div className="relative flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                    <item.icon className="text-white" size={24} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-white">{item.value}</div>
                    )}
                  </div>

                  {item.copyable && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(item.value, item.label.toLowerCase() as 'email' | 'phone')}
                      className="flex-shrink-0 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-cyan-400"
                    >
                      {((item.label === 'Email' && copiedEmail) || (item.label === 'Phone' && copiedPhone)) ? (
                        <CheckCircle2 size={20} className="text-emerald-400" />
                      ) : (
                        <Copy size={20} />
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Looking for Process Engineering Expertise?
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                With 3+ years of hands-on experience in DCS control systems, process optimization, and a proven track record of
                measurable efficiency improvements, I'm excited to contribute to challenging industrial projects. Currently upskilling
                in Python and AI for advanced process analytics.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:chemical.aarthi@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow inline-flex items-center gap-2"
                >
                  <Mail size={20} />
                  Send Email
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/aarthi-kannan-743a71181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 text-sm">
              Fluent in English, Tamil, Malayalam, and Hindi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
