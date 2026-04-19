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
    MousePointer2,
    Book,
    Flame,
    Wind,
    Droplets,
    Heart,
    Skull,
    Target,
    Compass,
    Gem,
    Users,
    Clock,
    CheckCircle2,
    Lock
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const SCHOOLS = [
    { id: "fire", name: "Fire", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30", icon: <Flame size={18} /> },
    { id: "ice", name: "Ice", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30", icon: <Droplets size={18} /> },
    { id: "storm", name: "Storm", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30", icon: <Zap size={18} /> },
    { id: "life", name: "Life", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30", icon: <Heart size={18} /> },
    { id: "death", name: "Death", color: "text-gray-400", bg: "bg-gray-400/10", border: "border-gray-400/30", icon: <Skull size={18} /> },
    { id: "myth", name: "Myth", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30", icon: <Target size={18} /> },
    { id: "balance", name: "Balance", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30", icon: <Compass size={18} /> },
];

const SERVICES = [
    { 
        title: "Questing & Leveling", 
        desc: "Reach Max Level (170+) in record time. We handle all worlds from Wizard City to Wallaru.", 
        price: "Ab 19.99€",
        icon: <Book className="text-blue-400" />,
        color: "from-blue-500/20 to-indigo-500/20",
        tags: ["Fast Delivery", "All Worlds", "Main Quests"]
    },
    { 
        title: "God-Tier Pets", 
        desc: "Get the perfect 2.0 Mega/Ultra pet with Triple Damage, Double Resist or custom talents.", 
        price: "Ab 34.99€",
        icon: <Target className="text-yellow-400" />,
        color: "from-yellow-500/20 to-orange-500/20",
        tags: ["Talent Guarantee", "Snacks Included", "Quick Hatching"]
    },
    { 
        title: "PVP & Ranks", 
        desc: "Climb to Warlord rank with our elite strategists. We optimize your gear and deck for victory.", 
        price: "Ab 49.99€",
        icon: <Swords className="text-red-400" />,
        color: "from-red-500/20 to-purple-500/20",
        tags: ["Warlord Rank", "Deck Setup", "Gear Coaching"]
    },
    { 
        title: "Elite Gear Farming", 
        desc: "Complete runs of Darkmoor, Aeon, or Novus dungeons. We farm until you are fully geared.", 
        price: "Ab 29.99€",
        icon: <Crown className="text-purple-400" />,
        color: "from-purple-500/20 to-fuchsia-500/20",
        tags: ["Aeon Gear", "Wallaru Loot", "Darkmoor Full"]
    }
];

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSchool, setActiveSchool] = useState("fire");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#08070b] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
            {/* Magical Background (Wizard City Vibes) */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-amber-600/5 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.05]" />
            </div>

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl' : 'py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center border-2 border-amber-400/50 shadow-lg shadow-amber-500/20 relative">
                            <Wand2 size={24} className="text-white relative z-10" />
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black uppercase tracking-tighter leading-none">Wizard<span className="text-amber-500 text-3xl">Nexus</span></span>
                            <span className="text-[9px] font-bold text-amber-400/60 uppercase tracking-[0.4em] leading-none mt-1">Mastering Ravenwood</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-10">
                        {['Services', 'Schools', 'Gear', 'Testimonials'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[2px] text-white/50 hover:text-amber-400 transition-all relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-7 py-3 bg-amber-500 text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl shadow-amber-500/20 border-b-4 border-amber-700 active:border-b-0 active:translate-y-1">
                            Start Questing
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-60 pb-32 px-6">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-lg shadow-amber-500/5">
                            <Gem size={14} className="animate-bounce" />
                            Elite Wizard101 Boosting Platform
                        </div>
                        
                        <h1 className="text-5xl md:text-9xl font-[1000] uppercase tracking-tighter leading-[0.85] mb-10 text-white italic">
                            Unleash the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Maximum Potential</span>
                        </h1>
                        
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-12">
                            Skip the grind, keep the glory. From Level 1 to 170, God-Tier pets, and PvP Warlord Ranks. 
                            Our veteran wizards handle the magic while you take the credit.
                        </p>

                        <div className="flex flex-wrap justify-center gap-5">
                            <button className="px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[13px] font-black uppercase tracking-widest rounded-xl hover:scale-110 active:scale-95 transition-all shadow-3xl shadow-amber-500/40 border-b-4 border-amber-800 flex items-center gap-3">
                                Explore Spellbook
                                <ArrowRight size={20} />
                            </button>
                            <button className="px-12 py-6 bg-white/5 border border-white/10 text-white text-[13px] font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all backdrop-blur-xl group">
                                Watch Preview
                                <Play size={18} fill="white" className="inline ml-3 group-hover:scale-125 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Animated Magical Seals */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-amber-500/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square border border-amber-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none opacity-20" />
            </section>

            {/* School Mastery Section */}
            <section id="schools" className="py-24 px-6 bg-white/[0.02] border-y border-amber-500/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[11px] font-bold text-amber-500 uppercase tracking-[0.5em] mb-4">The Seven Schools</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">We Master <span className="text-white/30">Everything</span></h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {SCHOOLS.map((school) => (
                            <button 
                                key={school.id}
                                onClick={() => setActiveSchool(school.id)}
                                className={`px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500 ${activeSchool === school.id ? `${school.bg} ${school.border} ${school.color} scale-110 border-2` : 'bg-white/5 border border-white/10 text-white/40 hover:text-white'}`}
                            >
                                {school.icon}
                                <span className="text-[11px] font-black uppercase tracking-widest">{school.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* School Showcase Card */}
                    <div className="max-w-4xl mx-auto aspect-[16/7] bg-black/40 border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
                        <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 opacity-20 ${SCHOOLS.find(s => s.id === activeSchool)?.bg}`} />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 h-full text-center md:text-left">
                            <div className={`w-32 h-32 rounded-full flex items-center justify-center border-4 border-amber-500/20 bg-black/50 ${SCHOOLS.find(s => s.id === activeSchool)?.color}`}>
                                {SCHOOLS.find(s => s.id === activeSchool)?.icon}
                            </div>
                            <div className="flex-1">
                                <h4 className={`text-4xl font-black uppercase italic tracking-tighter mb-4 ${SCHOOLS.find(s => s.id === activeSchool)?.color}`}>
                                    {SCHOOLS.find(s => s.id === activeSchool)?.name} Mastery
                                </h4>
                                <p className="text-white/60 font-medium text-lg leading-relaxed">
                                    Our {activeSchool} Wizards are specialized in maximum efficiency. Whether it's high damage for farming or strategic setups for PVP, we guarantee elite performance for your character.
                                </p>
                            </div>
                            <button className="px-8 py-4 bg-amber-500 text-black text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all">
                                Selection
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Spellbook */}
            <section id="services" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-[11px] font-bold text-amber-500 uppercase tracking-[0.5em] mb-4">Boosting Services</h2>
                        <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic mb-8">Choose Your <span className="text-white/30">Magic Path</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SERVICES.map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group relative p-10 bg-white/[0.03] border border-white/10 rounded-[50px] hover:bg-white/[0.06] transition-all duration-500 flex flex-col md:flex-row gap-10 items-start md:items-center"
                            >
                                <div className="w-24 h-24 shrink-0 bg-black/50 rounded-3xl border-2 border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                                    {service.icon}
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(t => (
                                            <span key={t} className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[9px] font-black uppercase tracking-widest">{t}</span>
                                        ))}
                                    </div>
                                    <h4 className="text-3xl font-black uppercase tracking-tighter italic">{service.title}</h4>
                                    <p className="text-white/40 text-[14px] leading-relaxed line-clamp-2">{service.desc}</p>
                                    <div className="flex items-center justify-between pt-4">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase text-white/20 font-black tracking-widest">Price Point</span>
                                            <span className="text-2xl font-black italic tracking-tighter text-amber-400">{service.price}</span>
                                        </div>
                                        <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all">
                                            Order
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Ravenwood Trust */}
            <section className="py-24 px-6 bg-amber-500">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 rounded-full text-black text-[11px] font-black uppercase tracking-widest">
                            <ShieldCheck size={16} />
                            Academic Excellence
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-black italic">Why The Council of <br /> Wizards Choose Us?</h3>
                        <p className="text-black/70 text-lg font-medium leading-relaxed">
                            We don't just "play" your character. We treat every Wizard with the respect they deserve. 
                            Our team consists of Top 100 PvP players and seasoned veterans who have seen everything 
                            from Malistaire to Mallus.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            {[
                                { val: "10k+", label: "Quests Done" },
                                { val: "500+", label: "Pets Perfected" },
                                { val: "100%", label: "Safe & Secure" },
                                { val: "24/7", label: "Magic Counsel" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-4xl font-black tracking-tighter text-black uppercase">{stat.val}</span>
                                    <span className="text-[11px] font-black tracking-widest text-black/40 uppercase">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-black/80 rounded-[60px] p-12 shadow-3xl shadow-amber-900/20 border border-black/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] -z-10" />
                        <div className="space-y-12">
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                                    <Lock size={28} className="text-black" />
                                </div>
                                <div>
                                    <h5 className="text-xl font-black uppercase tracking-widest mb-2 italic">Anti-Ban Protection</h5>
                                    <p className="text-white/40 leading-relaxed">100% manual questing. We use dedicated VPNs to match your location, ensuring KingsIsle sees nothing but normal gameplay.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                                    <Clock size={28} className="text-black" />
                                </div>
                                <div>
                                    <h5 className="text-xl font-black uppercase tracking-widest mb-2 italic">Legendary Speed</h5>
                                    <p className="text-white/40 leading-relaxed">Our Wizards work in shifts. Your questing progress never stops, even when the rest of the world sleeps.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                                    <Users size={28} className="text-black" />
                                </div>
                                <div>
                                    <h5 className="text-xl font-black uppercase tracking-widest mb-2 italic">Direct Communication</h5>
                                    <p className="text-white/40 leading-relaxed">Private Discord access to your assigned Wizard. Get screenshots and progress updates whenever you want.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-24 pb-12 px-6 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                    <Wand2 size={24} className="text-black" />
                                </div>
                                <span className="text-2xl font-black uppercase tracking-tighter italic">WizardNexus</span>
                            </div>
                            <p className="text-white/30 text-[14px] leading-relaxed italic">
                                The ultimate destination for Wizard101 elite services. We handle the magic, you rule the Spiral.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 uppercase">
                            {['Platform', 'Resources', 'Support'].map(cat => (
                                <div key={cat} className="space-y-6">
                                    <h5 className="text-[11px] font-black text-amber-500 tracking-[0.3em]">{cat}</h5>
                                    <ul className="space-y-4">
                                        {[1, 2, 3].map(l => (
                                            <li key={l}><Link href="#" className="text-[11px] font-black tracking-widest text-white/20 hover:text-white transition-all">Link {l}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <span className="text-[11px] font-bold text-white/10 uppercase tracking-[0.3em]">© 2026 WizardNexus. Not affiliated with KingsIsle Entertainment.</span>
                        <div className="flex gap-10">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
                                <Link key={item} href="#" className="text-[11px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-all italic">
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
