import { motion } from "motion/react";

const projects = [
  {
    title: "넥스트 테크 로고 리브랜딩",
    category: "Logo Design",
    image: "https://picsum.photos/seed/tech/800/600",
  },
  {
    title: "루미너스 뷰티 커머스",
    category: "Web Design",
    image: "https://picsum.photos/seed/beauty/800/600",
  },
  {
    title: "아틀라스 아키텍츠 포트폴리오",
    category: "Web Design",
    image: "https://picsum.photos/seed/architecture/800/600",
  },
  {
    title: "에코 라이프 브랜드 아이덴티티",
    category: "Branding",
    image: "https://picsum.photos/seed/eco/800/600",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              최근 프로젝트
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400"
            >
              릿지가 만들어낸 결과물들은 브랜드의 새로운 기준이 됩니다.
            </motion.p>
          </div>
          <button className="text-purple-accent font-bold hover:underline">
            전체 보기 →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="bg-purple-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    자세히 보기
                  </span>
                </div>
              </div>
              <div className="text-sm text-purple-accent font-semibold mb-2 uppercase tracking-wider">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-purple-accent transition-colors">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
