import { motion } from "motion/react";
import { Send, User, Mail, Phone, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xojpejjb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 md:p-12 rounded-[2rem] border-purple-accent/20 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">문의가 접수되었습니다!</h3>
          <p className="text-gray-400">빠른 시일 내에 입력하신 연락처로 답변 드리겠습니다.</p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-8 text-purple-accent font-bold hover:underline"
          >
            추가 문의하기
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 flex items-center gap-2 ml-1">
                <User size={14} className="text-purple-accent" />
                성함
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-accent focus:ring-1 focus:ring-purple-accent outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 flex items-center gap-2 ml-1">
                <Mail size={14} className="text-purple-accent" />
                이메일
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="example@ridge.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-accent focus:ring-1 focus:ring-purple-accent outline-none transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 flex items-center gap-2 ml-1">
              <Phone size={14} className="text-purple-accent" />
              연락처
            </label>
            <input
              required
              name="phone"
              type="tel"
              placeholder="010-0000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-accent focus:ring-1 focus:ring-purple-accent outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 flex items-center gap-2 ml-1">
              <MessageSquare size={14} className="text-purple-accent" />
              문의 내용
            </label>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="프로젝트에 대해 자유롭게 설명해주세요."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-accent focus:ring-1 focus:ring-purple-accent outline-none transition-all placeholder:text-gray-600 resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm font-medium text-center">
              제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-purple-accent text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 purple-glow hover:bg-purple-600 transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                제출 중...
                <Loader2 size={20} className="animate-spin" />
              </>
            ) : (
              <>
                상담 신청하기
                <Send size={20} />
              </>
            )}
          </motion.button>
          
          <p className="text-center text-xs text-gray-600 mt-6">
            개인정보 수집 및 이용에 동의함으로 간주됩니다.
          </p>
        </form>
      )}
    </motion.div>
  );
}
