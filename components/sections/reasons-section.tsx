'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Languages } from 'lucide-react';

export function ReasonsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: Award,
      number: '01',
      title: 'PM/PdMの推進力',
      description:
        '大手IT企業で培ったプロジェクト・プロダクト管理手法で、複雑な課題を整理し完遂させます',
    },
    {
      icon: Heart,
      number: '02',
      title: '現役経営者の当事者意識',
      description:
        '評論家ではなく、同じ経営者として結果にコミットし、泥臭い実行まで伴走します',
    },
    {
      icon: Languages,
      number: '03',
      title: '戦略と現場をつなぐ翻訳力',
      description:
        '社長のビジョンを現場が実行できるタスクに翻訳し、実装を支援します',
    },
  ];

  return (
    <section id="reasons" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
            3つの強み
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
            Digleが選ばれる理由
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
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
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-navy-200">
                    {reason.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
