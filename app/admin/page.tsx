"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulation de connexion
        if (email === 'admin@app.com' && password === 'password') {
            sessionStorage.setItem('authUser', JSON.stringify({ name: 'Admin', role: 'admin' }));
            router.push('/admin/dashboard');
        } else {
            setError('Identifiants invalides.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto text-white text-2xl">
                        <Lock />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">Administration</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-700 focus:ring-brand-green"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-700 focus:ring-brand-green"
                            placeholder="Mot de passe"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button type="submit" className="w-full py-3 bg-brand-green text-white rounded-xl font-bold hover:bg-green-700">
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
