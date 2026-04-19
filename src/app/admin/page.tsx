"use client";

import { useState, useEffect } from "react";
import { 
    Save, 
    Plus, 
    Trash2, 
    LayoutDashboard, 
    Package, 
    Layers, 
    Unlock, 
    LogOut,
    Eye,
    Wand2,
    Settings2,
    Sliders,
    PlusCircle,
    CheckCircle2,
    XCircle,
    ChevronRight,
    Search,
    Monitor
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<{ categories: any[], products: any[] }>({ categories: [], products: [] });
    const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'settings'>('products');
    const [editingProduct, setEditingProduct] = useState<any>(null);

    useEffect(() => {
        if (isLoggedIn) {
            fetchData();
        }
    }, [isLoggedIn]);

    const fetchData = async () => {
        setLoading(true);
        const res = await fetch("/api/admin/shop");
        const json = await res.json();
        if (json.categories && json.products) {
            setData(json);
        }
        setLoading(false);
    };

    const handleLogin = () => {
        if (password) {
            setIsLoggedIn(true);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        const res = await fetch("/api/admin/shop", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password, data }),
        });
        const result = await res.json();
        if (result.success) {
            alert("Success: Shop data synced with Redis!");
        } else {
            alert("Error: " + result.error);
        }
        setLoading(false);
    };

    const addProduct = () => {
        const newProduct = {
            id: Date.now().toString(),
            title: "New Service",
            cat: data.categories[0]?.title || "Boosting Services",
            price: "19.99",
            rating: 5.0,
            reviews: 0,
            badge: "New",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
            type: "fixed", // 'fixed' or 'scalable'
            config: {
                min: 1,
                max: 170,
                pricePerUnit: 0.5,
                options: [
                    { name: "Priority Speed", price: 10, type: "checkbox" },
                    { name: "Live Stream", price: 5, type: "checkbox" }
                ]
            }
        };
        setData({ ...data, products: [newProduct, ...data.products] });
        setEditingProduct(newProduct);
    };

    const updateProduct = (id: string, field: string, value: any) => {
        const updated = data.products.map(p => p.id === id ? { ...p, [field]: value } : p);
        setData({ ...data, products: updated });
        if (editingProduct?.id === id) {
            setEditingProduct({ ...editingProduct, [field]: value });
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 text-white font-sans">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md space-y-10 bg-[#121212] p-12 rounded-[50px] border border-white/5 shadow-[0_0_100px_rgba(255,205,0,0.05)] text-center"
                >
                    <div className="w-16 h-16 bg-[#ffcd00] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#ffcd00]/20 rotate-3">
                        <Wand2 className="text-black" size={32} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black uppercase italic tracking-tighter">Admin <span className="text-[#ffcd00]">Nexus</span></h1>
                        <p className="text-white/20 mt-3 font-bold uppercase text-[10px] tracking-[0.3em]">Authorized Access Only</p>
                    </div>

                    <div className="space-y-6">
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="SECRET KEY"
                            className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 focus:outline-none focus:border-[#ffcd00] transition-all text-center tracking-[0.5em] font-black text-[#ffcd00] placeholder:text-white/10"
                        />
                        <button 
                            onClick={handleLogin}
                            className="w-full h-16 bg-[#ffcd00] text-black font-black uppercase rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#ffcd00]/20 flex items-center justify-center gap-4"
                        >
                            <Unlock size={22} strokeWidth={3} />
                            Launch Console
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#080808] text-white font-sans flex overflow-hidden selection:bg-[#ffcd00]/30">
            {/* Elegant Vertical Sidebar */}
            <aside className="w-80 bg-[#0c0c0c] border-r border-white/5 flex flex-col p-8 relative z-20">
                <div className="flex items-center gap-3 mb-20 px-2">
                    <div className="w-10 h-10 bg-[#ffcd00] rounded-xl flex items-center justify-center shadow-lg shadow-[#ffcd00]/10">
                        <Wand2 size={24} className="text-black" />
                    </div>
                    <span className="text-2xl font-black italic uppercase tracking-tighter">Nexus<span className="text-[#ffcd00]">OS</span></span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { id: 'products', label: 'Marketplace', icon: <Package size={18} /> },
                        { id: 'categories', label: 'Taxonomy', icon: <Layers size={18} /> },
                        { id: 'settings', label: 'Engine', icon: <Settings2 size={18} /> },
                    ].map(item => (
                        <button 
                            key={item.id}
                            onClick={() => { setActiveTab(item.id as any); setEditingProduct(null); }}
                            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all ${activeTab === item.id ? 'bg-[#ffcd00] text-black shadow-lg shadow-[#ffcd00]/10' : 'text-white/20 hover:text-white hover:bg-white/5'}`}
                        >
                            <div className="flex items-center gap-4">
                                {item.icon}
                                {item.label}
                            </div>
                            {activeTab === item.id && <ChevronRight size={14} />}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto space-y-4">
                    <button 
                        onClick={handleSave}
                        disabled={loading}
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:border-[#ffcd00]/50 hover:bg-[#ffcd00]/5 hover:text-[#ffcd00] transition-all flex items-center justify-center gap-3"
                    >
                        <Save size={18} />
                        {loading ? "Syncing..." : "Commit Data"}
                    </button>
                    <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="w-full h-14 text-white/10 hover:text-rose-500 font-black uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                        <LogOut size={16} />
                        Terminate
                    </button>
                </div>
            </aside>

            {/* Content Stage */}
            <main className="flex-1 relative overflow-hidden flex flex-col">
                <header className="h-24 border-b border-white/5 flex items-center justify-between px-12 bg-black/20 backdrop-blur-3xl shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Live Node: cloud.redislabs.com</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                            <input placeholder="SEARCH CONSOLE..." className="bg-white/5 border border-white/10 rounded-full h-10 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-[#ffcd00]/50 w-64" />
                        </div>
                        <button onClick={addProduct} className="h-10 px-6 bg-[#ffcd00] text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Add Entry</button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-12">
                    <AnimatePresence mode="wait">
                        {activeTab === 'products' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-12 gap-10"
                            >
                                {/* List Column */}
                                <div className={`${editingProduct ? 'col-span-5' : 'col-span-12'} space-y-4 transition-all duration-500`}>
                                    {data.products.map(p => (
                                        <div 
                                            key={p.id}
                                            onClick={() => setEditingProduct(p)}
                                            className={`p-6 rounded-[32px] border transition-all cursor-pointer flex items-center justify-between group ${editingProduct?.id === p.id ? 'bg-[#ffcd00]/5 border-[#ffcd00]/30 shadow-lg' : 'bg-[#121212] border-white/5 hover:border-white/20'}`}
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                                                    <img src={p.img} className="w-full h-full object-cover opacity-50" />
                                                </div>
                                                <div>
                                                    <span className="text-[9px] font-black text-[#ffcd00] uppercase tracking-widest">{p.cat}</span>
                                                    <h3 className="text-lg font-black italic uppercase tracking-tight">{p.title}</h3>
                                                    <span className="text-white/30 text-[12px] font-bold">{p.price}€ starting</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {p.type === 'scalable' && <Sliders size={16} className="text-sky-400" />}
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); setData({ ...data, products: data.products.filter(i => i.id !== p.id) }); setEditingProduct(null); }}
                                                    className="p-3 opacity-0 group-hover:opacity-100 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Editor Column */}
                                {editingProduct && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="col-span-7 bg-[#121212] rounded-[40px] border border-white/10 p-10 space-y-10 shadow-2xl overflow-y-auto max-h-[75vh]"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="text-2xl font-black uppercase italic tracking-tighter">Forge <span className="text-[#ffcd00]">Details</span></h2>
                                            <div className="flex gap-2">
                                                <button onClick={() => updateProduct(editingProduct.id, 'type', 'fixed')} className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${editingProduct.type === 'fixed' ? 'bg-white text-black border-white' : 'border-white/10 text-white/30'}`}>Fixed</button>
                                                <button onClick={() => updateProduct(editingProduct.id, 'type', 'scalable')} className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${editingProduct.type === 'scalable' ? 'bg-sky-500 text-white border-sky-500' : 'border-white/10 text-white/30'}`}>Configurable</button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Service Title</label>
                                                <input value={editingProduct.title} onChange={(e) => updateProduct(editingProduct.id, 'title', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl h-14 px-6 text-sm font-bold focus:border-[#ffcd00]/50 outline-none" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Base Price (€)</label>
                                                <input value={editingProduct.price} onChange={(e) => updateProduct(editingProduct.id, 'price', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl h-14 px-6 text-sm font-bold focus:border-[#ffcd00]/50 outline-none" />
                                            </div>
                                        </div>

                                        {editingProduct.type === 'scalable' && (
                                            <div className="space-y-8 p-10 bg-white/5 rounded-[40px] border border-white/5 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-6 opacity-10"><Sliders size={64} /></div>
                                                <h4 className="text-[11px] font-black text-sky-400 uppercase tracking-widest">Configurator Logic</h4>
                                                
                                                <div className="grid grid-cols-3 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-[9px] font-black text-white/20 uppercase">Min Level</label>
                                                        <input value={editingProduct.config.min} type="number" onChange={(e) => updateProduct(editingProduct.id, 'config', { ...editingProduct.config, min: Number(e.target.value) })} className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm focus:border-sky-500 outline-none" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[9px] font-black text-white/20 uppercase">Max Level</label>
                                                        <input value={editingProduct.config.max} type="number" onChange={(e) => updateProduct(editingProduct.id, 'config', { ...editingProduct.config, max: Number(e.target.value) })} className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm focus:border-sky-500 outline-none" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[9px] font-black text-white/20 uppercase">Price / Lvl</label>
                                                        <input value={editingProduct.config.pricePerUnit} type="number" onChange={(e) => updateProduct(editingProduct.id, 'config', { ...editingProduct.config, pricePerUnit: Number(e.target.value) })} className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm focus:border-sky-500 outline-none" />
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <label className="text-[10px] font-black text-white/20 uppercase tracking-widest">Active Add-ons</label>
                                                        <button onClick={() => updateProduct(editingProduct.id, 'config', { ...editingProduct.config, options: [...editingProduct.config.options, { name: "New Add-on", price: 0, type: "checkbox" }] })} className="text-[10px] font-black text-sky-400 uppercase hover:underline flex items-center gap-1"><PlusCircle size={14} /> Add Option</button>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {editingProduct.config.options.map((opt: any, idx: number) => (
                                                            <div key={idx} className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/5">
                                                                <input value={opt.name} onChange={(e) => {
                                                                    const opts = [...editingProduct.config.options];
                                                                    opts[idx].name = e.target.value;
                                                                    updateProduct(editingProduct.id, 'config', { ...editingProduct.config, options: opts });
                                                                }} className="bg-transparent border-b border-white/10 text-sm focus:border-[#ffcd00] outline-none flex-1" />
                                                                <input value={opt.price} type="number" onChange={(e) => {
                                                                    const opts = [...editingProduct.config.options];
                                                                    opts[idx].price = Number(e.target.value);
                                                                    updateProduct(editingProduct.id, 'config', { ...editingProduct.config, options: opts });
                                                                }} className="bg-transparent border-b border-white/10 text-sm focus:border-[#ffcd00] outline-none w-16 text-right" />
                                                                <span className="text-white/20 text-xs text-xs">€</span>
                                                                <button onClick={() => updateProduct(editingProduct.id, 'config', { ...editingProduct.config, options: editingProduct.config.options.filter((_:any, i:any) => i !== idx) })} className="text-rose-500 hover:scale-110 transition-transform"><XCircle size={16} /></button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Thumbnail URL</label>
                                            <input value={editingProduct.img} onChange={(e) => updateProduct(editingProduct.id, 'img', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl h-14 px-6 text-sm font-bold focus:border-[#ffcd00]/50 outline-none" />
                                        </div>

                                        <div className="flex gap-4">
                                            <button onClick={() => setEditingProduct(null)} className="flex-1 h-16 bg-white/5 text-white/40 rounded-3xl font-black uppercase tracking-widest hover:text-white transition-all">Close Editor</button>
                                            <button onClick={handleSave} className="flex-1 h-16 bg-[#ffcd00] text-black rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-[#ffcd00]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"><CheckCircle2 size={20} /> Update Node</button>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {activeTab === 'categories' && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-6"
                            >
                                {data.categories.map((c) => (
                                    <div key={c.id} className="bg-[#121212] rounded-[40px] border border-white/5 p-10 space-y-8 group hover:border-white/20 transition-all">
                                        <div className="flex items-center gap-8">
                                            <div className="flex-1 space-y-2">
                                                <label className="text-[10px] font-black text-white/20 uppercase tracking-widest">Realm Label</label>
                                                <input 
                                                    value={c.title}
                                                    onChange={(e) => setData({ ...data, categories: data.categories.map(cat => cat.id === c.id ? { ...cat, title: e.target.value } : cat) })}
                                                    className="w-full bg-transparent border-none text-4xl font-black italic uppercase italic focus:text-[#ffcd00] outline-none transition-all p-0"
                                                />
                                            </div>
                                            <button 
                                                onClick={() => setData({ ...data, categories: data.categories.filter(item => item.id !== c.id) })}
                                                className="h-16 w-16 bg-white/5 text-rose-500 rounded-3xl hover:bg-rose-500/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 size={24} />
                                            </button>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-white/20 uppercase tracking-widest">Domain Sub-nodes (Comma Separated)</label>
                                            <textarea 
                                                value={c.items.join(", ")}
                                                onChange={(e) => {
                                                    const items = e.target.value.split(",").map(i => i.trim());
                                                    setData({ ...data, categories: data.categories.map(cat => cat.id === c.id ? { ...cat, items } : cat) });
                                                }}
                                                className="w-full bg-black/40 border border-white/10 rounded-[30px] p-8 text-sm focus:border-[#ffcd00]/50 outline-none h-44 font-medium leading-relaxed"
                                            />
                                        </div>
                                    </div>
                                ))}
                                <button 
                                    onClick={() => setData({ ...data, categories: [...data.categories, { id: Date.now().toString(), title: "New Realm", icon: "Zap", items: [] }] })}
                                    className="w-full py-8 border-2 border-dashed border-white/5 rounded-[40px] text-white/10 hover:border-[#ffcd00]/30 hover:text-[#ffcd00] transition-all font-black uppercase tracking-widest flex items-center justify-center gap-3"
                                >
                                    <PlusCircle size={24} /> Add New Realm
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
