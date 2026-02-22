import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TrendingUp, Droplet, Zap, Users, Shield, GraduationCap, Globe } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Process Efficiency Breakthrough',
      metric: '92% → 92.9%',
      description: 'Improved membrane cell efficiency through PID tuning and real-time optimization',
      impact: 'Significant energy savings and increased production output',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Zap,
      title: 'Power Consumption Reduction',
      metric: 'Multi-KW Savings',
      description: 'Optimized control parameters and debottlenecking techniques for caustic soda plant',
      impact: 'Reduced operational costs and environmental footprint',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Droplet,
      title: 'Water Conservation Initiative',
      metric: 'Thousands of Liters/Day',
      description: 'Recovered utility fluids from DM water regeneration and optimized cooling tower flowrates',
      impact: 'Sustainable operations with reduced water consumption',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Zero Safety Violations',
      metric: '100% Compliance',
      description: 'Ensured OSHA compliance through permit management and HAZOP implementation',
      impact: 'Zero regulatory penalties and enhanced safety culture',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: Users,
      title: 'Cross-Functional Excellence',
      metric: '5+ Departments',
      description: 'Collaborated with mechanical, electrical, instrumentation, civil, and safety teams',
      impact: 'Minimized downtime and enhanced asset reliability',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      metric: '9.2 CGPA',
      description: 'First Class with Distinction in Chemical Engineering',
      impact: 'Strong theoretical foundation for practical applications',
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  const certifications = [
    {
      title: 'Yokogawa Centum VP DCS',
      issuer: 'On-the-job Expertise',
      year: '2023-Present',
      description: '3+ years hands-on experience with industrial DCS systems',
    },
    {
      title: 'Process Safety Management',
      issuer: 'OSHA / HAZOP Implementation',
      year: '2023-Present',
      description: 'Emergency protocols, risk assessments, and safety compliance',
    },
    {
      title: 'Quality Management',
      issuer: 'ISO Standards Training',
      year: '2021-2022',
      description: 'Exposure to ISO and API standards across multiple industries',
    },
    {
      title: 'Currently Learning',
      issuer: 'Self-Study Programs',
      year: '2024',
      description: 'Python, Aspen, DWSim, Generative AI for process optimization',
    },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Tamil', level: 'Native' },
    { name: 'Malayalam', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
  ];

  return (
    <section id="achievements" className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
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
              Key Achievements & Impact
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Measurable results that demonstrate technical excellence and operational impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-bl-full blur-2xl`} />

              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${achievement.color} mb-4`}>
                <achievement.icon className="text-white" size={24} />
              </div>

              <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2 font-mono`}>
                {achievement.metric}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-sm text-slate-400 mb-3 leading-relaxed">{achievement.description}</p>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-cyan-400 font-medium">Impact: {achievement.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-cyan-400" size={28} />
              Certifications & Training
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                    <span className="text-sm text-cyan-400 font-mono">{cert.year}</span>
                  </div>
                  <p className="text-sm text-emerald-400 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-slate-400">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="text-cyan-400" size={28} />
              Languages & Global Experience
            </h3>

            <div className="bg-gradient-to-br from-slate-900/50 to-blue-950/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Multilingual Professional</h4>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    className="bg-white/5 rounded-lg p-4 border border-white/5"
                  >
                    <div className="text-cyan-400 font-semibold mb-1">{lang.name}</div>
                    <div className="text-sm text-slate-400">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">International Experience</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>Industrial training in <strong className="text-white">Kingdom of Bahrain</strong> (2021-2022)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>Exposure to international safety standards (OSHA, API, ISO)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>Cross-cultural collaboration in multinational organizations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>Understanding of global chemical industry practices</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
