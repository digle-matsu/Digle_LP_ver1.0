'use client';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-extrabold mb-4 font-[family-name:var(--font-montserrat)]">Digle</h3>
            <p className="text-navy-100 leading-relaxed mb-4">
              中小企業の経営者の「次の一手」を明確にし、
              <br />
              実行まで伴走する戦略実行パートナー
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  サービス内容
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reasons')}
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  選ばれる理由
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('profile')}
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  代表プロフィール
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  実績
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('closing')}
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  無料相談を予約
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  料金について
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-600 mt-12 pt-8 text-center text-navy-200 text-sm">
          <p>&copy; {new Date().getFullYear()} 株式会社Digle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
