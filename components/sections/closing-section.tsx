'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    {
      question: '地方の中小企業でも対応可能ですか？',
      answer:
        'はい、オンラインで全国対応可能です。初回相談から定期ミーティングまで、すべてオンラインで実施できます。必要に応じて、現地への訪問も対応いたします。',
    },
    {
      question: '契約期間はどのくらいですか？',
      answer:
        '課題に応じて3ヶ月〜柔軟に対応します。短期集中で特定の課題を解決したい場合は3〜6ヶ月、継続的な伴走支援をご希望の場合は1年以上の契約も可能です。まずはヒアリングで最適な期間をご提案します。',
    },
    {
      question: '具体的にどのようなサポートをしてくれますか？',
      answer:
        '戦略策定、COO代行、プロジェクトマネジメント、新規事業開発、デジタルマーケティングなど、幅広く対応します。定期的なミーティングに加え、チャットでのリアルタイム相談、資料作成支援、社内会議への参加なども可能です。',
    },
    {
      question: '初回相談では何を話せばいいですか？',
      answer:
        '「うまく話せるか分からない」という状態で問題ありません。現在の課題、困っていること、モヤモヤしていることを自由にお話しください。私が一緒に整理し、本質的な課題を見つけ出します。',
    },
    {
      question: '料金の支払い方法は？',
      answer:
        '月額固定報酬制または、プロジェクト単位での契約が可能です。お支払いは銀行振込にて、月末締め翌月末払いが基本となります。詳細は初回相談時にご説明します。',
    },
  ];

  return (
    <section id="closing" className="py-24 md:py-32 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-6 leading-tight">
            1年後、まだ「同じ課題」で
            <br className="hidden md:block" />
            悩んでいますか？
          </h2>
          <p className="text-2xl md:text-3xl text-navy-700 mb-8 leading-relaxed">
            それとも、「次の一手」を実行し、
            <br className="hidden md:block" />
            会社の「真価」を掘り起こしますか？
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-navy-700 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              行動しなければ、何も変わりません。
              <br />
              社長の「決断」が、会社の未来を変える第一歩です。
            </p>

            <div className="my-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-lg md:text-xl font-semibold mb-2">
                「うまく話せるか分からない」
              </p>
              <p className="text-lg md:text-xl">
                その状態からで構いません。
                <br />
                私が一緒に整理します。
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGL5TXYHzgEqF_UxdUywJPyXwicdM3MLuXcz1BuEMVkxbPDA/viewform?usp=header', '_blank')}
              className="bg-orange-500 text-white hover:bg-orange-600 px-6 sm:px-8 py-6 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all group w-full sm:w-auto"
            >
              <span className="whitespace-nowrap">いますぐオンライン相談を予約する</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>

            <p className="mt-6 text-navy-100">
              初回60分 完全無料 | 全国対応 | オンライン実施
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full mb-4">
              <HelpCircle className="h-4 w-4" />
              よくあるご質問
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-800">
              FAQ
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white border border-navy-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy-800 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-navy-600 mb-8 leading-relaxed">
            まだ迷っていますか？
            <br />
            まずは無料相談で、あなたの課題を一緒に整理しましょう。
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGL5TXYHzgEqF_UxdUywJPyXwicdM3MLuXcz1BuEMVkxbPDA/viewform?usp=header', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto max-w-md mx-auto"
          >
            <span className="whitespace-nowrap">無料相談を予約する</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
