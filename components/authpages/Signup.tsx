"use client"   
import { signup } from "@/action/signup";
import Link from "next/link";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import { da } from "@faker-js/faker";
export default function SignUp() {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const Route=useRouter();
    const handlesignup=async(e:any)=>{
        e.preventDefault();
        try {
           if(name==='' || email ==='' || password===''){
            toast.error("fill all the fields");
            return;
           }
           const data=await signup(name,email,password);
           if(data===null){
            toast.error("User already exist")
            return;
           }
           console.log(data);
           toast.success("Signup successfull ")
            Route.push('/start')

        } catch (error:any) {
            toast.error(error)
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
                <form className="space-y-6">
                    {/* name */}
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            required
                            onChange={(e)=>setname(e.target.value)}
                            placeholder="Enter your Name"
                            className="mt-1 w-full p-3 border bg-slate-800 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e)=>setemail(e.target.value)}
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
                            value={password}
                            required
                            onChange={(e)=>setpassword(e.target.value)}
                           className="mt-1 w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-800"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            onClick={handlesignup}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Already have an account */}
                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <button onClick={()=>{signIn()}} className="text-blue-500 hover:underline">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
