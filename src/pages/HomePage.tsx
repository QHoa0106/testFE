import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
    const { user, logout }: any = useAuth();

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-xl font-bold">My App</h1>

                        <div className="flex items-center gap-4">
                            <img
                                src={user?.photoURL}
                                alt={user?.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">{user?.name}</span>
                                <span className="text-xs text-gray-500">{user?.email}</span>
                            </div>
                            <button
                                onClick={logout}
                                className="ml-4 px-3 py-1 text-sm text-gray-700 hover:text-gray-900"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h2 className="text-2xl font-bold mb-4">Welcome to Home Page</h2>
                    {/* Add your home page content here */}
                </div>
            </main>
        </div>
    );
};
