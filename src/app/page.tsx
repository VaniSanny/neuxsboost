"use client";

import { motion } from "framer-motion";
import { 
    Search, 
    ShoppingCart, 
    User, 
    Star, 
    ShieldCheck, 
    Clock, 
    Zap,
    ArrowRight,
    Filter,
    ChevronDown,
    LayoutGrid,
    MessageSquare,
    Globe,
    Wand2,
    Gift,
    Sparkles,
    Sliders
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
    const [shopData, setShopData] = useState<{ categories: any[], products: any[] }>({ 
        categories: [], 
        products: [] 
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/shop")
            .then(res => res.json())
            .then(data => {
                if (data.categories && data.products && data.categories.length > 0) {
                    setShopData(data);
                } else {
                    // Fallback Defaults
                    setShopData({
                        categories: [
                            { id: "1", title: "Boosting Services", icon: "Zap", items: ["Max Leveling", "PvP Boost"] },
                            { id: "2", title: "Digital Goodies", icon: "Gift", items: ["Crown Codes", "Kroger Cards"] }
                        ],
                        products: [
                            { id: "lev", title: "Max Level 1-170 Speedrun", cat: "Boosting Services", price: "19.99", rating: 5.0, reviews: 1250, badge: "Hot", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e", type: "scalable" },
                            { id: "crowns", title: "60,000 Crowns Digital Code", cat: "Digital Goodies", price: "54.99", rating: 5.0, reviews: 3210, badge: "Instant", img: "https://images.unsplash.com/photo-1550745674-32d73315a67f", type: "fixed" },
                        ]
                    });
                }
                setLoading(false);
            });
    }, []);

    const getIcon = (iconName: string) => {
        if (iconName === "Gift") return <Gift size={18} className="text-purple-400" />;
        return <Zap size={18} className="text-[#ffcd00]" />;
    };

    return (
        <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-[#ffcd00]/30 selection:text-white pb-20">
            {/* High-End Header */}
            <header className="sticky top-0 z-[100] bg-[#121212]/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <div className="w-10 h-10 bg-[#ffcd00] rounded-xl flex items-center justify-center shadow-lg shadow-[#ffcd00]/20 rotate-2">
                            <Wand2 size={24} className="text-black" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter uppercase italic">WIZARD<span className="text-[#ffcd00]">NEXUS</span></span>
                    </Link>

                    <div className="flex-1 max-w-2xl relative hidden md:block">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search the Spiral for Boosts, Codes or Gear..." 
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 text-[13px] focus:outline-none focus:border-[#ffcd00]/50 focus:bg-white/[0.08] transition-all font-bold tracking-wide"
                        />
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-2 text-[11px] font-black text-white/20 hover:text-[#ffcd00] transition-colors cursor-pointer tracking-[0.2em] uppercase">
                            <Globe size={16} />
                            <span>EN</span>
                        </div>
                        <div className="relative cursor-pointer hover:text-[#ffcd00] transition-colors">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#ffcd00] text-black text-[10px] font-black rounded-full flex items-center justify-center shadow-lg">0</span>
                        </div>
                        <Link href="/admin" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all border border-white/10">
                            <User size={18} />
                            <span>Access</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Stage */}
            <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
                {/* Sidebar */}
                <aside className="w-80 shrink-0 hidden lg:block">
                    <div className="space-y-12 sticky top-36">
                        {!loading && shopData.categories.map(cat => (
                            <div key={cat.id} className="space-y-6">
                                <div className="flex items-center gap-3 px-4">
                                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">{getIcon(cat.icon)}</div>
                                    <h3 className="text-[12px] font-black text-white uppercase tracking-[0.3em] italic">{cat.title}</h3>
                                </div>
                                <div className="space-y-1">
                                    {cat.items.map((item: string) => (
                                        <Link 
                                            key={item} 
                                            href="#"
                                            className="flex items-center justify-between px-6 py-3 rounded-2xl hover:bg-white/5 group transition-all border border-transparent hover:border-white/5"
                                        >
                                            <span className="text-[13px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-tight italic">{item}</span>
                                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ffcd00]" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="p-8 bg-gradient-to-br from-[#ffcd00]/20 to-transparent rounded-[40px] border border-[#ffcd00]/10 mt-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform"><Sparkles size={48} className="text-[#ffcd00]" /></div>
                            <h4 className="text-[11px] font-black text-[#ffcd00] uppercase tracking-widest mb-3">Partner Program</h4>
                            <p className="text-[13px] text-white/50 font-bold mb-6 italic leading-relaxed">Join our elite team and earn from the Spiral's success.</p>
                            <button className="w-full py-4 bg-white text-black hover:bg-[#ffcd00] transition-all rounded-2xl text-[11px] font-black uppercase tracking-widest">Apply Now</button>
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <main className="flex-1 min-w-0 space-y-16">
                    {/* Hero Banner */}
                    <div className="relative rounded-[48px] overflow-hidden bg-[#121212] border border-white/5 group shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                        <img 
                            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[10s]"
                        />
                        <div className="relative z-20 p-16 lg:p-24 max-w-3xl">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="px-4 py-1.5 bg-[#ffcd00] text-black text-[10px] font-black uppercase rounded-full shadow-2xl tracking-widest">Live Updates</span>
                                <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em]">Proprietary Nexus Platform</span>
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.8] mb-10">
                                The Elite <br /> <span className="text-[#ffcd00]">Nexus hub.</span>
                            </h1>
                            <p className="text-white/40 font-bold text-lg leading-relaxed mb-12 max-w-md italic">
                                Industrial-grade boosting services and rare digital treasures, protected by Ravenwood's finest.
                            </p>
                            <div className="flex gap-6">
                                <button className="px-10 py-6 bg-[#ffcd00] text-black text-[14px] font-black uppercase rounded-2xl hover:bg-white transition-all shadow-2xl shadow-[#ffcd00]/20 tracking-widest animate-pulse">Shop Marketplace</button>
                                <button className="px-10 py-6 bg-white/5 backdrop-blur-md text-white text-[14px] font-black uppercase rounded-2xl hover:bg-white/10 transition-all border border-white/10 tracking-widest">Read Reviews</button>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Product Grid */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between border-b border-white/5 pb-8">
                            <div className="flex items-center gap-4">
                                <LayoutGrid size={24} className="text-[#ffcd00]" />
                                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Current <span className="text-white/30">Manifest</span></h2>
                            </div>
                            <button className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl text-[11px] font-black text-white/30 hover:text-[#ffcd00] transition-all border border-white/5 uppercase tracking-widest">
                                <Filter size={18} />
                                <span>Filter Spells</span>
                            </button>
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1,2,3,4,5,6].map(i => <div key={i} className="aspect-[3/4] bg-white/5 rounded-[48px] animate-pulse" />)}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {shopData.products.map((deal) => (
                                    <Link href={`/products/${deal.id}`} key={deal.id}>
                                        <motion.div 
                                            whileHover={{ y: -10 }}
                                            className="bg-[#121212] rounded-[48px] overflow-hidden border border-white/5 group relative flex flex-col h-full hover:border-[#ffcd00]/30 transition-all shadow-xl hover:shadow-[#ffcd00]/5"
                                        >
                                            <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-[#ffcd00] text-black text-[10px] font-black uppercase rounded-full shadow-2xl tracking-widest">
                                                {deal.badge || 'New'}
                                            </div>
                                            <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                                                <img src={deal.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                                            </div>
                                            <div className="p-10 flex flex-col flex-1">
                                                <div className="mb-6">
                                                    <span className="text-[10px] font-black text-[#ffcd00] uppercase tracking-[0.3em] italic">{deal.cat}</span>
                                                    <h3 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-[#ffcd00] transition-colors mt-2 leading-none">{deal.title}</h3>
                                                </div>
                                                
                                                <div className="flex items-center gap-3 mb-10 mt-auto">
                                                    <div className="flex text-[#ffcd00]">
                                                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(deal.rating || 5) ? "currentColor" : "none"} />)}
                                                    </div>
                                                    <span className="text-[12px] font-black text-white/20 uppercase tracking-widest">({deal.reviews || 0} reviews)</span>
                                                </div>

                                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-[9px] text-white/20 font-black uppercase tracking-[0.3em] italic">From</span>
                                                        <span className="text-3xl font-black text-white italic">{deal.price}€</span>
                                                    </div>
                                                    <div className="w-14 h-14 bg-white/5 group-hover:bg-[#ffcd00] group-hover:text-black rounded-2xl flex items-center justify-center transition-all border border-white/10 shadow-2xl group-hover:rotate-12">
                                                        {deal.type === 'scalable' ? <Sliders size={24} /> : <ArrowRight size={24} />}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* Testimonials */}
            <section className="bg-white/[0.01] border-y border-white/5 py-32 px-6 mt-20">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h2 className="text-[11px] font-black text-[#ffcd00] uppercase tracking-[0.6em] mb-4 italic">Social Proof</h2>
                    <h3 className="text-6xl font-black italic uppercase tracking-tighter mb-20">Voices of <span className="text-white/10 italic">Ravenwood</span></h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { name: "Warlord X", text: "Industrial grade safety. My account was leveled to 170 in recorded speed. Simply the best." },
                            { name: "Mythic Mage", text: "Got my Kroger card instantly. No scam, no wait. WizardNexus is the real deal." },
                            { name: "PVP Queen", text: "Warlord rank achieved! The booster was polite and very skilled. 100% recommend." }
                        ].map((rev, i) => (
                            <div key={i} className="p-12 bg-[#121212] rounded-[48px] border border-white/5 text-left space-y-8 hover:border-[#ffcd00]/20 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 text-[#ffcd00]"><Star size={64} fill="currentColor" /></div>
                                <div className="flex text-[#ffcd00] gap-1 group-hover:scale-110 transition-transform origin-left">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                </div>
                                <p className="text-lg text-white/40 font-bold italic leading-relaxed relative z-10">"{rev.text}"</p>
                                <div className="pt-8 flex items-center gap-6 border-t border-white/5">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#ffcd00] to-transparent rounded-2xl opacity-20" />
                                    <span className="text-[16px] font-black italic uppercase tracking-tight italic">{rev.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#050505] pt-32 pb-20 px-6 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
                        <div className="col-span-2">
                            <Link href="/" className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-[#ffcd00] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ffcd00]/10">
                                    <Wand2 size={28} className="text-black" />
                                </div>
                                <span className="text-3xl font-black italic uppercase tracking-tighter">WIZARD<span className="text-[#ffcd00]">NEXUS</span></span>
                            </Link>
                            <p className="text-white/20 text-[16px] font-bold leading-relaxed max-w-sm mb-12 italic">
                                The Spiral's premier marketplace for elite boosting and digital treasures. Powered by Nexus Engine v4.
                            </p>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#ffcd00] hover:text-black transition-all hover:-rotate-6 shadow-2xl">
                                    <MessageSquare size={24} />
                                </div>
                                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all hover:-rotate-6">
                                    <Globe size={24} />
                                </div>
                            </div>
                        </div>
                        
                        {['Services', 'Resources'].map(cat => (
                            <div key={cat} className="space-y-10">
                                <h5 className="text-[13px] font-black text-[#ffcd00] uppercase tracking-[0.4em] italic">{cat}</h5>
                                <ul className="space-y-6">
                                    {['Marketplace', 'Affiliate', 'Support', 'Privacy'].map(l => (
                                        <li key={l}><Link href="#" className="text-[15px] font-black italic text-white/20 hover:text-white transition-colors uppercase tracking-tight">{l}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] font-black uppercase tracking-[0.3em] text-white/10">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <span>© 2026 WizardNexus Core.</span>
                            <span className="hidden md:block w-1.5 h-1.5 bg-white/5 rounded-full" />
                            <span>NOT AFFILIATED WITH KINGSISLE.</span>
                        </div>
                        <div className="flex gap-16">
                            <span className="hover:text-white transition-colors cursor-pointer">Terms of Spells</span>
                            <span className="hover:text-white transition-colors cursor-pointer">Privacy Cloak</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
