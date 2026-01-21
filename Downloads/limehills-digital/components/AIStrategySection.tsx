
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const AIStrategySection: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string[] | null>(null);

  const generateStrategy = async () => {
    if (!industry.trim()) return;
    setLoading(true);
    setStrategy(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Act as a senior digital strategist for Limehills, a high-impact digital agency. Generate a 3-point digital growth strategy for a company in the ${industry} industry. Focus on bold branding, peak performance, and aggressive growth. Return only a JSON array of 3 concise strings.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
      });

      const result = JSON.parse(response.text?.trim() || "[]");
      setStrategy(result);
    } catch (error) {
      console.error("AI Error:", error);
      setStrategy([
        "Deploy a high-contrast brand identity.",
        "Engineers ultra-low latency architecture.",
        "Aggressive multi-channel content saturation."
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white border-8 border-blue-900 p-10 md:p-16 brutalist-shadow relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-blue-900 text-white px-6 py-2 font-black uppercase text-xs tracking-widest rotate-90 origin-top-right translate-x-12 translate-y-12">
        Beta Tool v1.0
      </div>
      
      <div className="max-w-4xl">
        <h2 className="text-6xl font-black text-blue-900 uppercase mb-4 tracking-tighter leading-none">
          Strategy<br /><span className="text-blue-500 italic">Forge</span>
        </h2>
        <p className="text-2xl font-bold text-blue-800 mb-10">
          Get a professional-grade digital ascent plan in seconds. Input your domain below.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <input 
            type="text" 
            placeholder="e.g. Fintech, E-Commerce, Logistics"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="flex-1 bg-blue-50 border-4 border-blue-900 p-6 text-2xl font-black text-blue-900 placeholder:text-blue-300 brutalist-shadow-sm focus:outline-none focus:ring-8 ring-blue-500/20"
          />
          <button 
            onClick={generateStrategy}
            disabled={loading}
            className="bg-blue-600 text-white border-4 border-blue-900 px-10 py-6 text-2xl font-black uppercase brutalist-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#1e3a8a] transition-all disabled:opacity-50"
          >
            {loading ? 'Forging...' : 'Forge Plan'}
          </button>
        </div>

        {strategy && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {strategy.map((item, idx) => (
              <div key={idx} className="bg-blue-900 text-white p-8 border-4 border-blue-900 brutalist-shadow-sm flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 group-hover:text-white/10 transition-all">
                  {idx + 1}
                </div>
                <div className="w-10 h-10 bg-blue-500 border-2 border-white mb-2"></div>
                <p className="text-xl font-bold leading-tight relative z-10 uppercase italic">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIStrategySection;
