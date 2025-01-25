import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Building2, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Campus Connect</h1>
        </div>
        <div className="space-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Revolutionize Your Campus Placements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your college placement process with our intelligent platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center space-y-6 hover:shadow-xl transition-shadow">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">For Students</h3>
            <p className="text-gray-600">
              Create your profile, apply to jobs, and track your applications
            </p>
          </Card>

          <Card className="p-8 text-center space-y-6 hover:shadow-xl transition-shadow">
            <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">For Recruiters</h3>
            <p className="text-gray-600">
              Post jobs, manage applications, and find top talent
            </p>
          </Card>

          <Card className="p-8 text-center space-y-6 hover:shadow-xl transition-shadow">
            <div className="mx-auto w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">For Colleges</h3>
            <p className="text-gray-600">
              Manage your placement cell and track student progress
            </p>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Why Campus Connect?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Streamlined Process</h3>
              <p className="text-gray-600">Simplified placement coordination</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Multi-college Support</h3>
              <p className="text-gray-600">Manage multiple institutions</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Real-time Updates</h3>
              <p className="text-gray-600">Stay informed with notifications</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Advanced Analytics</h3>
              <p className="text-gray-600">Track placement statistics</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-500">
        © 2024 Campus Connect. All rights reserved.
      </footer>
    </div>
  );
}