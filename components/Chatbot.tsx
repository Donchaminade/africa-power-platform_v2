
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { X, Bot, Cpu, ChevronDown, Send } from 'lucide-react';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const { t, language } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ 
                role: 'model', 
                text: language === 'fr' 
                    ? "Bonjour ! Je suis l'assistant de l'Africa Power Platform. Comment puis-je vous aider aujourd'hui ?" 
                    : "Hello! I am the Africa Power Platform assistant. How can I help you today?" 
            }]);
        }
    }, [isOpen, language]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        const newHistory = [...messages, { role: 'user' as const, text: userMsg }];
        setMessages(newHistory);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: userMsg, 
                    history: messages.slice(-6),
                    language 
                }),
            });

            if (!response.ok) throw new Error("Erreur réseau");

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let accumulatedText = "";

            setMessages(prev => [...prev, { role: 'model', text: "" }]);

            if (reader) {
                setIsLoading(false);
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    const chunk = decoder.decode(value, { stream: true });
                    accumulatedText += chunk;
                    
                    setMessages(prev => {
                        const updated = [...prev];
                        updated[updated.length - 1].text = accumulatedText;
                        return updated;
                    });
                }
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { 
                role: 'model', 
                text: language === 'fr' 
                    ? "Désolé, j'ai eu un petit problème technique. Pouvez-vous reformuler ?" 
                    : "Sorry, I encountered a technical issue. Could you please rephrase?" 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 left-8 z-[999]">
            {/* Bouton Lanceur Flottant - Fixé à gauche */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full bg-brand-green text-white shadow-[0_15px_50px_rgba(0,168,89,0.5)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            >
                {isOpen ? <X className="text-2xl" /> : <Bot className="text-2xl group-hover:animate-pulse" />}
            </button>

            {/* Fenêtre de Chat - S'ouvre depuis la gauche */}
            <div className={`absolute bottom-20 left-0 w-[85vw] sm:w-[420px] h-[75vh] sm:h-[600px] bg-white dark:bg-gray-950 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-700 origin-bottom-left ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}>
                <header className="bg-gradient-to-r from-brand-green via-emerald-600 to-green-700 p-8 flex items-center justify-between text-white">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 shadow-2xl">
                            <Cpu className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-black text-sm uppercase tracking-[0.3em] leading-none">Concierge IA</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                <span className="text-[10px] opacity-90 uppercase font-black tracking-widest">Connecté • Expert APP</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-all">
                        <ChevronDown />
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-gray-50/50 dark:bg-black/20">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                            <div className={`max-w-[85%] px-6 py-5 rounded-[2.2rem] text-sm font-medium leading-relaxed shadow-sm ${
                                msg.role === 'user' 
                                ? 'bg-brand-green text-white rounded-br-none shadow-brand-green/30' 
                                : 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-bl-none border border-gray-100 dark:border-white/10'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start animate-fade-in">
                            <div className="bg-white dark:bg-gray-900 px-6 py-5 rounded-[2.2rem] rounded-bl-none border border-gray-100 dark:border-white/10 flex gap-2 items-center">
                                <span className="w-2 h-2 bg-brand-green rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-brand-green rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-2 h-2 bg-brand-green rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-6 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-white/10 flex gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Une question sur le sommet ?"
                        className="flex-1 bg-gray-100 dark:bg-white/5 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all"
                    />
                    <button 
                        type="submit" 
                        disabled={isLoading || !input.trim()} 
                        className="w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all shadow-xl shadow-brand-green/20"
                    >
                        <Send />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;
