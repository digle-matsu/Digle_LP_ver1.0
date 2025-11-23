'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Building2, Users } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      company: '製造業',
      employees: '従業員30名',
      icon: Building2,
      quote:
        '「何から手をつけるか」すら分からなかった状態から、課題（次の一手）を整理してもらい、半年で残業時間が30%削減できました。現場の負担が減り、社員の表情が明るくなったことが何より嬉しいです。',
      name: 'A社 代表取締役',
      result: '残業時間 30%削減',
    },
    {
      company: 'Webサービス業',
      employees: '従業員10名',
      icon: Users,
      quote:
        '止まっていた新規事業が、「右腕」として伴走してもらい、ようやくリリースできました。アイデアはあっても実行できなかった私たちに、具体的なロードマップと推進力を与えてくれました。',
      name: 'B社 代表取締役',
      result: '新規事業 リリース達成',
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
            実績・お客様の声
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
            Digleと共に「真価」を掘り起こした
            <br className="hidden md:block" />
            経営者の声
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-navy-50 to-white border border-navy-200 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-20 w-20 text-navy-300" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-500 rounded-xl">
                      <testimonial.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-800 text-lg">{testimonial.company}</p>
                      <p className="text-sm text-navy-600">{testimonial.employees}</p>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-orange-500 text-white rounded-xl inline-block">
                    <p className="text-sm font-semibold">{testimonial.result}</p>
                  </div>

                  <blockquote className="text-lg text-navy-700 leading-relaxed mb-6">
                    {testimonial.quote}
                  </blockquote>

                  <div className="pt-6 border-t border-navy-200">
                    <p className="font-semibold text-navy-800">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-navy-600 leading-relaxed">
            あなたの会社も、
            <span className="font-semibold text-navy-800">次の成功事例</span>
            になりませんか？
          </p>
        </motion.div>
      </div>
    </section>
  );
}
