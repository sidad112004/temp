import Link from "next/link";

export default function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
                <form className="space-y-6">
                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="mt-1 w-full p-3 border bg-slate-800 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-800"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            
                            className="mt-1 w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-800"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Already have an account */}
                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
