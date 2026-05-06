import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      handleLogin(email, password);
      setEmail("");
      setPassword("");
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-10 shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 shadow-lg">
              <span className="text-white font-bold text-lg">📊</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              EMS Dashboard
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              Sign in to manage your tasks and team
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@me.com"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

             </div>

        {/* Footer hint */}
        <p className="text-center text-slate-500 text-xs mt-6">
          © 2025 Employee Management System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
