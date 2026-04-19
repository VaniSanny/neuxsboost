"use client";

import { useState, useEffect } from "react";
import { 
    Star, 
    ShieldCheck, 
    Clock, 
    Zap, 
    ChevronRight, 
    Shield, 
    User, 
    CheckCircle2, 
    MessageCircle,
    ShoppingCart,
    Info,
    ArrowLeft,
    Wand2
} from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
    const params = useParams();
    const id = params?.id;
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Configurator State
    const [startLevel, setStartLevel] = useState(1);
    const [endLevel, setEndLevel] = useState(170);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [boostType, setBoostType] = useState<'piloted' | 'selfplay'>('piloted');

    useEffect(() => {
        fetch("/api/admin/shop")
            .then(res => res.json())
            .then(data => {
                const p = data.products.find((item: any) => item.id === id);
                if (p) {
                    setProduct(p);
                    if (p.config) {
                        setStartLevel(p.config.min || 1);
                        setEndLevel(p.config.max || 170);
                    }
                }
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">Loading Spells...</div>;
    if (!product) return <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">Service not found in the Spiral.</div>;

    const basePrice = Number(product.price);
    const levelDiff = endLevel - startLevel;
    const pricePerLevel = product.config?.pricePerUnit || 0;
    
    // Calculate Option Prices
    const optionsTotal = (product.config?.options || [])
        .filter((opt: any) => selectedOptions.includes(opt.name))
        .reduce((sum: number, opt: any) => sum + opt.price, 0);

    const totalPrice = basePrice + (levelDiff > 0 ? levelDiff * pricePerLevel : 0) + optionsTotal;

    const toggleOption = (name: string) => {
        setSelectedOptions(prev => prev.includes(name) ? prev.filter(o => o !== name) : [...prev, name]);
    };

    return (
        <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-[#ffcd00]/30 selection:text-white pb-32">
            {/* Minimal Header */}
            <header className="h-20 bg-[#121212]/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <ArrowLeft size={18} className="text-[#ffcd00]" />
                        <span className="text-sm font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors">Back to Market</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#ffcd00] rounded-lg rotate-3 flex items-center justify-center">
                            <Wand2 size={20} className="text-black" />
                        </div>
                        <span className="text-xl font-bold italic uppercase tracking-tighter">Wizard<span className="text-[#ffcd00]">Nexus</span></span>
                    </Link>
                    <div className="w-24" /> {/* Spacer */}
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto px-6 py-12">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[11px] font-black text-white/20 uppercase tracking-[0.3em] mb-8">
                    <span>Wizard101</span>
                    <ChevronRight size={10} />
                    <span>{product.cat}</span>
                    <ChevronRight size={10} />
                    <span className="text-[#ffcd00]">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Configurator */}
                    <div className="lg:col-span-8 space-y-12">
                        <section>
                            <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-6">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-6">
                                <div className="flex text-[#ffcd00] gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <span className="text-sm font-bold text-white/40">{product.rating} Rating from 500+ Verified Wizards</span>
                            </div>
                        </section>

                        {/* Overgear-Style Configurator Box */}
                        <div className="bg-[#121212] rounded-[48px] border border-white/5 p-10 lg:p-14 space-y-12 shadow-2xl">
                            
                            {/* Level Range Slider (If Scalable) */}
                            {product.type === 'scalable' && (
                                <section className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-black italic uppercase tracking-tight">1. Select your Level Range</h3>
                                        <div className="px-4 py-2 bg-white/5 rounded-full text-[#ffcd00] text-xs font-black uppercase tracking-widest border border-[#ffcd00]/20">
                                            {levelDiff} Levels Total
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Starting Level</label>
                                            <div className="relative">
                                                <input 
                                                    type="range" min={product.config.min} max={endLevel - 1} value={startLevel}
                                                    onChange={(e) => setStartLevel(Number(e.target.value))}
                                                    className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#ffcd00]"
                                                />
                                                <div className="mt-4 text-3xl font-black italic text-[#ffcd00]">{startLevel}</div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Target Level</label>
                                            <div className="relative">
                                                <input 
                                                    type="range" min={startLevel + 1} max={product.config.max} value={endLevel}
                                                    onChange={(e) => setEndLevel(Number(e.target.value))}
                                                    className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#ffcd00]"
                                                />
                                                <div className="mt-4 text-3xl font-black italic text-[#ffcd00]">{endLevel}</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Execution Method */}
                            <section className="space-y-8">
                                <h3 className="text-xl font-black italic uppercase tracking-tight">2. Boost Execution</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { id: 'piloted', title: 'Piloted (Account Sharing)', desc: 'We play for you using a secure VPN.' },
                                        { id: 'selfplay', title: 'Self-play (Group play)', desc: 'Play with our pro team in your party.' },
                                    ].map(method => (
                                        <button 
                                            key={method.id}
                                            onClick={() => setBoostType(method.id as any)}
                                            className={`p-6 rounded-3xl border text-left transition-all ${boostType === method.id ? 'bg-[#ffcd00] border-[#ffcd00] text-black' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-black uppercase italic italic text-[13px] tracking-tight">{method.title}</h4>
                                                {boostType === method.id ? <CheckCircle2 size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                                            </div>
                                            <p className={`text-[11px] font-bold ${boostType === method.id ? 'text-black/60' : 'text-white/40'}`}>{method.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Add-ons */}
                            {product.config?.options && (
                                <section className="space-y-8">
                                    <h3 className="text-xl font-black italic uppercase tracking-tight">3. Strategic Add-ons</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {product.config.options.map((opt: any) => (
                                            <button 
                                                key={opt.name}
                                                onClick={() => toggleOption(opt.name)}
                                                className={`p-6 rounded-3xl border text-left transition-all flex items-center justify-between group ${selectedOptions.includes(opt.name) ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${selectedOptions.includes(opt.name) ? 'bg-black/5' : 'bg-white/5 group-hover:bg-[#ffcd00]/10'}`}>
                                                        <Zap size={20} className={selectedOptions.includes(opt.name) ? 'text-black' : 'text-[#ffcd00]'} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black uppercase italic text-[12px] leading-tight">{opt.name}</h4>
                                                        <span className={`text-[10px] font-bold ${selectedOptions.includes(opt.name) ? 'text-black/40' : 'text-white/30'}`}>+ {opt.price}€</span>
                                                    </div>
                                                </div>
                                                <div className={`w-6 h-6 rounded-lg transition-all flex items-center justify-center ${selectedOptions.includes(opt.name) ? 'bg-black text-white' : 'border-2 border-white/10'}`}>
                                                    {selectedOptions.includes(opt.name) && <CheckCircle2 size={14} />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>

                    {/* Right: Sticky Summary Box */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-6">
                            <div className="bg-[#121212] rounded-[48px] border border-white/5 p-10 overflow-hidden relative shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcd00]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                                
                                <div className="space-y-8 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-black italic uppercase italic tracking-tight">Order Summary</h3>
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 text-[#ffcd00]">
                                            <ShoppingCart size={18} />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/30 italic italic">
                                            <span>Base {product.cat}</span>
                                            <span className="text-white">{basePrice}€</span>
                                        </div>
                                        {levelDiff > 0 && (
                                            <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/30 italic italic">
                                                <span>Level Boost ({levelDiff} levels)</span>
                                                <span className="text-white">{Math.round(levelDiff * pricePerLevel * 100) / 100}€</span>
                                            </div>
                                        )}
                                        {selectedOptions.length > 0 && (
                                            <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/30 italic italic">
                                                <span>Add-ons ({selectedOptions.length})</span>
                                                <span className="text-white">+{optionsTotal}€</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/30 italic italic">
                                            <span>Execution</span>
                                            <span className="text-[#ffcd00]">{boostType}</span>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/10">
                                        <div className="flex items-end justify-between mb-8">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Final Price</span>
                                                <p className="text-5xl font-black italic text-[#ffcd00] tracking-tighter leading-none">{Math.round(totalPrice * 100) / 100}€</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest block mb-1">Instant Start</span>
                                                <span className="text-[11px] font-bold text-white/30">Est. 12-24 Hours</span>
                                            </div>
                                        </div>

                                        <button className="w-full h-20 bg-[#ffcd00] text-black rounded-3xl font-black uppercase italic italic text-xl shadow-2xl shadow-[#ffcd00]/20 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center gap-4">
                                            Seal the Deal
                                            <ChevronRight size={24} strokeWidth={3} />
                                        </button>
                                        <p className="text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mt-6 flex items-center justify-center gap-2">
                                            <Shield size={12} className="text-green-500" />
                                            100% Secure Transaction
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge Below */}
                            <div className="bg-white/5 rounded-3xl p-6 border border-white/5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center text-[#ffcd00]">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black uppercase tracking-widest">Nexus Guarantee</h4>
                                    <p className="text-[10px] font-bold text-white/30">Manual boosting. No bots. Private VPN.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
