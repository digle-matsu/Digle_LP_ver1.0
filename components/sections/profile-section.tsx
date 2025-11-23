'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Award, Users } from 'lucide-react';

export function ProfileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Building2,
      label: '大手IT企業',
      value: 'プロダクトマネージャー',
    },
    {
      icon: Award,
      label: 'プロジェクト実績',
      value: '累計50件以上',
    },
    {
      icon: Users,
      label: '現役',
      value: '企業経営者',
    },
  ];

  return (
    <section id="profile" className="py-24 md:py-32 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
            代表プロフィール
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
            はじめまして。
            <br className="hidden md:block" />
            私があなたの「戦略パートナー」兼「右腕」になります。
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-navy-200 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
              <div className="md:col-span-2 flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-600 rounded-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                        <Users className="w-16 h-16" />
                      </div>
                      <p className="text-sm font-medium">代表者写真</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-navy-800 mb-2">
                    株式会社Digle
                  </h3>
                  <p className="text-xl text-navy-600 font-semibold">代表取締役</p>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-navy-50 rounded-xl border border-navy-200"
                    >
                      <div className="p-2 bg-orange-500 rounded-lg">
                        <achievement.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-navy-500 font-medium">{achievement.label}</p>
                        <p className="text-sm font-semibold text-navy-800">{achievement.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-8 md:px-12 pb-12">
              <div className="space-y-6 text-navy-700 leading-relaxed">
                <p className="text-lg">
                  大手IT企業でプロダクトマネージャーとして、数々のプロジェクトを成功に導いてきました。
                  戦略立案からチームマネジメント、実装まで一貫して携わり、
                  「計画を実行に移す力」の重要性を身をもって学びました。
                </p>

                <p className="text-lg">
                  その後、自ら起業し経営者となったことで、
                  中小企業経営者が抱える「孤独」や「リソース不足」といった課題を実感しました。
                  特に、「次の一手が見えない」戦略の悩みと、
                  「実行する右腕がいない」実行の悩みは、多くの経営者に共通する最大の障壁です。
                </p>

                <p className="text-lg">
                  私は、大手企業で培った「戦略思考」と「実行力」、
                  そして経営者としての「当事者意識」を掛け合わせることで、
                  中小企業の経営者の真のパートナーになれると確信しています。
                </p>

                <div className="mt-8 p-6 bg-navy-700 text-white rounded-2xl">
                  <p className="text-lg font-semibold mb-2">
                    私のミッション
                  </p>
                  <p className="text-lg leading-relaxed">
                    あなたのビジネスに眠る「真価」を掘り起こし、
                    戦略から実行まで、共に歩むこと。
                    それがDigleの存在意義です。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
