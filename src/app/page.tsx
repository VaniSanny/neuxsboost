"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
    Wand2, 
    Swords, 
    Zap, 
    ShieldCheck, 
    Crown, 
    Star, 
    ChevronRight, 
    ArrowRight, 
    Play, 
    Terminal, 
    Flame,
    Gem,
    Users,
    Clock,
    CheckCircle2,
    Lock,
    ExternalLink,
    MousePointer2
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const GAMES = [
    { id: "wow", name: "World of Warcraft", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop", count: "120+ Services" },
    { id: "d2", name: "Destiny 2", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2130&auto=format&fit=crop", count: "85+ Services" },
    { id: "ffxiv", name: "FFXIV", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop", count: "50+ Services" },
    { id: "lostark", name: "Lost Ark", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop", count: "40+ Services" },
];

const SERVICES = [
    { 
        title: "Power Leveling", 
        desc: "Reach maximum level in record time with our professional wizards.", 
        price: "Ab 24.99€",
        icon: <Zap className="text-yellow-400" />,
        color: "from-yellow-500/20 to-orange-500/20",
        features: ["100% Sicher", "VPN Protection", "Speed Boost"]
    },
    { 
        title: "PVP Dominance", 
        desc: "Crush the ranks and obtain elite gear with our Arena & Battleground experts.", 
        price: "Ab 49.99€",
        icon: <Swords className="text-red-400" />,
        color: "from-red-500/20 to-purple-500/20",
        features: ["Rank Guarantee", "Custom Coaching", "Unique Rewards"]
    },
    { 
        title: "Pet & Mount Farm", 
        desc: "Automated and manual farming for the rarest companions in the game.", 
        price: "Ab 19.99€",
        icon: <Gem className="text-blue-400" />,
        color: "from-blue-500/20 to-indigo-500/20",
        features: ["Rare Drops", "Efficiency Focus", "Daily Updates"]
    },
    { 
        title: "Endgame Raids", 
        desc: "Get the best loot and achievements from the most difficult bosses.", 
        price: "Ab 89.99€",
        icon: <Crown className="text-purple-400" />,
        color: "from-purple-500/20 to-fuchsia-500/20",
        features: ["Loot Priority", "Heroic & Mythic", "VOD Recording"]
    }
];

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [activeGame, setActiveGame] = useState("wow");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30 overflow-x-hidden">
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-violet-500/20">
                            <Wand2 size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black italic tracking-tighter uppercase leading-none">Wizard<span className="text-violet-500">Nexus</span></span>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] leading-none mt-1">Boosting Elite</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {['Services', 'Games', 'Process', 'Reviews', 'Support'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors px-4 py-2">
                            Login
                        </button>
                        <button className="px-6 py-2.5 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-violet-500 hover:text-white transition-all shadow-xl shadow-white/5 hover:shadow-violet-500/20 group">
                            <span className="flex items-center gap-2">
                                Order Now
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-44 pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <Star size={12} fill="currentColor" />
                            Elite Boosting Experience 2026
                        </div>
                        <h1 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-[0.9] mb-8">
                            Master Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-400 to-blue-500">Digital Destiny</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-10 max-w-2xl">
                            Unlock unmatched power, rare collectibles, and ultimate dominance. 
                            WizardNexus delivers professional gaming services with surgical precision 
                            and mythical speed.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-700 text-white text-[12px] font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-violet-500/40 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative z-10 flex items-center gap-3">
                                    Explore Services
                                    <Zap size={18} fill="currentColor" />
                                </span>
                            </button>
                            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white text-[12px] font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md">
                                How it Works
                            </button>
                        </div>

                        {/* Stats Bar */}
                        <div className="mt-16 flex items-center gap-12 border-t border-white/5 pt-12">
                            {[
                                { label: 'Active Boosters', val: '2,500+' },
                                { label: 'Average Delivery', val: '45 Min' },
                                { label: 'Client Satisfaction', val: '99.9%' },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-2xl font-black italic tracking-tighter text-white">{stat.val}</span>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Element */}
                <motion.div 
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-[-10%] w-[60%] h-[80%] opacity-20 pointer-events-none"
                >
                    <div className="w-full h-full bg-gradient-to-br from-violet-600 to-transparent rounded-[100px] blur-[150px]" />
                </motion.div>
            </section>

            {/* Game Selection */}
            <section id="games" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <h2 className="text-[12px] font-black text-violet-500 uppercase tracking-[0.4em] mb-4">The Omniverse</h2>
                            <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Choose Your <span className="text-white/40">Battleground</span></h3>
                        </div>
                        <div className="flex gap-2">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/40 hover:text-white transition-all cursor-pointer">
                                <ArrowRight className="rotate-180" size={20} />
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-violet-500 transition-all shadow-xl shadow-violet-500/10 cursor-pointer">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {GAMES.map((game) => (
                            <motion.div 
                                key={game.id}
                                whileHover={{ y: -10 }}
                                className="group relative aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer shadow-2xl"
                            >
                                <img src={game.img} alt={game.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                                        {game.count}
                                    </span>
                                    <h4 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-4">
                                        {game.name}
                                    </h4>
                                    <div className="w-12 h-1 bg-violet-600 group-hover:w-full transition-all duration-500 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-[12px] font-black text-violet-500 uppercase tracking-[0.4em] mb-4">Mystical Offerings</h2>
                        <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">Wizard-Class <span className="text-white/40">Solutions</span></h3>
                        <p className="max-w-2xl mx-auto text-white/50 font-medium">
                            Every boost is handled by a vetted professional with years of expertise. 
                            Security is our religion, speed is our magic.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SERVICES.map((service, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-1 bg-white/[0.03] border border-white/5 rounded-[40px] hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                
                                <div className="p-10 relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 bg-white/5 rounded-[24px] flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-4">{service.title}</h4>
                                    <p className="text-[13px] text-white/50 leading-relaxed mb-8">{service.desc}</p>
                                    
                                    <div className="space-y-3 mb-8 flex-1">
                                        {service.features.map((feat, fi) => (
                                            <div key={fi} className="flex items-center gap-2 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                                                <CheckCircle2 size={12} className="text-violet-500" />
                                                {feat}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Start Price</span>
                                            <span className="text-xl font-black italic tracking-tighter">{service.price}</span>
                                        </div>
                                        <button className="p-3 bg-violet-600 rounded-2xl text-white hover:scale-110 transition-all shadow-xl shadow-violet-600/20">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us / Trust */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/20 blur-[150px] -z-10" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="aspect-square bg-white/5 border border-white/10 rounded-[48px] p-8 flex flex-col justify-center gap-4 hover:border-violet-500/50 transition-all">
                                    <ShieldCheck size={40} className="text-violet-400" />
                                    <span className="text-[13px] font-black uppercase tracking-widest leading-tight">Wizard-Level Security</span>
                                </div>
                                <div className="aspect-square bg-violet-600 rounded-[48px] p-8 flex flex-col justify-center gap-4 shadow-2xl shadow-violet-600/40">
                                    <Users size={40} className="text-white" />
                                    <span className="text-[13px] font-black uppercase tracking-widest leading-tight">Elite Dedicated Team</span>
                                </div>
                            </div>
                            <div className="space-y-4 translate-y-12">
                                <div className="aspect-square bg-white/5 border border-white/10 rounded-[48px] p-8 flex flex-col justify-center gap-4 hover:border-violet-500/50 transition-all">
                                    <Lock size={40} className="text-violet-400" />
                                    <span className="text-[13px] font-black uppercase tracking-widest leading-tight">Zero Ban Guarantee</span>
                                </div>
                                <div className="aspect-square bg-white/5 border border-white/10 rounded-[48px] p-8 flex flex-col justify-center gap-4 hover:border-violet-500/50 transition-all">
                                    <Clock size={40} className="text-violet-400" />
                                    <span className="text-[13px] font-black uppercase tracking-widest leading-tight">Mythical Delivery Speed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[12px] font-black text-violet-500 uppercase tracking-[0.4em] mb-4">The Nexus Code</h2>
                        <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 italic">Better than <span className="text-white/40">Pure Luck.</span></h3>
                        <p className="text-white/60 text-lg font-medium leading-relaxed mb-12">
                            Stop relying on RNG or unskilled groups. Our boosters undergo severe magical 
                            training and security audits. We prioritize your account safety as if it were 
                            the core of the Nexus itself.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Vetted Expertise", desc: "Every wizard is tested for high-level technical skill." },
                                { title: "Premium Support", desc: "24/7 magical counsel available via Discord & Live Chat." },
                                { title: "Full Privacy", desc: "Appear offline, VPN toggles, and absolute silence." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 w-5 h-5 bg-violet-600 rounded-full flex-shrink-0 flex items-center justify-center">
                                        <CheckCircle2 size={12} className="text-white" />
                                    </div>
                                    <div>
                                        <h5 className="font-black uppercase tracking-widest text-[12px] leading-none mb-2">{item.title}</h5>
                                        <p className="text-white/40 text-[12px] font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-20 pb-10 px-6 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                                    <Wand2 size={20} className="text-white" />
                                </div>
                                <span className="text-lg font-black italic tracking-tighter uppercase">Wizard<span className="text-violet-500">Nexus</span></span>
                            </div>
                            <p className="text-white/40 text-[12px] font-medium italic">
                                Creating mythical gaming experiences through excellence and security since 2024.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
                            {['Company', 'Support', 'Services', 'Social'].map((cat) => (
                                <div key={cat} className="flex flex-col gap-4">
                                    <h5 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">{cat}</h5>
                                    <ul className="flex flex-col gap-3">
                                        {[1, 2, 3].map((l) => (
                                            <li key={l}><Link href="#" className="text-[12px] font-black uppercase text-white/30 hover:text-sakura transition-all italic tracking-tighter">Link {l}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <span className="text-[10px] font-medium text-white/20 uppercase tracking-widest">© 2026 WizardNexus Elite Boosting. All rights reserved.</span>
                        <div className="flex gap-6">
                            {['Imprint', 'Privacy', 'TOS'].map((item) => (
                                <Link key={item} href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
