import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-primary text-white p-4">
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-pink-500/20 blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="relative z-10 text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-8 text-white/80">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-white text-primary hover:bg-white/90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
