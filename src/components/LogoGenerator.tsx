import { GoogleGenAI } from "@google/genai";
import { useState, useEffect } from "react";
import { Download, RefreshCw, Loader2 } from "lucide-react";

export default function LogoGenerator() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateLogo = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: "A world-class, ultra-minimalist brand identity logo for 'RIDGE'. The design features a sophisticated, continuous-line abstract mountain ridge that subtly forms a modern letter 'R'. Style: High-end Swiss graphic design, premium tech aesthetic. Colors: Deep matte black background with a sharp, neon-glowing Purple (#8B5CF6) accent line. The logo should feel expensive, precise, and innovative. 8k resolution, photorealistic studio lighting on a dark surface, vector-like precision, symmetrical balance.",
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
          },
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setLogoUrl(`data:image/png;base64,${base64EncodeString}`);
          break;
        }
      }
    } catch (error) {
      console.error("Logo generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateLogo();
  }, []);

  return (
    <section className="py-24 bg-deep-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">브랜드 아이덴티티</h2>
        <p className="text-gray-400 mb-12">릿지의 상상력이 담긴 공식 로고 디자인입니다.</p>

        <div className="max-w-md mx-auto">
          <div className="aspect-square glass-card rounded-[2.5rem] flex items-center justify-center overflow-hidden relative group">
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="text-purple-accent animate-spin" size={48} />
                <p className="text-sm text-gray-500 font-medium">로고를 생성 중입니다...</p>
              </div>
            ) : logoUrl ? (
              <>
                <img src={logoUrl} alt="Ridge Logo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    onClick={generateLogo}
                    className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
                    title="다시 생성"
                  >
                    <RefreshCw size={24} />
                  </button>
                  <a 
                    href={logoUrl} 
                    download="ridge-logo.png"
                    className="p-4 bg-purple-accent hover:bg-purple-600 rounded-full text-white transition-all"
                    title="다운로드"
                  >
                    <Download size={24} />
                  </a>
                </div>
              </>
            ) : (
              <button onClick={generateLogo} className="text-purple-accent font-bold">
                로고 생성하기
              </button>
            )}
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-deep-black border border-white/10 rounded-lg mb-2" />
              <span className="text-[10px] text-gray-500 uppercase font-bold">Deep Black</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-accent rounded-lg mb-2" />
              <span className="text-[10px] text-gray-500 uppercase font-bold">Ridge Purple</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-lg mb-2" />
              <span className="text-[10px] text-gray-500 uppercase font-bold">Pure White</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
