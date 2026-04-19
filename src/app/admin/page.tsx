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
    Wand2
} from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<{ categories: any[], products: any[] }>({ categories: [], products: [] });
    const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products');

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
            alert("Shop data synced with Redis!");
        } else {
            alert("Error: " + result.error);
        }
        setLoading(false);
    };

    const addProduct = () => {
        const newProduct = {
            id: Date.now().toString(),
            title: "New Product",
            cat: data.categories[0]?.title || "Boosting Services",
            price: "19.99€",
            rating: 5.0,
            reviews: 0,
            badge: "",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
        };
        setData({ ...data, products: [newProduct, ...data.products] });
    };

    const addCategory = () => {
        const newCat = {
            id: Date.now().toString(),
            title: "New Category",
            icon: "Zap",
            items: ["Example Service"]
        };
        setData({ ...data, categories: [...data.categories, newCat] });
    };

    const updateProduct = (id: string, field: string, value: any) => {
        setData({
            ...data,
            products: data.products.map(p => p.id === id ? { ...p, [field]: value } : p)
        });
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 text-white font-sans">
                <div className="w-full max-w-md space-y-8 bg-[#1a1a1a] p-10 rounded-[40px] border border-white/10 shadow-2xl">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-[#ffcd00] rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Wand2 className="text-black" />
                        </div>
                        <h1 className="text-3xl font-black uppercase italic italic text-white">Admin <span className="text-[#ffcd00]">Nexus</span></h1>
                        <p className="text-white/40 mt-2 font-medium">Please enter your magic key</p>
                    </div>

                    <div className="space-y-4">
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:border-[#ffcd00] transition-all text-center tracking-widest"
                        />
                        <button 
                            onClick={handleLogin}
                            className="w-full h-14 bg-[#ffcd00] text-black font-black uppercase rounded-2xl hover:bg-white transition-all shadow-xl shadow-[#ffcd00]/10 flex items-center justify-center gap-2"
                        >
                            <Unlock size={20} />
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#121212] text-white font-sans flex overflow-hidden">
            <aside className="w-80 bg-[#1a1a1a] border-r border-white/5 flex flex-col p-8 lg:p-10">
                <Link href="/" className="flex items-center gap-3 mb-16">
                    <div className="w-8 h-8 bg-[#ffcd00] rounded-xl flex items-center justify-center">
                        <Wand2 size={20} className="text-black" />
                    </div>
                    <span className="text-xl font-black italic uppercase tracking-tight">Admin<span className="text-[#ffcd00]">Nexus</span></span>
                </Link>

                <nav className="flex-1 space-y-4">
                    <button 
                        onClick={() => setActiveTab('products')}
                        className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase text-[12px] transition-all border ${activeTab === 'products' ? 'bg-[#ffcd00] text-black border-[#ffcd00]' : 'bg-transparent text-white/40 border-transparent hover:bg-white/5 hover:text-white'}`}
                    >
                        <Package size={18} />
                        Products
                    </button>
                    <button 
                         onClick={() => setActiveTab('categories')}
                        className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase text-[12px] transition-all border ${activeTab === 'categories' ? 'bg-[#ffcd00] text-black border-[#ffcd00]' : 'bg-transparent text-white/40 border-transparent hover:bg-white/5 hover:text-white'}`}
                    >
                        <Layers size={18} />
                        Categories
                    </button>
                </nav>

                <div className="pt-10 border-t border-white/5 space-y-4">
                    <button 
                        onClick={handleSave}
                        disabled={loading}
                        className="w-full h-14 bg-[#ffcd00] text-black font-black uppercase rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                        <Save size={20} />
                        {loading ? "Syncing..." : "Sync Redis"}
                    </button>
                    <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="w-full h-14 bg-white/5 text-white/40 font-black uppercase rounded-2xl hover:bg-rose-500/10 hover:text-rose-400 transition-all flex items-center justify-center gap-2"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto p-10 lg:p-20">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-black uppercase italic tracking-tighter">Shop <span className="text-[#ffcd00]">Management</span></h2>
                        <p className="text-white/40 mt-2 font-bold uppercase text-[11px] tracking-widest tracking-widest">Manage your marketplace in real-time via Redis</p>
                    </div>
                    <button 
                        onClick={activeTab === 'products' ? addProduct : addCategory}
                        className="h-14 px-8 bg-white/5 border border-white/10 rounded-2xl text-[13px] font-black uppercase hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <Plus size={20} className="text-[#ffcd00]" />
                        Add {activeTab === 'products' ? 'Product' : 'Category'}
                    </button>
                </div>

                {activeTab === 'products' ? (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        {data.products.map((p) => (
                            <div key={p.id} className="bg-[#1a1a1a] rounded-[32px] border border-white/5 p-8 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Title</label>
                                        <input 
                                            value={p.title}
                                            onChange={(e) => updateProduct(p.id, 'title', e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#ffcd00]/50 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Price</label>
                                        <input 
                                            value={p.price}
                                            onChange={(e) => updateProduct(p.id, 'price', e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#ffcd00]/50 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Badge</label>
                                        <input 
                                            value={p.badge}
                                            onChange={(e) => updateProduct(p.id, 'badge', e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#ffcd00]/50 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Category</label>
                                        <select 
                                            value={p.cat}
                                            onChange={(e) => updateProduct(p.id, 'cat', e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#ffcd00]/50 outline-none appearance-none"
                                        >
                                            {data.categories.map(c => <option key={c.id} value={c.title} className="bg-[#1a1a1a]">{c.title}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Image URL</label>
                                    <input 
                                        value={p.img}
                                        onChange={(e) => updateProduct(p.id, 'img', e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#ffcd00]/50 outline-none"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button 
                                        onClick={() => setData({ ...data, products: data.products.filter(item => item.id !== p.id) })}
                                        className="p-3 bg-white/5 text-rose-500 rounded-xl hover:bg-rose-500/10 transition-all border border-transparent hover:border-rose-500/20"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6">
                        {data.categories.map((c) => (
                            <div key={c.id} className="bg-[#1a1a1a] rounded-[32px] border border-white/5 p-8 space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="flex-1 space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Category Name</label>
                                        <input 
                                            value={c.title}
                                            onChange={(e) => {
                                                const updated = data.categories.map(cat => cat.id === c.id ? { ...cat, title: e.target.value } : cat);
                                                setData({ ...data, categories: updated });
                                            }}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-lg font-black italic uppercase italic focus:border-[#ffcd00]/50 outline-none"
                                        />
                                    </div>
                                    <button 
                                         onClick={() => setData({ ...data, categories: data.categories.filter(item => item.id !== c.id) })}
                                        className="h-14 w-14 bg-white/5 text-rose-500 rounded-2xl hover:bg-rose-500/10 transition-all border border-transparent hover:border-rose-500/20 flex items-center justify-center mt-6"
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Sub-Items (comma separated)</label>
                                    <textarea 
                                        value={c.items.join(", ")}
                                        onChange={(e) => {
                                            const items = e.target.value.split(",").map(i => i.trim());
                                            const updated = data.categories.map(cat => cat.id === c.id ? { ...cat, items } : cat);
                                            setData({ ...data, categories: updated });
                                        }}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:border-[#ffcd00]/50 outline-none h-32"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
