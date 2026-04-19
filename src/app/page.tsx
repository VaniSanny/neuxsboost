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
    Book,
    Flame,
    Droplets,
    Heart,
    Skull,
    Target,
    Compass,
    Gem,
    Users,
    Clock,
    CheckCircle2,
    Lock,
    ExternalLink,
    Sparkles,
    Shapes
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const SCHOOLS = [
    { id: "fire", name: "Fire", color: "text-rose-500", bg: "bg-rose-500/10", icon: <Flame size={16} /> },
    { id: "ice", name: "Ice", color: "text-sky-400", bg: "bg-sky-400/10", icon: <Droplets size={16} /> },
    { id: "storm", name: "Storm", color: "text-indigo-400", bg: "bg-indigo-400/10", icon: <Zap size={16} /> },
    { id: "life", name: "Life", color: "text-emerald-400", bg: "bg-emerald-400/10", icon: <Heart size={16} /> },
    { id: "death", name: "Death", color: "text-zinc-400", bg: "bg-zinc-400/10", icon: <Skull size={16} /> },
    { id: "myth", name: "Myth", color: "text-amber-300", bg: "bg-amber-300/10", icon: <Target size={16} /> },
    { id: "balance", name: "Balance", color: "text-orange-300", bg: "bg-orange-300/10", icon: <Compass size={16} /> },
];

