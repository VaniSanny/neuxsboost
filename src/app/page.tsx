"use client";

import { motion } from "framer-motion";
import { 
    Search, 
    Menu, 
    ShoppingCart, 
    User, 
    Star, 
    Flame, 
    Droplets, 
    Zap, 
    Heart, 
    Skull, 
    Target, 
    Compass,
    ShieldCheck,
    Clock,
    Zap as FastIcon,
    ArrowRight,
    Filter,
    ChevronDown,
    LayoutGrid,
    MessageSquare,
    Globe,
    Wand2
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const SCHOOLS = [
    { id: "fire", name: "Fire", color: "text-red-500", icon: <Flame size={18} /> },
    { id: "ice", name: "Ice", color: "text-blue-400", icon: <Droplets size={18} /> },
    { id: "storm", name: "Storm", color: "text-purple-400", icon: <Zap size={18} /> },
    { id: "life", name: "Life", color: "text-green-400", icon: <Heart size={18} /> },
    { id: "death", name: "Death", color: "text-gray-400", icon: <Skull size={18} /> },
    { id: "myth", name: "Myth", color: "text-yellow-500", icon: <Target size={18} /> },
    { id: "balance", name: "Balance", color: "text-orange-400", icon: <Compass size={18} /> },
];

const CATEGORIES = [
    "Most Popular", "Leveling (1-170)", "Pets & Training", "PVP Ranks", "Dungeons & Raids", "Gear Farming", "Spells & Crafting"
];

const DEALS = [
    { 
        id: "lev", 
        title: "Max Level 170 Speedrun", 
        cat: "Power Leveling", 
        price: "19.99€", 
        rating: 4.9, 
        reviews: 1240, 
        badge: "Hot",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
    },
    { 
        id: "pet", 
        title: "God-Tier 2.0 Mega Pet", 
        cat: "Pet Services", 
        price: "34.99€", 
        rating: 5.0, 
        reviews: 856, 
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
    },
    { 
        id: "aeon", 
        title: "Full Aeon / Wallaru Gear", 
        cat: "Gear Farming", 
        price: "29.99€", 
        rating: 4.8, 
        reviews: 432, 
        badge: "New",
        img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop"
    },
    { 
        id: "pvp", 
        title: "Warlord Rank Boost", 
        cat: "PVP Arena", 
        price: "49.99€", 
        rating: 4.7, 
        reviews: 215, 
        badge: "Reliable",
        img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2130&auto=format&fit=crop"
    },
    { 
        id: "dm", 
        title: "Castle Darkmoor Full Run", 
        cat: "Raids", 
        price: "14.99€", 
        rating: 4.9, 
        reviews: 789, 
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
    },
    { 
        id: "gar", 
        title: "Garden Optimization (CP/EMP)", 
        cat: "Crafting", 
        price: "9.99€", 
        rating: 5.0, 
        reviews: 112, 
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Home() {
    return (
        <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#ffcd00]/30 selection:text-white">
            {/* Overgear Top Bar */}
            <header className="sticky top-0 z-[100] bg-[#1a1a1a] border-b border-white/5 shadow-xl">
                <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <div className="w-8 h-8 bg-[#ffcd00] rounded-lg flex items-center justify-center">
                            <Wand2 size={20} className="text-black" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">WIZARD<span className="text-[#ffcd00]">NEXUS</span></span>
                    </Link>

                    {/* Search */}
                    <div className="flex-1 max-w-2xl relative hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search for Services, Gear or Pets..." 
                            className="w-full h-10 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 text-[13px] focus:outline-none focus:border-[#ffcd00]/50 focus:bg-white/10 transition-all"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-white/60 hover:text-[#ffcd00] transition-colors cursor-pointer">
                            <Globe size={16} />
                            <span>DEU</span>
                        </div>
                        <div className="relative cursor-pointer hover:text-[#ffcd00] transition-colors">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#ffcd00] text-black text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-[13px] font-bold transition-all border border-white/10">
                            <User size={18} />
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Layout */}
            <div className="max-w-[1400px] mx-auto px-4 py-6 flex gap-8">
                {/* Sidebar Navigation */}
                <aside className="w-64 shrink-0 hidden lg:block">
                    <div className="space-y-6 sticky top-24">
                        <div className="space-y-1">
                            <h3 className="px-4 text-[11px] font-bold text-white/30 uppercase tracking-widest mb-2">Schools of Magic</h3>
                            {SCHOOLS.map(s => (
                                <Link 
                                    key={s.id} 
                                    href={`#${s.id}`}
                                    className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-white/5 group transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={s.color}>{s.icon}</span>
                                        <span className="text-[13px] font-medium group-hover:text-white text-white/70">{s.name} Magic</span>
                                    </div>
                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                                </Link>
                            ))}
                        </div>

                        <div className="h-[1px] bg-white/5 mx-4" />

                        <div className="space-y-1">
                            <h3 className="px-4 text-[11px] font-bold text-white/30 uppercase tracking-widest mb-2">Service Types</h3>
                            {CATEGORIES.map(c => (
                                <Link 
                                    key={c} 
                                    href="#"
                                    className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-[13px] font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    {c}
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-[12px] text-white/40 mb-6">
                        <Link href="/" className="hover:text-white/60">WizardNexus</Link>
                        <ChevronDown size={14} className="-rotate-90" />
                        <span className="text-white/80">Wizard101 Services</span>
                    </div>

                    {/* Hero Banner */}
                    <div className="relative aspect-[21/6] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-600/20 to-black border border-white/5 mb-8">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        <div className="relative z-10 h-full p-12 flex flex-col justify-center">
                            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
                                <span className="text-[#ffcd00]">Pro Boosting</span> <br /> 
                                for Your Wizard.
                            </h1>
                            <p className="text-white/60 text-sm max-w-md mb-8">
                                Trusted by over 10,000 Warlords. Safe, manual leveling and perfect pet services delivered by the best in Ravenwood.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-[#ffcd00] text-black text-[13px] font-black uppercase rounded-lg hover:bg-white transition-all">Get Started</button>
                                <button className="px-6 py-3 bg-white/10 text-white text-[13px] font-black uppercase rounded-lg hover:bg-white/20 transition-all border border-white/10">Learn More</button>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#ffcd00]/10 to-transparent" />
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: <ShieldCheck className="text-green-500" />, title: "Secure VPN", desc: "Anti-Ban Protection" },
                            { icon: <Clock className="text-blue-500" />, title: "Live Updates", desc: "Track on Discord" },
                            { icon: <FastIcon className="text-[#ffcd00]" />, title: "Mythical Speed", desc: "Fastest Delivery" },
                            { icon: <Star className="text-amber-400" />, title: "Pro Players", desc: "Elite Veterans Only" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                                <div className="p-3 bg-white/5 rounded-lg">{item.icon}</div>
                                <div>
                                    <h4 className="text-[13px] font-bold">{item.title}</h4>
                                    <p className="text-[11px] text-white/40">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Service Grid Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4">
                            <div className="flex items-center gap-3">
                                <LayoutGrid size={18} className="text-[#ffcd00]" />
                                <h2 className="text-xl font-bold uppercase italic tracking-tighter">Beste Angebote</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 text-[12px] font-bold text-white/40 hover:text-white transition-colors">
                                    <Filter size={16} />
                                    <span>Filtern</span>
                                </button>
                                <button className="flex items-center gap-2 text-[12px] font-bold text-white/40 hover:text-white transition-colors">
                                    <span>Sortieren: Beliebtheit</span>
                                    <ChevronDown size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {DEALS.map((deal) => (
                                <motion.div 
                                    key={deal.id}
                                    whileHover={{ y: -5 }}
                                    className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 group relative"
                                >
                                    {deal.badge && (
                                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#ffcd00] text-black text-[10px] font-black uppercase rounded-full shadow-lg">
                                            {deal.badge}
                                        </div>
                                    )}
                                    <div className="aspect-[16/9] relative overflow-hidden">
                                        <img src={deal.img} alt={deal.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{deal.cat}</span>
                                            <h3 className="text-lg font-bold group-hover:text-[#ffcd00] transition-colors line-clamp-1">{deal.title}</h3>
                                        </div>
                                        
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-[#ffcd00]">
                                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(deal.rating) ? "currentColor" : "none"} />)}
                                            </div>
                                            <span className="text-[11px] font-bold text-white/60">{deal.rating} ({deal.reviews})</span>
                                        </div>

                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-white/30 font-bold uppercase">Ab</span>
                                                <span className="text-2xl font-black text-white">{deal.price}</span>
                                            </div>
                                            <button className="px-5 py-2.5 bg-white/5 hover:bg-[#ffcd00] hover:text-black rounded-lg text-[13px] font-black uppercase transition-all border border-white/10 group-hover:border-[#ffcd00]">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* Trustpilot / Testimonials Section */}
            <section className="bg-white/[0.02] border-y border-white/5 py-24 px-4">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h2 className="text-[11px] font-bold text-[#ffcd00] uppercase tracking-[0.5em] mb-4">Customer Trust</h2>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-12">Was unsere <span className="text-white/30">Kunden sagen</span></h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "John D.", text: "Die BESTEN Spieler überhaupt. Das Elite PvP Set war innerhalb von 5 Stunden fertig." },
                            { name: "Sarah M.", text: "Einfach genial! Mir hat das Gameplay gefallen und die Skills die ich gelernt habe." },
                            { name: "Markus L.", text: "Schneller Start, der Booster war sehr professionell — hat Keybindings eingerichtet." }
                        ].map((rev, i) => (
                            <div key={i} className="p-8 bg-black/40 rounded-3xl border border-white/5 text-left space-y-4">
                                <div className="flex text-green-500 gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-sm text-white/60 font-medium italic leading-relaxed">"{rev.text}"</p>
                                <div className="pt-4 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white/10 rounded-full" />
                                    <span className="text-[13px] font-bold">{rev.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0a0a0a] pt-24 pb-12 px-4">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 bg-[#ffcd00] rounded-lg flex items-center justify-center">
                                    <Wand2 size={20} className="text-black" />
                                </div>
                                <span className="text-xl font-bold">WIZARD<span className="text-[#ffcd00]">NEXUS</span></span>
                            </Link>
                            <p className="text-white/30 text-[13px] leading-relaxed max-w-sm mb-8">
                                Der führende Partner für Wizard101 Boosting. Sicher, professionell und diskret. Werde Teil unserer Community aus tausenden zufriedenen Zauberern.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"><MessageSquare size={18} /></div>
                                <div className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"><Star size={18} /></div>
                            </div>
                        </div>
                        
                        {['Über uns', 'Hilfe', 'Garantien'].map(cat => (
                            <div key={cat} className="space-y-6">
                                <h5 className="text-[12px] font-bold text-white/40 uppercase tracking-widest">{cat}</h5>
                                <ul className="space-y-4">
                                    {[1, 2, 3, 4].map(l => (
                                        <li key={l}><Link href="#" className="text-[13px] font-medium text-white/40 hover:text-white transition-colors">Link Item {l}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] text-white/20 font-medium">
                        <span>© 2026 WizardNexus. Not affiliated with KingsIsle Entertainment.</span>
                        <div className="flex gap-10">
                            <span>AGB</span>
                            <span>Datenschutz</span>
                            <span>Impressum</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
