import SignUpForm from "@/components/auth/signup-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | ShortsGenAI",
  description: "Create your ShortsGenAI account",
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Gradient background with decorative elements */}
      <div className="hidden lg:flex flex-1 bg-gradient-creative relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-full max-w-md aspect-[9/16] rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Start Creating Today</h3>
              <p className="text-sm mb-4 text-center">Join thousands of content creators using ShortsGenAI</p>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="M8 18v-1"></path>
                  <path d="M16 18v-3"></path>
                </svg>
              </div>
              <div className="flex -space-x-2 mt-auto">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500" style={{ transform: `rotate(${i * 45}deg)` }}></div>
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-medium">
                  +1K
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <SignUpForm />
      </div>
    </div>
  )
}