const BENTO_SERVICES = [
    { 
        id: "leveling",
        title: "Spiral Ascension", 
        category: "Questing",
        desc: "Reach the Zenith of Ravenwood. From Wizard City to the deepest realms of Wallaru, we guide your ascent with legendary speed.", 
        price: "19.99€",
        size: "large",
        icon: <Book className="text-sky-400" />,
        highlight: "1-170 Mastered"
    },
    { 
        id: "pets",
        title: "Pet Evolution", 
        category: "Laboratory",
        desc: "Perfect talents. Perfect stats. Every time.", 
        price: "34.99€",
        size: "medium",
        icon: <Sparkles className="text-amber-200" />,
        highlight: "2.0 Talents"
    },
    { 
        id: "pvp",
        title: "Arena Dominion", 
        category: "Combat",
        desc: "Warlord ranks achieved through pure strategy.", 
        price: "49.99€",
        size: "medium",
        icon: <Swords className="text-rose-400" />,
        highlight: "Top 100 Deck Labs"
    },
    { 
        id: "gear",
        title: "Aeon & Beyond", 
        category: "Loot",
        desc: "We farm the toughest dungeons for your ultimate set.", 
        price: "29.99€",
        size: "small",
        icon: <Gem className="text-zinc-300" />
    },
    { 
        id: "security",
        title: "Council Safety", 
        category: "Security",
        desc: "Anonymous, safe, and professional.", 
        price: "Free",
        size: "small",
        icon: <ShieldCheck className="text-emerald-400" />
    }
];

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSchool, setActiveSchool] = useState("ice");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#020202] text-[#e5e5e5] selection:bg-sky-500/30 font-sans tracking-tight overflow-x-hidden">
            {/* Minimalist Background Refractions */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                <div className="absolute inset-0 bg-noise opacity-[0.02]" />
            </div>

            {/* Navbar - Ultra Clean */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4 bg-black/40 backdrop-blur-3xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-1000">
                            <Shapes size={16} />
                        </div>
                        <span className="text-lg font-bold tracking-[-0.05em] text-white">wizard<span className="text-sky-400">nexus</span></span>
                    </div>

                    <div className="hidden lg:flex items-center gap-10">
                        {['Services', 'Arsenal', 'Council', 'Process'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase()}`} className="text-[12px] font-medium text-white/40 hover:text-white transition-all">
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="hidden sm:block text-[12px] font-medium text-white/40 hover:text-white transition-all">
                            Partner Login
                        </button>
                        <button className="px-6 py-2.5 bg-white text-black text-[12px] font-bold rounded-full hover:bg-sky-400 hover:text-white transition-all shadow-xl shadow-white/5">
                            Order Boost
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero - 2026 Ethereal Style */}
            <section className="relative pt-44 pb-32 px-8 min-h-[90vh] flex flex-col justify-center">
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="h-[1px] w-8 bg-sky-500/50" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400/80">Ravenwood Elite Solutions</span>
                        </div>
                        
                        <h1 className="text-6xl md:text-[9rem] font-bold tracking-[-0.06em] leading-[0.85] mb-12 text-white italic">
                            Redefining <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white/40">Spiral Mastery.</span>
                        </h1>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                            <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed max-w-xl">
                                We bridge the gap between effort and excellence. 
                                Providing the world's most sophisticated boosting experience 
                                exclusively for the Ravenwood community.
                            </p>
                            
                            <div className="flex gap-4">
                                <button className="px-10 py-5 bg-sky-500 text-white text-[13px] font-bold rounded-2xl hover:bg-sky-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-sky-500/20 flex items-center gap-3 border border-sky-400/20">
                                    Start Your Ascent
                                    <ArrowRight size={18} />
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white text-[13px] font-bold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-3xl">
                                    Our Philosophy
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Visual - Light Refraction */}
                <div className="absolute top-1/2 right-[-10%] w-[60%] aspect-square bg-gradient-to-br from-sky-500/10 via-transparent to-transparent blur-[120px] rounded-full animate-pulse transition-all duration-[5s]" />
            </section>

            {/* School Selector - Minimalist Bento Component */}
            <section id="arsenal" className="py-24 px-8 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4 space-y-6">
                            <h2 className="text-[11px] font-bold text-sky-400 uppercase tracking-[0.4em]">The Codex</h2>
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Expertise in <br /> every <span className="text-white/30 italic">Domain.</span></h3>
                            <div className="flex flex-wrap gap-2">
                                {SCHOOLS.map((school) => (
                                    <button 
                                        key={school.id}
                                        onClick={() => setActiveSchool(school.id)}
                                        className={`px-5 py-3 rounded-full flex items-center gap-2.5 transition-all duration-300 border ${activeSchool === school.id ? `bg-white text-black border-white` : 'bg-white/5 border-white/5 text-white/30 hover:text-white hover:border-white/20'}`}
                                    >
                                        <span className={activeSchool === school.id ? 'text-black' : school.color}>{school.icon}</span>
                                        <span className="text-[11px] font-bold uppercase tracking-wider">{school.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="relative aspect-[21/9] bg-white/[0.02] border border-white/5 rounded-[40px] p-12 overflow-hidden group">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSchool}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative z-10 h-full flex flex-col justify-center"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${SCHOOLS.find(s => s.id === activeSchool)?.color}`}>
                                                {SCHOOLS.find(s => s.id === activeSchool)?.icon}
                                            </div>
                                            <h4 className="text-4xl font-bold tracking-tight text-white">{activeSchool} Specialists</h4>
                                        </div>
                                        <p className="text-xl text-white/40 font-medium leading-relaxed max-w-2xl">
                                            Our {activeSchool} practitioners focus on peak efficiency. Whether executing a perfect trap sequence or mastering massive AOE clears, we guarantee absolute quality.
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Services - The 2026 Core Component */}
            <section id="services" className="py-32 px-8 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-[11px] font-bold text-sky-400 uppercase tracking-[0.4em] mb-4">Service Arsenal</h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white italic leading-tight">Elite <span className="text-white/30 tracking-[-0.05em] not-italic">Infrastructure.</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[280px] gap-4">
                        {BENTO_SERVICES.map((service, i) => (
                            <motion.div
                                key={service.id}
                                whileHover={{ scale: 0.99, transition: { duration: 0.4 } }}
                                className={`group relative bg-white/[0.02] border border-white/10 rounded-[32px] p-8 overflow-hidden flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-500
                                ${service.size === 'large' ? 'md:col-span-6 lg:col-span-8' : 
                                  service.size === 'medium' ? 'md:col-span-3 lg:col-span-4' : 
                                  'md:col-span-3 lg:col-span-4'}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{service.category}</span>
                                        <span className="text-xl font-bold text-white/80">{service.price}</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                                    <p className="text-[14px] text-white/40 font-medium leading-relaxed max-w-md line-clamp-2">
                                        {service.desc}
                                    </p>
                                </div>

                                {service.highlight && (
                                    <div className="absolute bottom-8 right-8 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">{service.highlight}</span>
                                    </div>
                                )}
                                
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimal Trust Indicator */}
            <section className="py-24 px-8 border-y border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-bold tracking-tight text-white mb-6">Built on absolute <span className="text-white/30 italic">Security.</span></h3>
                        <p className="text-white/40 font-medium leading-relaxed">
                            We operate in complete shadows. No automated tools, only manual excellence 
                            backed by residential VPN infrastructure to mirror your actual presence in the Spiral.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-12">
                        {[
                            { label: 'Orders Completed', val: '12,400+' },
                            { label: 'Satisfaction Rate', val: '99.9%' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-5xl font-bold tracking-tighter text-white mb-1 uppercase">{stat.val}</span>
                                <span className="text-[11px] font-bold text-white/20 uppercase tracking-[0.2em]">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer - Minimalist & Silent */}
            <footer className="pt-32 pb-12 px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                                    <Shapes size={16} />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">wizardnexus</span>
                            </div>
                            <p className="text-white/20 text-[13px] font-medium leading-relaxed">
                                Curating the most professional boosting experiences in the Spiral. 
                                Independently operated, globally recognized.
                            </p>
                        </div>
                        
                        <div className="flex gap-24">
                            {['Arsenals', 'Council', 'Legal'].map(cat => (
                                <div key={cat} className="space-y-6">
                                    <h5 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">{cat}</h5>
                                    <ul className="space-y-4">
                                        {[1, 2, 3].map(l => (
                                            <li key={l}><Link href="#" className="text-[12px] font-medium text-white/20 hover:text-white transition-all tracking-tight">Option {l}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-semibold text-white/10 uppercase tracking-[0.2em]">
                        <span>© 2026 WizardNexus Operations.</span>
                        <div className="flex gap-10 cursor-pointer">
                            <span className="hover:text-white transition-all">Privacy</span>
                            <span className="hover:text-white transition-all">Terms</span>
                            <span className="hover:text-white transition-all">Cookies</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
