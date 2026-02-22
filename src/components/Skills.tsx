import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Cpu, Wrench, Code, LineChart, ShieldCheck, Users as UsersIcon } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('control');

  const skillCategories = [
    { id: 'control', name: 'Control Systems', icon: Cpu, color: 'from-cyan-400 to-blue-500' },
    { id: 'process', name: 'Process Engineering', icon: Wrench, color: 'from-emerald-400 to-teal-500' },
    { id: 'software', name: 'Software & Tools', icon: Code, color: 'from-purple-400 to-pink-500' },
    { id: 'analytical', name: 'Analysis & Optimization', icon: LineChart, color: 'from-amber-400 to-orange-500' },
    { id: 'safety', name: 'Safety & Compliance', icon: ShieldCheck, color: 'from-red-400 to-rose-500' },
    { id: 'soft', name: 'Professional Skills', icon: UsersIcon, color: 'from-indigo-400 to-blue-500' },
  ];

  const skills = {
    control: [
      { name: 'Yokogawa Centum VP DCS', level: 95, example: 'Managing caustic soda plant operations' },
      { name: 'PID Control & Tuning', level: 90, example: 'Stabilized brine and chlorine gas streams' },
      { name: 'Control Logic & Interlocks', level: 90, example: 'Validated safety systems during revamp' },
      { name: 'Process Instrumentation', level: 85, example: 'P&ID interpretation and implementation' },
      { name: 'SCADA Systems', level: 80, example: 'Real-time monitoring and data acquisition' },
    ],
    process: [
      { name: 'Unit Operations', level: 90, example: 'Pumps, valves, reactors, heat exchangers' },
      { name: 'Process Optimization', level: 88, example: 'Improved efficiency from 92% to 92.9%' },
      { name: 'Troubleshooting & RCA', level: 92, example: 'Minimized downtime through root cause analysis' },
      { name: 'Pre-commissioning & Startup', level: 85, example: 'HCl plant, evaporation units, compressors' },
      { name: 'Utility Systems', level: 85, example: 'Cooling towers, chillers, boilers management' },
    ],
    software: [
      { name: 'SAP (Production)', level: 80, example: 'Daily and monthly production reports' },
      { name: 'Python', level: 65, example: 'Currently learning for process data analysis' },
      { name: 'Aspen & DWSim', level: 60, example: 'Process simulation under self-study' },
      { name: 'Microsoft Excel', level: 85, example: 'Data logging and KPI tracking' },
      { name: 'Generative AI', level: 55, example: 'Exploring AI for process optimization' },
    ],
    analytical: [
      { name: 'Data Analysis & Interpretation', level: 85, example: 'Parameter trends and system health assessment' },
      { name: 'KPI Monitoring', level: 90, example: 'NTU, pH compliance for ultrapure brine' },
      { name: 'Mass & Energy Balance', level: 80, example: 'HMB calculations and process design' },
      { name: 'Process Debottlenecking', level: 85, example: 'Identified and resolved process constraints' },
      { name: 'Performance Optimization', level: 88, example: 'Reduced power and water consumption' },
    ],
    safety: [
      { name: 'HAZOP Analysis', level: 85, example: 'Implemented safety recommendations' },
      { name: 'Emergency Shutdown (ESD)', level: 90, example: 'Managed plant ESD procedures' },
      { name: 'OSHA Compliance', level: 85, example: 'Zero penalties through regulatory management' },
      { name: 'Risk Assessment', level: 80, example: 'Safety inspections and emergency protocols' },
      { name: 'Safety Protocols & SOPs', level: 88, example: 'Standardized startup/shutdown procedures' },
    ],
    soft: [
      { name: 'Cross-Functional Collaboration', level: 95, example: 'Coordinating with mechanical, electrical, instrumentation teams' },
      { name: 'Analytical Problem Solving', level: 92, example: 'Resolving complex operational challenges' },
      { name: 'Communication', level: 90, example: 'Fluent in English, Tamil, Malayalam, Hindi' },
      { name: 'Mentorship & Knowledge Transfer', level: 85, example: 'Training operations team members' },
      { name: 'Adaptability & Digital Readiness', level: 88, example: 'Continuously upskilling in new technologies' },
    ],
  };

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-900 overflow-hidden">
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
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive skillset across control systems, process engineering, and emerging technologies
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <category.icon size={18} />
              <span className="hidden sm:inline">{category.name}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-sm text-slate-400">{skill.example}</p>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-bold text-cyan-400 font-mono">{skill.level}%</span>
                </div>
              </div>
              <div className="relative h-3 bg-slate-800/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skillCategories.find(c => c.id === activeCategory)?.color} rounded-full relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2 font-mono">3+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2 font-mono">92% → 92.9%</div>
            <div className="text-slate-300">Efficiency Improvement</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2 font-mono">4</div>
            <div className="text-slate-300">Languages Spoken</div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
