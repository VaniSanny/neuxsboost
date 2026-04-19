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
    Sparkles
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
                    // Fallback to defaults if Redis is empty
                    setShopData({
                        categories: [
                            {
                                id: "boosting",
                                title: "Boosting Services",
                                icon: "Zap",
                                items: ["Max Leveling (1-170)", "PvP Rank Boost", "Pet Mastery", "Gear Farming", "Raid & Dungeon Clearing"]
                            },
                            {
                                id: "digital",
                                title: "Digital Goodies",
                                icon: "Gift",
                                items: ["Crown Codes", "Exclusive Bundles", "Kroger Cards", "Gift Cards", "Membership Keys"]
                            }
                        ],
                        products: [
                            { id: "lev", title: "Max Level 170 Speedrun", cat: "Boosting Services", price: "19.99€", rating: 4.9, reviews: 1240, badge: "Hot", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e" },
                            { id: "crowns", title: "60,000 Crowns Digital Code", cat: "Digital Goodies", price: "54.99€", rating: 5.0, reviews: 3210, badge: "Instant", img: "https://images.unsplash.com/photo-1550745674-32d73315a67f" },
                            { id: "kroger", title: "Kroger Jewel's Card (Monthly Pet)", cat: "Digital Goodies", price: "14.99€", rating: 4.8, reviews: 432, badge: "Limited", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3" },
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
        <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#ffcd00]/30 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-[100] bg-[#1a1a1a] border-b border-white/5 shadow-xl">
                <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between gap-8">
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <div className="w-8 h-8 bg-[#ffcd00] rounded-lg flex items-center justify-center">
                            <Wand2 size={20} className="text-black" />
                        </div>
                        <span className="text-xl font-bold tracking-tight uppercase italic">WIZARD<span className="text-[#ffcd00]">NEXUS</span></span>
                    </Link>

                    <div className="flex-1 max-w-2xl relative hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                        <input 
                            type="text" 
                            placeholder="Find Boosts, Crown Codes or Kroger Cards..." 
                            className="w-full h-10 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 text-[13px] focus:outline-none focus:border-[#ffcd00]/50 focus:bg-white/10 transition-all font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center gap-2 text-[12px] font-bold text-white/40 hover:text-[#ffcd00] transition-colors cursor-pointer tracking-widest uppercase">
                            <Globe size={16} />
                            <span>DEU</span>
                        </div>
                        <div className="relative cursor-pointer hover:text-[#ffcd00] transition-colors">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#ffcd00] text-black text-[10px] font-black rounded-full flex items-center justify-center">0</span>
                        </div>
                        <Link href="/admin" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-[11px] font-black uppercase transition-all border border-white/10">
                            <User size={18} />
                            <span>Admin</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto px-4 py-8 flex gap-10">
                {/* Sidebar */}
                <aside className="w-72 shrink-0 hidden lg:block">
                    <div className="space-y-10 sticky top-28">
                        {!loading && shopData.categories.map(cat => (
                            <div key={cat.id} className="space-y-3">
                                <div className="flex items-center gap-3 px-4 mb-4">
                                    {getIcon(cat.icon)}
                                    <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em]">{cat.title}</h3>
                                </div>
                                <div className="space-y-1">
                                    {cat.items.map((item: string) => (
                                        <Link 
                                            key={item} 
                                            href="#"
                                            className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-white/5 group transition-all"
                                        >
                                            <span className="text-[13px] font-bold text-white/50 group-hover:text-white transition-colors">{item}</span>
                                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ffcd00]" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="px-4 py-6 bg-gradient-to-br from-[#ffcd00]/10 to-transparent rounded-2xl border border-[#ffcd00]/10 mt-10">
                            <h4 className="text-[11px] font-black text-[#ffcd00] uppercase tracking-widest mb-2">Partner Program</h4>
                            <p className="text-[12px] text-white/40 font-bold mb-4">Become part of the elite and earn from the Spiral.</p>
                            <button className="w-full py-2.5 bg-white/5 hover:bg-[#ffcd00] hover:text-black rounded-lg text-[11px] font-black uppercase transition-all text-white border border-white/10">Apply Now</button>
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <main className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-white/30 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white/60">WizardNexus</Link>
                        <ChevronDown size={14} className="-rotate-90" />
                        <span className="text-white/60">Marketplace</span>
                    </div>

                    {/* Banner */}
                    <div className="relative rounded-[32px] overflow-hidden bg-[#1a1a1a] border border-white/5 mb-12 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                        <img 
                            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070" 
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s]"
                        />
                        <div className="relative z-20 p-16 lg:p-24 max-w-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-[#ffcd00] text-black text-[10px] font-black uppercase rounded-full shadow-2xl">Live Now</span>
                                <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] tracking-widest">Official Ravenwood Partner</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
                                The Ultimate <br /> <span className="text-[#ffcd00]">Wizardry Hub.</span>
                            </h1>
                            <p className="text-white/60 font-bold text-base leading-relaxed mb-10 max-w-md">
                                From 1-170 Speedruns to rare Kroger Codes. The most trusted destination in the Spiral.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-10 py-5 bg-[#ffcd00] text-black text-[14px] font-black uppercase rounded-2xl hover:bg-white transition-all shadow-2xl shadow-[#ffcd00]/20">Shop Now</button>
                                <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white text-[14px] font-black uppercase rounded-2xl hover:bg-white/20 transition-all border border-white/10">Council Access</button>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                        <div className="flex items-center gap-3">
                            <LayoutGrid size={20} className="text-[#ffcd00]" />
                            <h2 className="text-2xl font-black uppercase italic tracking-tighter">Featured Offers</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-[12px] font-black text-white/40 hover:text-white transition-all border border-white/5 uppercase">
                                <Filter size={16} />
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-20">
                            {[1,2,3].map(i => <div key={i} className="aspect-[4/5] bg-white/5 rounded-[32px] animate-pulse" />)}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {shopData.products.map((deal) => (
                                <motion.div 
                                    key={deal.id}
                                    whileHover={{ y: -8 }}
                                    className="bg-[#1a1a1a] rounded-[32px] overflow-hidden border border-white/10 group relative flex flex-col h-full"
                                >
                                    {deal.badge && (
                                        <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 bg-[#ffcd00] text-black text-[10px] font-black uppercase rounded-full shadow-2xl">
                                            {deal.badge}
                                        </div>
                                    )}
                                    <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                                        <img src={deal.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="mb-4">
                                            <span className="text-[10px] font-black text-[#ffcd00] uppercase tracking-widest">{deal.cat}</span>
                                            <h3 className="text-lg font-black italic uppercase tracking-tight group-hover:text-[#ffcd00] transition-colors mt-1">{deal.title}</h3>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 mb-6 mt-auto">
                                            <div className="flex text-[#ffcd00]">
                                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(deal.rating) ? "currentColor" : "none"} />)}
                                            </div>
                                            <span className="text-[11px] font-black text-white/40">{deal.rating} ({deal.reviews})</span>
                                        </div>

                                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">Price</span>
                                                <span className="text-2xl font-black text-white">{deal.price}</span>
                                            </div>
                                            <button className="px-6 py-3 bg-white/5 group-hover:bg-[#ffcd00] group-hover:text-black rounded-xl text-[12px] font-black uppercase transition-all border border-white/10 shadow-xl">
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </main>
            </div>

            {/* Testimonials */}
            <section className="bg-white/[0.02] border-y border-white/5 py-32 px-4 mt-20">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h2 className="text-[11px] font-black text-[#ffcd00] uppercase tracking-[0.6em] mb-4">Verified</h2>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-16 underline decoration-[#ffcd00]/50 decoration-4 underline-offset-8">Council Testimonials</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "John D.", text: "Best source for Crown Codes. Instant delivery via Discord. Support is amazing!" },
                            { name: "Sarah M.", text: "Bought Pet Mastery. My pet was perfectly trained in 2 days. 10/10." },
                            { name: "Markus L.", text: "Received Kroger Jewel's Card instantly. Finally got the monthly pet!" }
                        ].map((rev, i) => (
                            <div key={i} className="p-10 bg-black/40 rounded-[40px] border border-white/5 text-left space-y-6 hover:border-[#ffcd00]/30 transition-all group">
                                <div className="flex text-[#ffcd00] gap-1 group-hover:scale-110 transition-transform origin-left">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <p className="text-sm text-white/50 font-bold italic leading-relaxed">"{rev.text}"</p>
                                <div className="pt-6 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-white/10 to-transparent rounded-full border border-white/10" />
                                    <span className="text-[14px] font-black italic uppercase tracking-tight">{rev.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0a0a0a] pt-32 pb-16 px-4">
                <div className="max-w-[1400px] mx-auto text-center md:text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20 mb-24">
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-10 justify-center md:justify-start">
                                <div className="w-10 h-10 bg-[#ffcd00] rounded-xl flex items-center justify-center">
                                    <Wand2 size={24} className="text-black" />
                                </div>
                                <span className="text-2xl font-black italic uppercase tracking-tight">WIZARD<span className="text-[#ffcd00]">NEXUS</span></span>
                            </Link>
                            <p className="text-white/30 text-[14px] font-bold leading-relaxed max-w-sm mb-10 mx-auto md:mx-0">
                                The #1 destination for professional Wizard101 services and digital goods. Safe, discrete, and run by veterans.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#ffcd00] hover:text-black transition-all group">
                                    <MessageSquare size={20} />
                                </div>
                                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all">
                                    <Globe size={20} />
                                </div>
                            </div>
                        </div>
                        
                        {['Services', 'Support', 'Legal'].map(cat => (
                            <div key={cat} className="space-y-8">
                                <h5 className="text-[13px] font-black text-white/30 uppercase tracking-[0.2em]">{cat}</h5>
                                <ul className="space-y-5">
                                    {['Home', 'Marketplace', 'Affiliate', 'Contact'].map(l => (
                                        <li key={l}><Link href="#" className="text-[14px] font-black italic text-white/40 hover:text-[#ffcd00] transition-colors uppercase tracking-tight">{l}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] font-black uppercase tracking-widest text-white/20">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <span>© 2026 WizardNexus Operations.</span>
                            <span className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
                            <span>Not affiliated with KingsIsle.</span>
                        </div>
                        <div className="flex gap-12">
                            <span className="hover:text-white transition-colors cursor-pointer">AGB</span>
                            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
