import LoginForm from "@/components/auth/login-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | ShortsGenAI",
  description: "Login to your ShortsGenAI account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <LoginForm />
      </div>

      {/* Right side - Gradient background with decorative elements */}
      <div className="hidden lg:flex flex-1 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-full max-w-md aspect-[9/16] rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Create Viral Videos</h3>
              <p className="text-sm mb-4 text-center">Generate engaging short-form content with AI in minutes</p>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <polygon points="5 3 19 12 5 21 5 3" fill="white"></polygon>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full mt-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square rounded-md bg-white/10 backdrop-blur-sm animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-pink-500/20 blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>
    </div>
  )
}
