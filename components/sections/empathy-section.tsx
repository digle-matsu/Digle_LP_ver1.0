'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Square } from 'lucide-react';

export function EmpathySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const concerns = [
    'やるべきことは多いが、何から手をつければいいか分からない',
    '場当たり的な対応に追われ、戦略を立てる時間がない',
    '会議で決めたことが、いつの間にか実行されていない',
    'デジタル化を進めたいが、推進できる社員がいない',
    '自分が現場を離れられず、経営に集中できない',
    'そもそも相談相手がいないこと自体が、一番の悩みだ',
  ];

  return (
    <section id="empathy" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
            社長、こんな悩みを
            <br className="hidden md:block" />
            抱えていませんか？
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {concerns.map((concern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3 p-5 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors border border-navy-200"
            >
              <Square className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
              <p className="text-base text-navy-700">{concern}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-navy-700 font-semibold">
            問題の根源は「戦略」と「実行」の機能不在です
          </p>
        </motion.div>
      </div>
    </section>
  );
}
