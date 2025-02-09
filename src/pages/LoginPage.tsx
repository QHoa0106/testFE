import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const LoginPage: React.FC = () => {
  const { signInWithGoogle, loginWithEmail, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginWithEmail(email, password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-purple-900 relative overflow-hidden">
      <div className="absolute w-5 h-5 bg-green-400 rounded-full blur-xl top-10 left-20"></div>
      <div className="absolute w-6 h-6 bg-pink-500 rounded-full blur-xl bottom-20 right-20"></div>
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full blur-xl top-40 right-40"></div>
      <div className="p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg w-96 text-center border border-white/20">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">OMGA</h1>
        <h1 className="text-3xl font-bold text-white mb-4">Connexion</h1>
        <p className="text-white/70 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 mb-4 rounded bg-white/20 text-white placeholder-white/50 outline-none border border-white/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 rounded bg-white/20 text-white placeholder-white/50 outline-none border border-white/30"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
          >
            Connexion
          </button>
        </form>

        <a
          href="#"
          className="text-sm text-blue-300 hover:underline mb-4 inline-block"
        >
          Mot de passe oublié?
        </a>

        <div className="my-4 flex items-center justify-center text-white/50">
          <div className="w-1/4 border-b border-white/20"></div>
          <span className="mx-2">Or</span>
          <div className="w-1/4 border-b border-white/20"></div>
        </div>

        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-white/70 mt-4">
          Not a member?{" "}
          <a href="#" className="text-orange-400 hover:underline">
            Inscription
          </a>
        </p>
      </div>
    </div>
  );
};
