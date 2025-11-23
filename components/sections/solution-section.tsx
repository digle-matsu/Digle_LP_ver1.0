'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Users, Briefcase, Rocket, TrendingUp } from 'lucide-react';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Lightbulb,
      title: '戦略策定',
      description:
        '社長の想いをヒアリングし、進むべき道を明確にします',
    },
    {
      icon: Users,
      title: 'COO代行',
      description:
        '戦略を実行タスクに分解し、右腕として進捗管理します',
    },
    {
      icon: Briefcase,
      title: 'プロジェクト管理',
      description:
        'DX、新規事業などの複雑なプロジェクトを完遂させます',
    },
  ];

  return (
    <section id="solution" className="py-24 md:py-32 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
            ソリューション
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
            戦略策定から実行まで
            <br />
            <span className="text-navy-600">Digleがワンストップで<br className="md:hidden" />
            伴走</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white border border-navy-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800">{service.title}</h3>
                </div>
                <p className="text-navy-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
