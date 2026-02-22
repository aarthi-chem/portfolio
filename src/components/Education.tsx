import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Briefcase } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainEducation = {
    degree: 'B.Tech in Chemical Engineering',
    institution: 'Sathyabama University',
    location: 'Chennai, India',
    period: '2015 - 2019',
    grade: '9.2 CGPA',
    gradeType: 'First Class with Distinction',
    color: 'from-cyan-500 to-blue-600',
  };

  const earlyTraining = [
    {
      company: 'Manali Petrochemicals Limited (MPL)',
      type: 'University Project',
      location: 'Chennai',
      period: 'October - November 2018',
      project: 'Manufacturing of Propylene Oxide',
      learnings: [
        'Study of traditional manufacturing method with HMB and design calculations',
        'Comparative theoretical study of alternative production methods',
        'Understanding of large-scale petrochemical operations',
      ],
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
    },
    {
      company: 'Middle East Recycling Company (MERCO)',
      type: 'Implant Trainee',
      location: 'Askar, Kingdom of Bahrain',
      period: 'December 2017',
      learnings: [
        'Familiarization with bitumen derived products and grades',
        'Studying various unit operations in recycling processes',
        'Understanding quality control procedures',
      ],
      icon: Briefcase,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      company: 'Hempel Paints S.P.C.',
      type: 'Implant Trainee',
      location: 'Manama, Kingdom of Bahrain',
      period: 'December 2016',
      learnings: [
        'Familiarization with production procedure of industrial paints',
        'Studying QA/QC lab operations and testing procedures',
        'Interaction with R&D, supply chain, and warehouse operations',
      ],
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="education" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 overflow-hidden">
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
              Education & Training
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Strong academic foundation complemented by diverse industrial exposure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 md:p-12 mb-16 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-10 rounded-bl-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${mainEducation.color} shadow-lg shadow-cyan-500/25`}>
              <GraduationCap className="text-white" size={48} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{mainEducation.degree}</h3>
                <div className="px-4 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 font-semibold text-sm">{mainEducation.gradeType}</span>
                </div>
              </div>
              <p className="text-xl text-cyan-400 font-semibold mb-2">{mainEducation.institution}</p>
              <div className="flex flex-wrap gap-4 text-slate-300 mb-4">
                <span>{mainEducation.location}</span>
                <span>•</span>
                <span>{mainEducation.period}</span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <Award className="text-amber-400" size={24} />
                <div>
                  <div className="text-sm text-slate-400">CGPA</div>
                  <div className="text-3xl font-bold text-amber-400 font-mono">{mainEducation.grade}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Early Industrial Training</h3>
        </motion.div>

        <div className="space-y-6">
          {earlyTraining.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${training.color}`}>
                  <training.icon className="text-white" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{training.company}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                        <span className={`px-3 py-1 bg-gradient-to-r ${training.color} rounded-full text-white text-xs font-semibold`}>
                          {training.type}
                        </span>
                        <span>{training.location}</span>
                        <span>•</span>
                        <span>{training.period}</span>
                      </div>
                    </div>
                  </div>

                  {training.project && (
                    <div className="mb-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-sm text-cyan-400 font-semibold">Project: </span>
                      <span className="text-sm text-white">{training.project}</span>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {training.learnings.map((learning, lIndex) => (
                      <li key={lIndex} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-900/50 to-blue-950/30 backdrop-blur-sm border border-white/10 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Continuous Learning Journey</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Beyond formal education, I'm committed to continuous upskilling to stay at the forefront of process engineering innovation.
            Currently expanding my expertise in modern technologies that bridge traditional chemical engineering with data science and artificial intelligence.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/20">
              <div className="text-cyan-400 font-semibold mb-1">Python Programming</div>
              <div className="text-sm text-slate-400">For process data analysis and automation</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-emerald-500/20">
              <div className="text-emerald-400 font-semibold mb-1">Process Simulation</div>
              <div className="text-sm text-slate-400">Aspen and DWSim for advanced modeling</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-purple-500/20">
              <div className="text-purple-400 font-semibold mb-1">Generative AI</div>
              <div className="text-sm text-slate-400">Exploring AI for process optimization</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
