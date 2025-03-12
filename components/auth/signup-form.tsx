"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Mail, Lock, Loader2, CheckCircle } from 'lucide-react'

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/api/auth/callback`,
        },
      })

      if (error) {
        console.error("Error signing up:", error.message)
        setError(error.message)
      } else {
        console.log("Check your email for the verification link.")
        setSuccess(true)
        // Don't redirect immediately to allow user to see success message
        setTimeout(() => {
          router.push("/login")
        }, 5000)
      }
    } catch (error: any) {
      console.error("Unexpected error:", error.message)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg border-0 overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-gradient-creative opacity-10 z-0"></div>
      <CardHeader className="space-y-1 relative z-10">
        <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
        <CardDescription>Enter your email to create your account</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4 animate-slide-down">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-800 text-sm p-4 rounded-md mb-4 flex items-start gap-2 animate-slide-down">
            <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Verification email sent!</p>
              <p>Please check your email and click the verification link to complete your registration.</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background/50 backdrop-blur-sm"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-background/50 backdrop-blur-sm"
                required
                minLength={6}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Password must be at least 6 characters long</p>
          </div>
          <Button 
            disabled={loading || success} 
            type="submit" 
            className="w-full bg-gradient-creative hover:opacity-90 transition-opacity"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t bg-muted/20 backdrop-blur-sm relative z-10">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

export default SignUpForm
