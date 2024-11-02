"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // For error handling
  const [loading, setLoading] = useState<boolean>(false); // For loading state

  async function handleLoginEmail(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Reset previous errors
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error); // Set error message
    } else {
      console.log("Login successful:", res);
      // You might want to redirect or handle successful login here
    }
    setLoading(false); // Stop loading
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login to Your Account</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Show error message */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-slate-800 mt-1 w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-slate-800 mt-1 w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              onClick={handleLoginEmail}
              className={`w-full ${loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"} text-white font-semibold py-3 px-6 rounded-lg transition-colors`}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {/* Sign-Up Redirect */}
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
