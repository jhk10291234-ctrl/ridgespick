import { motion } from "motion/react";
import { LayoutDashboard, FileText, Image as ImageIcon, Settings, Users, BarChart3, LogOut } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: <LayoutDashboard size={20} />, label: "대시보드" },
    { id: "portfolio", icon: <ImageIcon size={20} />, label: "포트폴리오 관리" },
    { id: "blog", icon: <FileText size={20} />, label: "블로그 관리" },
    { id: "inquiry", icon: <Users size={20} />, label: "문의 현황" },
    { id: "settings", icon: <Settings size={20} />, label: "사이트 설정" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex text-gray-300">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col">
        <div className="p-8 text-xl font-bold text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-accent rounded" />
          RIDGE ADMIN
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? "bg-purple-accent text-white" 
                  : "hover:bg-white/5 text-gray-500 hover:text-gray-300"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-white/5">
          <button className="flex items-center gap-3 text-gray-500 hover:text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h1>
            <p className="text-gray-500">릿지 웹사이트의 모든 정보를 관리합니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-bold text-white">관리자님</div>
              <div className="text-xs text-gray-500">최종 접속: 2시간 전</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10" />
          </div>
        </header>

        {/* Dashboard Content Placeholder */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                  <BarChart3 size={24} />
                </div>
                <span className="text-gray-400 font-medium">오늘 방문자</span>
              </div>
              <div className="text-4xl font-bold text-white">1,284</div>
              <div className="text-sm text-green-500 mt-2">+12.5% vs 어제</div>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-accent/10 text-purple-accent rounded-xl">
                  <Users size={24} />
                </div>
                <span className="text-gray-400 font-medium">새로운 문의</span>
              </div>
              <div className="text-4xl font-bold text-white">12</div>
              <div className="text-sm text-purple-accent mt-2">미확인 3건</div>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
                  <FileText size={24} />
                </div>
                <span className="text-gray-400 font-medium">활성 게시글</span>
              </div>
              <div className="text-4xl font-bold text-white">48</div>
              <div className="text-sm text-gray-500 mt-2">포트폴리오 32 / 블로그 16</div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="max-w-3xl space-y-8">
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h2 className="text-xl font-bold text-white">기본 정보 설정</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">사이트 제목</label>
                  <input type="text" defaultValue="Ridge (릿지) - 프리미엄 디자인 에이전시" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-accent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">사이트 설명</label>
                  <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-accent outline-none transition-all" defaultValue="로고 디자인 및 홈페이지 제작 전문 에이전시 릿지입니다." />
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h2 className="text-xl font-bold text-white">테마 및 스타일</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">포인트 컬러</label>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-accent border-2 border-white" />
                    <input type="text" defaultValue="#8B5CF6" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">기본 폰트</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none">
                    <option>Pretendard</option>
                    <option>Inter</option>
                    <option>Noto Sans KR</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-purple-accent text-white px-8 py-3 rounded-xl font-bold purple-glow">
                설정 저장하기
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
