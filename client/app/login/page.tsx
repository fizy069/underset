'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';
import { jwtDecode } from 'jwt-decode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

interface JwtPayload {
  userId: string;
  role: 'student' | 'admin' | 'recruiter';
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);

      const decoded = jwtDecode<JwtPayload>(token);
      
      toast.success('Login successful!');

      switch (decoded.role) {
        case 'student':
          router.push('/student/dashboard');
          break;
        case 'admin':
          router.push('/admin/dashboard');
          break;
        case 'recruiter':
          router.push('/recruiter/dashboard');
          break;
        default:
          router.push('/');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Toaster richColors />
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="hidden md:block relative">
        <Image 
          src="/login.jpg" 
          alt="Campus Connect Login" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center p-8">
            <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
            <p className="text-xl">Connect, Apply, Succeed</p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-black text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging In...</>
                ) : (
                "Login"
              )}
            </Button>
            <div className="text-center mt-4">
              <Link href="/signup" className="text-blue-600 hover:underline">
                Don't have an account? Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}