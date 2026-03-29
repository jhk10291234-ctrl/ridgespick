import { motion } from "motion/react";
import { ArrowRight, Sparkles, Box, Zap, Heart, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020202]">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-purple-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-purple-accent/5 rounded-full blur-[100px]" />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating "Imagination Items" */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] hidden lg:block"
        >
          <div className="glass-morph p-6 rounded-2xl border-purple-accent/20 rotate-12">
            <div className="w-12 h-12 bg-purple-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Star className="text-purple-accent" size={24} />
            </div>
            <div className="h-2 w-20 bg-white/10 rounded-full mb-2" />
            <div className="h-2 w-12 bg-white/5 rounded-full" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-[10%] hidden lg:block"
        >
          <div className="glass-morph p-5 rounded-3xl border-white/5 -rotate-6">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="w-32 h-20 bg-white/5 rounded-xl flex items-center justify-center">
              <Box className="text-white/20" size={32} />
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[5%] w-2 h-2 bg-purple-accent rounded-full shadow-[0_0_20px_#8B5CF6]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[40%] right-[5%] w-3 h-3 bg-purple-accent rounded-full shadow-[0_0_20px_#8B5CF6]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-accent/10 border border-purple-accent/20 text-purple-accent text-xs font-bold uppercase tracking-[0.2em] mb-10"
        >
          <Sparkles size={14} />
          <span>RIDGE IMAGINATION STORE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-6 leading-[0.85] uppercase italic">
            <span className="block text-white">Dream</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-purple-accent to-purple-900/50">
              Curator
            </span>
          </h1>
          
          {/* Decorative Sub-heading */}
          <div className="absolute -top-4 -right-4 md:right-20 md:top-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 md:w-32 md:h-32 border border-white/10 rounded-full flex items-center justify-center border-dashed"
            >
              <div className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                EST. 2026 • RIDGE • 
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <p className="text-gray-400 text-lg md:text-2xl font-medium leading-tight mb-12">
            "상상을 현실로 진열하는 곳"<br />
            <span className="text-white">릿지 상상력 점포</span>는 당신의 막연한 꿈을 <br className="hidden md:block" />
            가장 정교한 디자인과 기술의 상품으로 완성합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full text-lg font-black transition-all flex items-center justify-center gap-3 group"
            >
              상점 둘러보기
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="w-full sm:w-auto bg-transparent text-white px-10 py-5 rounded-full text-lg font-black border border-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Zap size={20} className="text-purple-accent" />
              커스텀 주문하기
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">Scroll to Explore</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-purple-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
