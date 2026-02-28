/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Play, 
  Camera, 
  BarChart3, 
  CheckCircle2, 
  ExternalLink, 
  X,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-primary-dark selection:bg-accent-gold selection:text-primary-dark">
      {/* Navigation */}
      <nav className={`nav-bar ${isScrolled ? 'scrolled py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-accent-gold tracking-widest cursor-pointer" onClick={() => scrollToSection('home')}>
            光宙數位
          </div>
          <ul className="hidden md:flex gap-8 list-none">
            {['home', 'philosophy', 'services', 'cases', 'process'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)}
                  className="text-text-light hover:text-accent-gold font-medium transition-colors relative group uppercase text-sm tracking-wider"
                >
                  {item === 'home' ? '首頁' : 
                   item === 'philosophy' ? '品牌哲學' : 
                   item === 'services' ? '核心服務' : 
                   item === 'cases' ? '實戰案例' : '合作流程'}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6 relative overflow-hidden bg-linear-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,165,116,0.1),transparent_50%)] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-linear-to-r from-accent-gold to-accent-orange bg-clip-text text-transparent tracking-wider">
            光宙數位創意有限公司
          </h1>
          <p className="text-xl md:text-2xl text-text-gray mb-6 font-light">
            短影音內容製作 × 活動影像紀錄
          </p>
          <p className="text-3xl md:text-4xl text-accent-gold mb-8 font-semibold">
            「用影像，讓專業被看懂」
          </p>
          <p className="text-lg text-text-gray leading-relaxed max-w-3xl mx-auto mb-12">
            短影音內容製作、活動影像紀錄的影像製作團隊，提供平面與動態服務<br />
            我們專注於一件事：把專業內容，轉成觀眾願意看完、看懂，並能實際被使用的影像。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
            {[
              { id: 'C5Yd6oJTi1Y', title: '美髮職人IP' },
              { id: 'ehOLQEPC9H4', title: '預售屋代銷' },
              { id: 'N0m5JpsxeS4', title: '地方商家/安全帽店' },
              { id: 'usfunVyVsDQ', title: '活動紀錄影片' }
            ].map((video, idx) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-secondary-dark rounded-2xl overflow-hidden border border-accent-gold/20 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_rgba(212,165,116,0.15)] transition-all duration-300 group"
              >
                <div className="video-wrapper relative">
                  <div className="absolute inset-0 bg-accent-gold/0 group-hover:bg-accent-gold/5 transition-colors z-10 pointer-events-none"></div>
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    allowFullScreen 
                    title={video.title}
                    className="z-0"
                  ></iframe>
                </div>
                <div className="p-4 font-semibold text-text-light text-center bg-linear-to-b from-accent-gold/10 to-accent-gold/5 border-t border-accent-gold/10">
                  {video.title}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('philosophy')}
        >
          <ChevronDown className="w-10 h-10 text-accent-gold" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          我們不追逐流量，我們設計「轉化路徑」
        </motion.h2>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-gray leading-relaxed mb-12"
          >
            每一支影片動工前，我們不急著想畫面與特效，而是先了解您的「用途」。<br />
            透過三個核心，確保每一秒都有價值：
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: '誰在看？', text: '定義受眾' },
              { title: '懂什麼？', text: '傳達價值' },
              { title: '怎麼做？', text: '引導行動' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: '#E67E22' }}
                className="bg-secondary-dark p-8 rounded-xl border-2 border-accent-gold shadow-lg hover:shadow-accent-orange/10 transition-all"
              >
                <div className="text-2xl font-bold text-accent-gold mb-2">{item.title}</div>
                <p className="text-text-gray">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg text-text-light leading-relaxed bg-accent-gold/10 p-8 rounded-xl border-l-4 border-accent-gold text-left md:text-center shadow-inner"
          >
            我們不盲目追求虛高的數字，而是透過精準受眾抓取，將流量轉化為實際的消費力。<br />
            這也是為什麼光宙的作品能同時做到被看懂、被記住，並產生後續行動。
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          核心服務
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary-dark p-10 rounded-2xl border border-accent-gold/30 hover:border-accent-gold transition-all hover:shadow-[0_20px_40px_rgba(212,165,116,0.15)]"
          >
            <h3 className="text-3xl font-bold text-accent-gold mb-4">短影音內容製作</h3>
            <p className="text-xl text-text-light mb-6 font-semibold">「不只是流量影片，是能被理解的內容」</p>
            <p className="text-text-gray leading-relaxed mb-8">
              短影音的價值不只在於搞笑或跟風，而在於是否能在有限時間內，把重點說清楚。
            </p>

            <div className="bg-accent-gold/5 p-6 rounded-lg mb-8 space-y-3 border border-accent-gold/10">
              <div className="flex justify-between text-text-gray"><span className="font-semibold text-accent-gold">服務焦點</span><span>內容理解、結構設計</span></div>
              <div className="flex justify-between text-text-gray"><span className="font-semibold text-accent-gold">累積製作</span><span>300+ 支</span></div>
              <div className="flex justify-between text-text-gray"><span className="font-semibold text-accent-gold">常見長度</span><span>30-60 秒</span></div>
            </div>

            <ul className="space-y-3 mb-8">
              {['專業內容說明', '教學與知識型內容', '活動與服務推廣', '人物品牌定位'].map((f, i) => (
                <li key={i} className="flex items-start text-text-gray border-b border-accent-gold/10 pb-2">
                  <span className="text-accent-gold mr-3 font-bold">▸</span>{f}
                </li>
              ))}
            </ul>

            <h4 className="text-accent-gold font-bold mb-4">作品示例</h4>
            <div className="grid gap-3">
              {[
                { label: '專業型內容 →', url: 'https://youtube.com/shorts/yluitL_0Xt8' },
                { label: '轉換導向內容 →', url: 'https://youtube.com/shorts/YiEu8fYL4-g' },
                { label: '輕娛樂商業內容 →', url: 'https://youtube.com/shorts/CxNpKXBhyBs' },
                { label: '公部門活動 →', url: 'https://youtu.be/VvLs4swALuk' }
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-accent-gold/10 rounded-lg text-text-light hover:bg-accent-gold/20 transition-all border border-transparent hover:border-accent-gold hover:translate-x-1 shadow-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-secondary-dark p-10 rounded-2xl border border-accent-gold/30 hover:border-accent-gold transition-all hover:shadow-[0_20px_40px_rgba(212,165,116,0.15)]"
          >
            <h3 className="text-3xl font-bold text-accent-gold mb-4">活動紀錄影像服務</h3>
            <p className="text-xl text-text-light mb-6 font-semibold">「平面攝影 × 動態拍攝」</p>
            <p className="text-text-gray leading-relaxed mb-8">
              依流程完成紀錄，並準時交付可使用的成果。熟悉公部門拍攝需求，含活動紀錄、成果影片與社群短影音。
            </p>

            <div className="bg-accent-gold/5 p-6 rounded-lg mb-8 space-y-3 border border-accent-gold/10">
              <div className="flex justify-between text-text-gray"><span className="font-semibold text-accent-gold">核心任務</span><span>依流程完成紀錄</span></div>
              <div className="flex justify-between text-text-gray"><span className="font-semibold text-accent-gold">專案類型</span><span>政府與公部門專案</span></div>
            </div>

            <h4 className="text-accent-gold font-bold mb-4">交付規格</h4>
            <ul className="space-y-3 mb-8">
              {['短影音 (30-60s)', '成果影片 (3-5min)', '平面與動態雙紀錄', '可支援新聞稿與行政成果使用'].map((f, i) => (
                <li key={i} className="flex items-start text-text-gray border-b border-accent-gold/10 pb-2">
                  <span className="text-accent-gold mr-3 font-bold">▸</span>{f}
                </li>
              ))}
            </ul>

            <h4 className="text-accent-gold font-bold mb-4">作品示例</h4>
            <div className="grid gap-3 mb-8">
              <a href="https://youtu.be/IEA80jzmqJU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-accent-gold/10 rounded-lg text-text-light hover:bg-accent-gold/20 transition-all border border-transparent hover:border-accent-gold hover:translate-x-1 shadow-sm">
                活動成果影片 3-5 分鐘 →
              </a>
              <a href="https://youtu.be/v0smiKi8o5Y" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-accent-gold/10 rounded-lg text-text-light hover:bg-accent-gold/20 transition-all border border-transparent hover:border-accent-gold hover:translate-x-1 shadow-sm">
                活動用動畫 →
              </a>
            </div>

            <div className="bg-accent-gold/5 p-6 rounded-xl border border-accent-gold/20 shadow-inner">
              <h4 className="text-accent-gold font-bold mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5" /> 活動平面攝影作品
              </h4>
              <p className="text-sm text-text-gray mb-4">專業政府活動紀錄，含市長、局長等重要人士出席場合</p>
              
              {/* Added Photo Grid for visual feedback */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="aspect-4/3 rounded-lg overflow-hidden border-2 border-accent-gold/30 cursor-pointer shadow-md"
                    onClick={() => setSelectedImage(`https://picsum.photos/seed/event${i}/800/600`)}
                  >
                    <img 
                      src={`https://picsum.photos/seed/event${i}/400/300`} 
                      alt={`Event ${i}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-3">
                <a href="https://drive.google.com/drive/folders/1MCgYwM6XIotRy--mduFCHQRFaUH9vEYW" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-linear-to-br from-accent-gold/15 to-accent-orange/15 rounded-lg text-text-light hover:bg-accent-gold/25 transition-all border border-accent-gold/30 hover:translate-x-1 shadow-sm">
                  📷 新北市教育局圓夢基金案 →
                </a>
                <a href="https://drive.google.com/drive/folders/1sq49iQmNECXg7uOvxw95sdAq0d1wDaVa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-linear-to-br from-accent-gold/15 to-accent-orange/15 rounded-lg text-text-light hover:bg-accent-gold/25 transition-all border border-accent-gold/30 hover:translate-x-1 shadow-sm">
                  📷 新北市衛生局志工案 →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-secondary-dark p-10 rounded-2xl border border-accent-gold/30 hover:border-accent-gold transition-all hover:shadow-[0_20px_40px_rgba(212,165,116,0.15)]"
          >
            <h3 className="text-3xl font-bold text-accent-gold mb-4">商品影音製作</h3>
            <p className="text-xl text-text-light mb-6 font-semibold">「清楚說明賣點，精準切角」</p>
            <p className="text-text-gray leading-relaxed mb-8">
              依業主需求調整拍攝切角，強調產品情境，回應消費者痛點，適合社群與廣告投放。
            </p>

            <h4 className="text-accent-gold font-bold mb-4">核心特色</h4>
            <ul className="space-y-3 mb-8">
              {['清楚說明產品賣點', '強調產品使用情境', '回應消費者痛點', '適合社群與廣告投放'].map((f, i) => (
                <li key={i} className="flex items-start text-text-gray border-b border-accent-gold/10 pb-2">
                  <span className="text-accent-gold mr-3 font-bold">▸</span>{f}
                </li>
              ))}
            </ul>

            <h4 className="text-accent-gold font-bold mb-4">作品示例</h4>
            <div className="grid gap-3">
              {[
                { label: '商品影音案例 01 →', url: 'https://youtu.be/kqZYNZazGBU' },
                { label: '商品影音案例 02 →', url: 'https://youtu.be/p-tSQMG2Dr0' },
                { label: '商品影音案例 03 →', url: 'https://youtube.com/shorts/Mx4ryYFbHoU' }
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-accent-gold/10 rounded-lg text-text-light hover:bg-accent-gold/20 transition-all border border-transparent hover:border-accent-gold hover:translate-x-1 shadow-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activity Highlights Section - New Video Highlight */}
      <section className="py-24 px-6 bg-linear-to-b from-primary-dark to-secondary-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent-gold/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-accent-gold mb-4">最新活動紀錄</h2>
            <p className="text-text-gray text-xl">捕捉每一個精彩瞬間，還原最真實的感動</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-accent-gold/10 blur-2xl rounded-3xl group-hover:bg-accent-gold/20 transition-all duration-500"></div>
              <div className="relative video-wrapper-16-9 rounded-2xl overflow-hidden border-2 border-accent-gold/30 shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/usfunVyVsDQ" 
                  allowFullScreen 
                  title="活動紀錄影片"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-secondary-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-accent-gold/20 shadow-xl">
                <h3 className="text-2xl font-bold text-accent-gold mb-4 flex items-center gap-3">
                  <Play className="w-6 h-6 fill-accent-gold" /> 影像敘事的力量
                </h3>
                <p className="text-text-gray leading-relaxed text-lg">
                  我們不只是在「錄影」，我們是在「說故事」。透過精準的運鏡與剪輯節奏，將活動的氛圍、參與者的情緒以及最重要的核心訊息，完整地封裝在影像中。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent-gold/10 p-6 rounded-xl border border-accent-gold/20">
                  <div className="text-accent-gold font-bold text-lg mb-1">精準捕捉</div>
                  <div className="text-text-gray text-sm">不遺漏任何關鍵細節</div>
                </div>
                <div className="bg-accent-gold/10 p-6 rounded-xl border border-accent-gold/20">
                  <div className="text-accent-gold font-bold text-lg mb-1">快速交付</div>
                  <div className="text-text-gray text-sm">高效剪輯流程</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-24 px-6 bg-linear-to-br from-[#2a2a2a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">深度實戰案例</h2>

          {/* Case 1 */}
          <div className="bg-secondary-dark rounded-2xl p-8 md:p-12 border-2 border-accent-gold mb-20">
            <h3 className="text-3xl font-bold text-accent-gold mb-8 text-center">案例一：美髮職人IP經營 (長期合作案例)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">合作背景</h4>
                  <p className="text-text-gray">合作對象為技術高度執著的髮廊老闆 (同時為美髮同業老師)</p>
                </div>
                <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">受眾設定</h4>
                  <p className="text-text-gray">同行 (設計師) → 客人 → 一般網路觀眾</p>
                </div>
                <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">製作目的</h4>
                  <ul className="list-disc list-inside text-text-gray space-y-1">
                    <li>讓美髮人理解獨家技術邏輯，產生學習興趣</li>
                    <li>建立專業、權威辨識度，而非搞笑引流型帳號</li>
                    <li>帶動同行課程詢問與客人線下消費</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">長期成果</h4>
                  <p className="text-text-gray">每月固定瀏覽率破百萬，課程詢問、線下客量穩定成長</p>
                  <p className="text-accent-gold font-bold mt-4">我們協助建立的是「可長期經營的專業內容結構」</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { num: '100萬+', label: '月均瀏覽' },
                    { num: '破萬', label: '精準TA流量' },
                    { num: '百萬+', label: '轉換價值' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-primary-dark p-4 rounded-xl text-center border-2 border-accent-gold">
                      <div className="text-2xl font-bold text-accent-gold">{stat.num}</div>
                      <div className="text-xs text-text-gray">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Analytics Showcase */}
            <div className="mt-12 bg-linear-to-br from-accent-gold/10 to-accent-orange/10 p-8 rounded-2xl border-2 border-accent-gold">
              <h4 className="text-2xl font-bold text-accent-gold mb-4 text-center flex items-center justify-center gap-3">
                <BarChart3 className="w-8 h-8" /> 實際流量數據證明
              </h4>
              <p className="text-center text-text-gray mb-8">真實後台數據，無廣告投放的自然流量成長</p>
              
              <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold mb-8 text-text-gray">
                <strong className="text-accent-gold">💡 數據說明：</strong> 以下為實際後台截圖，展示長期經營下的自然流量成長。我們專注於建立「可持續的內容結構」，而非短期爆紅。
              </div>

              {/* Added Image Grid for Traffic Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { src: '/data1.png', alt: 'Reels 流量 1.3M+' },
                  { src: '/data2.png', alt: 'Reel 洞察報告 879K+' },
                  { src: '/data3.png', alt: '90天總瀏覽 4.1M+' },
                  { src: '/data4.png', alt: '多支影片穩定流量' }
                ].map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="rounded-xl overflow-hidden border-2 border-accent-gold/30 cursor-pointer shadow-lg bg-primary-dark group"
                    onClick={() => setSelectedImage(img.src)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Fallback if image not found yet
                          (e.target as HTMLImageElement).src = `https://picsum.photos/seed/data${i}/400/600`;
                        }}
                      />
                      <div className="absolute inset-0 bg-accent-gold/0 group-hover:bg-accent-gold/10 transition-colors"></div>
                    </div>
                    <div className="p-3 text-center text-sm font-medium text-text-gray bg-secondary-dark/80 border-t border-accent-gold/10">
                      {img.alt}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <a 
                  href="https://drive.google.com/drive/folders/1DBhamSlHH-TUOkcNDJ3KAD2JMimIVWvX?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-linear-to-r from-accent-gold/20 to-accent-orange/20 border-2 border-accent-gold px-8 py-4 rounded-xl text-xl font-bold text-text-light hover:bg-accent-gold/30 transition-all hover:scale-105"
                >
                  📊 查看更多流量數據截圖 <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-secondary-dark rounded-2xl p-8 md:p-12 border-2 border-accent-gold">
            <h3 className="text-3xl font-bold text-accent-gold mb-8 text-center">案例二：預售屋代銷公司 (短影音成績單)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">核心目標</h4>
                  <p className="text-text-gray">製造高度連結感，刺激詢問與實際到場</p>
                </div>
                <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">策略</h4>
                  <p className="text-text-gray">抓緊黃金三秒，以「訂簽只要18萬，跟二手車差不多價格」建立強烈連結</p>
                </div>
                <div className="bg-accent-gold/5 p-6 rounded-xl border-l-4 border-accent-gold">
                  <h4 className="text-xl font-semibold text-accent-gold mb-2">成效摘要</h4>
                  <p className="text-text-gray">成功讓原本冷清的房市區域再次引起討論關注</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '300萬+', label: '總流量' },
                  { num: '5000+', label: '留言互動' },
                  { num: '5000+', label: '私訊詢問' },
                  { num: '1500+', label: '粉絲成長' }
                ].map((stat, i) => (
                  <div key={i} className="bg-primary-dark p-6 rounded-2xl text-center border-2 border-accent-gold shadow-lg">
                    <div className="text-3xl font-bold text-accent-gold mb-1">{stat.num}</div>
                    <div className="text-sm text-text-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="section-title">合作原則與流程</h2>

        <div className="max-w-3xl mx-auto text-center text-xl text-text-gray mb-16 bg-accent-gold/10 p-8 rounded-2xl border-2 border-accent-gold">
          「為了確保每一部作品的精準度，我們採預約制製作，不承接急促委託。」
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { num: '01', title: '專人線上諮詢', desc: '需求確認' },
            { num: '02', title: '合約訂定', desc: '保障雙方' },
            { num: '03', title: 'IP定位會議', desc: '聚焦特色' },
            { num: '04', title: '專屬企劃', desc: '腳本設計' }
          ].map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, borderColor: '#D4A574' }}
              className="bg-secondary-dark p-8 rounded-xl text-center border-2 border-transparent transition-all"
            >
              <div className="w-16 h-16 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-accent-gold mb-2">{step.title}</h3>
              <p className="text-text-gray">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '前期溝通', items: ['確認影片用途與受眾', '規劃文字腳本', '確認活動紀錄重點'] },
            { title: '拍攝執行', items: ['短影音單支拍攝約1小時內', '可同日多拍', '活動紀錄以流程完整與穩定為優先'] },
            { title: '後期交付', items: ['剪輯約2-3個工作天', '提供2次免費修改', '明確交付規格與使用格式'] }
          ].map((detail, i) => (
            <div key={i} className="bg-secondary-dark p-8 rounded-xl border-l-4 border-accent-gold">
              <h3 className="text-xl font-bold text-accent-gold mb-6">{detail.title}</h3>
              <ul className="space-y-4">
                {detail.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-text-gray border-b border-accent-gold/10 pb-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-gold mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark pt-20 pb-10 px-6 border-t border-accent-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl font-bold text-accent-gold mb-4 tracking-widest">光宙數位創意</div>
          <p className="text-xl text-text-gray mb-2">用影像，讓專業被看懂</p>
          <p className="text-text-gray mb-8">短影音內容製作 × 活動影像紀錄</p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="text-text-gray hover:text-accent-gold transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-text-gray hover:text-accent-gold transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-text-gray hover:text-accent-gold transition-colors"><Youtube className="w-6 h-6" /></a>
          </div>

          <div 
            className="flex items-center justify-center gap-2 pt-8 border-t border-accent-gold/20 text-text-gray text-sm cursor-pointer hover:text-accent-gold transition-colors"
            onClick={() => window.open('https://kuse.ai', '_blank')}
          >
            <span>made with</span>
            <svg className="h-5" viewBox="0,0,160,44" xmlns="http://www.w3.org/2000/svg"><path d="m.01,20.65C-.43,8.25,9.3-2.03,22.04.34,34.78,2.72,43.29,8.32,43.29,22.9s-8.66,19.01-22.03,20.3C7.9,44.5.46,33.05.01,20.65z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="m146.76,7.94c8.07,0,13.24,6.15,13.24,14.58v1.39h-20.75c.45,4.05,3.51,7.37,8.57,7.37,2.62,0,5.73-1.05,7.62-2.94l2.67,3.83c-2.67,2.55-6.62,3.88-10.9,3.88-8.07,0-14.08-5.6-14.08-14.08,0-7.76,5.67-14.02,13.63-14.02zm0,4.77c-5.01,0-7.29,3.83-7.57,7.1h15.13c-.11-3.16-2.28-7.1-7.57-7.1z" fill="currentColor"/><path d="m86.64,24.49c0,4.15,2.39,6.84,6.84,6.84,4.4,0,6.84-2.69,6.84-6.84V8.55h5.37v16.33c0,6.7-4.06,11.14-12.21,11.14-8.21,0-12.21-4.5-12.21-11.09V8.55h5.37v15.94zm32.99-16.55c4.49,0,8.06,1.47,10.6,3.86l-2.59,3.81c-2.05-2-5.28-3.08-8.06-3.08-2.88,0-4.84,1.37-4.84,3.32,0,1.91,2.64,2.54,5.81,3.27,4.59,1.08,10.26,2.4,10.26,8.46,0,4.94-3.76,8.41-11.14,8.41-4.98,0-8.94-1.76-11.24-4.11l2.54-4.11c1.86,1.91,5.18,3.67,8.84,3.67,3.91,0,5.57-1.66,5.57-3.62,0-2.3-2.88-2.98-6.21-3.76-4.54-1.08-9.87-2.3-9.87-8.06,0-4.5,4.2-8.06,10.31-8.06zM60.79,20.82,71.44,8.55h6.5L66.46,21.26,78.82,35.44h-6.5l-9.28-11.1-2.25,2.49v8.6h-5.33V8.55h5.33v12.27z" fill="currentColor"/></svg>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center">
              <button 
                className="absolute -top-12 right-0 w-10 h-10 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Lightbox" 
                className="max-w-full max-h-[90vh] rounded-lg shadow-[0_0_50px_rgba(212,165,116,0.5)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
