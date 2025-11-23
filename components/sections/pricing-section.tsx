'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGL5TXYHzgEqF_UxdUywJPyXwicdM3MLuXcz1BuEMVkxbPDA/viewform?usp=header', '_blank');
  };

  const benefits = [
    '御社のビジョンや課題に合わせた完全カスタマイズ',
    '一社一社に最適なプランとお見積りをご提案',
    '常勤のNo.2を採用するより圧倒的にリーズナブル',
    'スピーディーに経営課題の解決をスタート',
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-navy-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
            料金プラン
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            料金プランについて
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-navy-600/50 backdrop-blur-sm border border-navy-500 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                御社に最適なプランをカスタマイズ
              </h3>
              <p className="text-lg text-navy-100 leading-relaxed">
                Digleの支援は、画一的なパッケージではありません。
                <br className="hidden md:block" />
                社長のビジョン、会社の規模、課題の優先順位を丁寧にヒアリングし、
                <br className="hidden md:block" />
                一社一社に最適なプランとお見積りをご提案します。
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <p className="text-lg text-navy-100 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-navy-800 border border-navy-600 rounded-2xl">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-lg font-semibold mb-1">
                    まずは無料相談で、御社の課題をお聞かせください。
                  </p>
                  <p className="text-navy-200">
                    お見積り・ご提案は無料です
                  </p>
                </div>
                <Button
                  onClick={handleContactClick}
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 font-semibold group"
                >
                  料金について相談する
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-navy-600/30 backdrop-blur-sm border border-navy-500 rounded-2xl p-6 md:p-8">
            <h4 className="text-xl font-bold mb-4 text-center">
              参考：よくある契約期間
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-navy-600/50 rounded-xl">
                <p className="text-3xl font-bold mb-2">3ヶ月〜</p>
                <p className="text-sm text-navy-200">短期集中型</p>
              </div>
              <div className="p-4 bg-navy-600/50 rounded-xl border-2 border-orange-400">
                <p className="text-3xl font-bold mb-2">6ヶ月〜</p>
                <p className="text-sm text-navy-200">スタンダード</p>
              </div>
              <div className="p-4 bg-navy-600/50 rounded-xl">
                <p className="text-3xl font-bold mb-2">1年〜</p>
                <p className="text-sm text-navy-200">長期伴走型</p>
              </div>
            </div>
            <p className="text-sm text-navy-200 text-center mt-4">
              課題に応じて柔軟に対応いたします
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
