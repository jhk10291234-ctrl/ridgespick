import { motion } from "motion/react";
import { Palette, Layout, Rocket, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "로고 디자인",
    description: "브랜드의 철학과 가치를 담은 독창적이고 세련된 심볼을 제작합니다.",
    icon: <Palette className="text-purple-accent" size={32} />,
    features: ["브랜드 가이드라인 제공", "고해상도 원본 파일", "상표권 등록 지원"],
  },
  {
    title: "홈페이지 제작",
    description: "최신 트렌드와 고성능 아키텍처가 결합된 반응형 웹사이트를 구축합니다.",
    icon: <Layout className="text-purple-accent" size={32} />,
    features: ["반응형 레이아웃", "SEO 최적화", "관리자 대시보드"],
  },
  {
    title: "브랜딩 솔루션",
    description: "일관된 브랜드 경험을 위한 통합 디자인 시스템을 설계합니다.",
    icon: <Rocket className="text-purple-accent" size={32} />,
    features: ["명함/서식지 디자인", "SNS 템플릿", "마케팅 에셋"],
  },
  {
    title: "유지보수 & 보안",
    description: "안정적인 운영을 위한 실시간 모니터링과 보안 업데이트를 제공합니다.",
    icon: <ShieldCheck className="text-purple-accent" size={32} />,
    features: ["24/7 모니터링", "정기 백업", "성능 최적화"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            우리의 전문 서비스
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            릿지는 고객의 비즈니스 목표를 달성하기 위해 디자인과 기술의 완벽한 조화를 추구합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-purple-accent/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-purple-accent/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
