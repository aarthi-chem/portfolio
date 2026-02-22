import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      company: 'Tamil Nadu Petroproducts Limited (TPL)',
      role: 'Senior Engineer – DCS Panel Engineer',
      location: 'Chennai, India',
      period: 'February 2023 – Present',
      type: 'Full-time',
      color: 'from-cyan-500 to-blue-600',
      achievements: [
        {
          title: 'Process Optimization & Efficiency',
          points: [
            'Improved membrane cell efficiency from 92% to 92.9% through real-time data analysis and control parameter tuning',
            'Reduced power consumption by implementing optimization strategies for critical parameters',
            'Reduced water consumption by recovering utility fluids from DM water regeneration unit and optimizing cooling tower flowrates',
            'Monitored critical quality KPIs (NTU, pH) for Ultrapure Brine, ensuring compliance and reducing reprocessing costs',
          ],
        },
        {
          title: 'Control Systems Management',
          points: [
            'Managed caustic soda plant operations via Yokogawa Centum VP DCS, executing control strategies for pressure, flow, temperature',
            'Applied PID tuning to stabilize control valve responses in brine streams, chlorine gas streams, and spillback loops',
            'Interpreted real-time data using parameter trends to assess system health and identify deviations',
            'Handled individual plant start-ups: HCl plant, caustic evaporation plant, chlorine compressors, electrolyzers, power transmission',
          ],
        },
        {
          title: 'Pre-commissioning & Revamp',
          points: [
            'Led pre-commissioning and commissioning of revamped plant sections',
            'Validated control logic, interlocks, and safety systems aligned with P&IDs',
            'Performed control valve stroking and 4-20 mA signal verification',
            'Ensured seamless integration of control systems during plant modifications',
          ],
        },
        {
          title: 'Cross-Functional Collaboration',
          points: [
            'Collaborated with mechanical, electrical, instrumentation, civil, and safety teams',
            'Utilized Root Cause Analysis (RCA) to resolve issues in electrolyzers, control valves, compressors, and pumps',
            'Coordinated with downstream chlorine consumers (MPL, TPL PO plant) during load variations',
            'Minimized downtime and enhanced asset reliability through systematic troubleshooting',
          ],
        },
        {
          title: 'Safety & Compliance',
          points: [
            'Ensured OSHA compliance by managing permit renewals, inspections, and emergency protocols',
            'Implemented HAZOP analysis outcomes, achieving zero regulatory penalties',
            'Standardized SOPs for startup, shutdown, and emergency procedures',
            'Participated in weekly onsite and offsite emergency mock drills as control room engineer',
          ],
        },
        {
          title: 'Data Analysis & Reporting',
          points: [
            'Leveraged MIS and SAP for data logging and analysis',
            'Generated daily and monthly production reports for leadership',
            'Interpreted process KPIs to support data-driven decision making',
            'Maintained comprehensive documentation of operational metrics',
          ],
        },
      ],
    },
    {
      company: 'Bahrain Medical & Industrial Gas Plant (BMIGP – Airtec)',
      role: 'Industrial Trainee',
      location: 'Hidd, Kingdom of Bahrain',
      period: 'May 2022 – August 2022',
      type: 'Internship',
      color: 'from-emerald-500 to-teal-600',
      achievements: [
        {
          title: 'Process Exposure & Learning',
          points: [
            'Familiarized with cylinder filling unit operations for industrial and medical gases',
            'Gained knowledge of acetylene production process and safety protocols',
            'Studied 400 MT capacity ASU plant process including compressors, heat exchangers, and distillation columns',
            'Learned Key Performance Indicators (KPI) concepts and ISO standards',
          ],
        },
        {
          title: 'Laboratory & Quality Control',
          points: [
            'Performed testing of industrial gas cylinders using gas analyzers',
            'Gained exposure to cylinder standards: volume, color codes, gas mixture specifications',
            'Studied MSDS of chemicals and Process Flow Diagrams (PFD)',
            'Understood sources of hazards and safety precautions in gas handling',
          ],
        },
        {
          title: 'Operations & Reporting',
          points: [
            'Assisted in preparation of daily production reports',
            'Tracked evaporative losses and inventory management',
            'Observed quality control procedures and compliance standards',
          ],
        },
      ],
    },
    {
      company: 'Arab Shipbuilding & Repair Yard Company (ASRY)',
      role: 'Industrial Trainee',
      location: 'Hidd, Kingdom of Bahrain',
      period: 'November 2021 – January 2022',
      type: 'Internship',
      color: 'from-purple-500 to-pink-600',
      achievements: [
        {
          title: 'Safety & Quality Management',
          points: [
            'Interned in Safety Department, Offshore Engineering, Commercial Services, and Quality Management',
            'Created Risk Assessments and conducted safety inspections and yard visits',
            'Witnessed Audit Procedures, Audit Reports, and participated in Closing Meetings',
            'Participated in fire drills with Fire Maintenance Department and Fire Control Room',
          ],
        },
        {
          title: 'Standards & Procedures',
          points: [
            'Gained understanding of Project Management and Project Bidding processes',
            'Familiarized with SOPs, ISO, and API standards',
            'Learned QEHSSP (Quality, Environment, Health, Safety, Security, and Protection) protocols',
            'Exposure to regulatory compliance and documentation requirements',
          ],
        },
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 overflow-hidden">
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
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From international training to senior engineering roles—delivering measurable impact at every step
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-12 md:pl-24"
              >
                <div className={`absolute left-0 md:left-8 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full transform -translate-x-1/2 border-4 border-slate-900 shadow-lg`} />

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
                >
                  <div
                    onClick={() => toggleExpand(index)}
                    className="p-6 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={20} className="text-cyan-400" />
                          <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                        </div>
                        <p className="text-lg text-cyan-400 font-semibold mb-3">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </span>
                          <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} rounded-full text-white text-xs font-semibold`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </motion.button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-6">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                              className="bg-slate-900/50 rounded-lg p-4 border border-white/5"
                            >
                              <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                                {achievement.title}
                              </h4>
                              <ul className="space-y-2">
                                {achievement.points.map((point, pointIndex) => (
                                  <li key={pointIndex} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                                    <span className="text-cyan-400 mt-1.5">▹</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
