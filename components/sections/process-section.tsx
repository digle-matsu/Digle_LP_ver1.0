'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Search, FileText, Rocket } from 'lucide-react';

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: '無料相談',
      description:
        '御社の悩みをお聞かせください（オンライン対応）',
    },
    {
      number: '02',
      icon: Search,
      title: '課題分析',
      description:
        'ビジネスモデル、組織体制、課題を詳しくヒアリング',
    },
    {
      number: '03',
      icon: FileText,
      title: '提案・見積り',
      description:
        '最適な支援プランと料金をご提案',
    },
    {
      number: '04',
      icon: Rocket,
      title: '伴走開始',
      description:
        '戦略策定と実行支援をスタート',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
            ご利用の流れ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
            ご利用の流れ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white border border-navy-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-navy-200">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
