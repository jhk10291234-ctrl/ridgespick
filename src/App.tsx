import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import LogoGenerator from "./components/LogoGenerator";
import AdminDashboard from "./components/AdminDashboard";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowUp, Mail, Phone } from "lucide-react";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    
    // Simple URL-based admin check for demo purposes
    if (window.location.hash === "#admin") {
      setIsAdmin(true);
    }

    const handleHashChange = () => {
      setIsAdmin(window.location.hash === "#admin");
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="bg-deep-black min-h-screen selection:bg-purple-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <LogoGenerator />
        
        {/* Blog Section Placeholder */}
        <section id="blog" className="py-24 bg-deep-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">릿지 인사이트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-6 rounded-3xl text-left hover:translate-y-[-8px] transition-transform cursor-pointer">
                  <div className="aspect-video bg-white/5 rounded-2xl mb-6 overflow-hidden">
                    <img src={`https://picsum.photos/seed/blog${i}/600/400`} alt="Blog" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-purple-accent text-xs font-bold mb-2">DESIGN TRENDS</div>
                  <h3 className="text-xl font-bold mb-4">2026년 웹 디자인 트렌드: 미니멀리즘과 모션의 결합</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">디자인은 단순히 예쁜 것을 넘어 사용자와의 상호작용을 어떻게 이끌어내는지가 중요해지고 있습니다...</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-deep-black to-purple-accent/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-7xl font-black mb-8 leading-tight"
                >
                  당신의 아이디어를 <br />
                  <span className="text-purple-accent italic">현실</span>로 만드세요.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 mb-12 text-lg md:text-xl leading-relaxed"
                >
                  지금 바로 릿지와 함께 프로젝트를 시작하고 브랜드의 가치를 높이세요. <br />
                  전문 상담원이 24시간 이내에 답변해 드립니다.
                </motion.p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase">Email</div>
                      <div className="text-white font-medium">contact@ridge.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase">Phone</div>
                      <div className="text-white font-medium">02-1234-5678</div>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
            <a href="#" className="hover:text-white transition-colors">KakaoTalk</a>
          </div>
          <p>© 2026 RIDGE. All rights reserved.</p>
          <p className="mt-2">로고 디자인 및 홈페이지 제작 전문 에이전시 릿지</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-purple-accent transition-colors"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        <button className="w-16 h-16 bg-purple-accent rounded-full flex items-center justify-center text-white purple-glow shadow-2xl hover:scale-110 transition-transform">
          <MessageSquare size={28} />
        </button>
      </div>
    </div>
  );
}
