import { motion } from "motion/react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend or Firebase
    alert("문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다!");
    setFormData({ name: "", email: "", phone: "", message: "" });
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
            rows={4}
            placeholder="프로젝트에 대해 자유롭게 설명해주세요."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-purple-accent focus:ring-1 focus:ring-purple-accent outline-none transition-all placeholder:text-gray-600 resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-purple-accent text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 purple-glow hover:bg-purple-600 transition-all mt-4"
        >
          상담 신청하기
          <Send size={20} />
        </motion.button>
        
        <p className="text-center text-xs text-gray-600 mt-6">
          개인정보 수집 및 이용에 동의함으로 간주됩니다.
        </p>
      </form>
    </motion.div>
  );
}
