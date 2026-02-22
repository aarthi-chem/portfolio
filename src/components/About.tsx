import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Zap, Target, TrendingUp, Users, GraduationCap, Briefcase, Award, Sparkles, ChevronRight } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeJourney, setActiveJourney] = useState<number | null>(null);

  const highlights = [
    {
      icon: Zap,
      title: 'Process Excellence',
      description: '3+ years optimizing chemical processes with precision control systems',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Target,
      title: 'Measurable Impact',
      description: 'Improved membrane efficiency from 92% to 92.9%, reduced consumption metrics',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Upskilling in Python, data analysis, and generative AI for process innovation',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Users,
      title: 'Cross-Functional Leader',
      description: 'Collaborating across teams to solve complex operational challenges',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  const journey = [
    {
      year: '2015',
      title: 'Academic Foundation',
      desc: 'Began B.Tech in Chemical Engineering at Sathyabama University, Chennai',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      details: 'Started the journey towards becoming a chemical engineer with strong fundamentals'
    },
    {
      year: '2016-18',
      title: 'Early Industry Exposure',
      desc: 'Completed multiple internships: Hempel Paints, MERCO Recycling, and extensive plant visits',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      details: 'Gained hands-on experience in paints production, bitumen recycling, and industrial operations'
    },
    {
      year: '2019',
      title: 'Graduated with Distinction',
      desc: 'Earned B.Tech degree with 9.2 CGPA, First Class with Distinction',
      icon: Award,
      color: 'from-emerald-500 to-teal-500',
      details: 'Completed university project on Propylene Oxide manufacturing at Manali Petrochemicals'
    },
    {
      year: '2021-22',
      title: 'International Training',
      desc: 'Industrial training in Bahrain: ASRY (Safety & Quality) and BMIGP (Gas Production)',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-500',
      details: 'Exposure to international standards, safety protocols, and industrial gas operations'
    },
    {
      year: '2023-Present',
      title: 'Senior DCS Engineer',
      desc: 'Leading control systems operations at Tamil Nadu Petroproducts Limited',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      details: 'Managing caustic soda plant via Yokogawa Centum VP, achieving measurable efficiency gains'
    },
    {
      year: '2024+',
      title: 'Future-Ready Skills',
      desc: 'Upskilling in Python, Data Analysis, and AI for next-generation process optimization',
      icon: TrendingUp,
      color: 'from-pink-500 to-purple-500',
      details: 'Bridging traditional process engineering with modern data science and automation'
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
              Engineering Efficiency, One Process at a Time
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My journey from academic excellence to industrial impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}>
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900/50 to-blue-950/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">My Story</h3>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              As a <span className="text-cyan-400 font-semibold">Senior Chemical Engineer</span> at Tamil Nadu Petroproducts Limited,
              I don't just operate control systems—I orchestrate precision in one of the most demanding industrial environments.
              My expertise in <span className="text-emerald-400 font-semibold">Yokogawa Centum VP DCS</span> has transformed
              how our caustic soda plant achieves operational excellence.
            </p>
            <p>
              Every percentage point matters in process engineering. When I improved membrane cell efficiency from 92% to 92.9%,
              it wasn't just a number—it represented significant <span className="text-amber-400 font-semibold">energy savings</span> and
              demonstrated how data-driven optimization creates tangible value. Through strategic PID tuning and real-time process analysis,
              I've reduced both power and water consumption while maintaining the highest safety standards.
            </p>
            <p>
              My foundation began at <span className="text-purple-400 font-semibold">Sathyabama University</span>, where I graduated
              with a 9.2 CGPA, but my true education came from the field. From quality control labs in Bahrain to control rooms managing
              critical chemical processes, I've learned that <span className="text-cyan-400 font-semibold">excellence is in the details</span>—whether
              it's troubleshooting a control valve, coordinating with downstream consumers during load variations, or ensuring zero regulatory penalties.
            </p>
            <p>
              Today, I'm expanding my capabilities beyond traditional process control. By upskilling in <span className="text-emerald-400 font-semibold">Python</span> and
              <span className="text-emerald-400 font-semibold"> data analysis</span>, I'm preparing to bridge the gap between industrial automation and
              intelligent process optimization. My vision: leveraging AI and advanced analytics to unlock the next generation of process efficiency.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h3>
            <p className="text-slate-400">A decade of growth from student to senior engineer</p>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

              <div className="grid grid-cols-6 gap-4">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    onMouseEnter={() => setActiveJourney(index)}
                    onMouseLeave={() => setActiveJourney(null)}
                    className="relative"
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.15, y: -5 }}
                        className={`relative p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg cursor-pointer mb-4 z-10`}
                      >
                        <item.icon className="text-white" size={28} />
                        {activeJourney === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl -z-10"
                          />
                        )}
                      </motion.div>

                      <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg mb-3" />

                      <div className="text-center">
                        <div className="text-cyan-400 font-mono text-sm font-bold mb-2">{item.year}</div>
                        <h4 className="text-white font-semibold text-sm mb-2 leading-tight">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>

                        {activeJourney === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                          >
                            <p className="text-xs text-slate-300 leading-relaxed">{item.details}</p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden space-y-4">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                    <item.icon className="text-white" size={24} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyan-400 font-mono text-sm font-bold">{item.year}</span>
                      <ChevronRight size={16} className="text-slate-600" />
                    </div>
                    <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm mb-2">{item.desc}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full">
            <Sparkles className="text-cyan-400" size={20} />
            <span className="text-slate-300 text-sm">
              From <span className="text-cyan-400 font-semibold">9.2 CGPA graduate</span> to
              <span className="text-emerald-400 font-semibold"> Senior DCS Engineer</span> —
              driving measurable impact at every step
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
