import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Building2, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Campus Connect</h1>
          <p className="text-xl text-muted-foreground">
            Streamline your college placement process with our comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">For Students</h2>
              <p className="text-muted-foreground">
                Create your profile, apply to jobs, and track your applications
              </p>
              <Link href="/auth/signup?role=student">
                <Button>Join as Student</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">For Recruiters</h2>
              <p className="text-muted-foreground">
                Post jobs, manage applications, and find top talent
              </p>
              <Link href="/auth/signup?role=recruiter">
                <Button>Join as Recruiter</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">For Colleges</h2>
              <p className="text-muted-foreground">
                Manage your placement cell and track student progress
              </p>
              <Link href="/auth/signup?role=admin">
                <Button>Register College</Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-8">Why Choose Campus Connect?</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Streamlined Process</h3>
              <p className="text-muted-foreground">Simplified placement coordination</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Multi-college Support</h3>
              <p className="text-muted-foreground">Manage multiple institutions</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Real-time Updates</h3>
              <p className="text-muted-foreground">Stay informed with notifications</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">Track placement statistics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}