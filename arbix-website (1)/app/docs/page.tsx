import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Docs() {
  return (
    <div className="min-h-screen bg-[#050b18] text-white noise-bg">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="logo-circle w-10 h-10 p-0.5 glow-effect">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arbix%20logo-2.jpg-2in44cXO6HVoM76785REGsmlZS1ODv.jpeg"
                  alt="arbiX Logo"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-xl font-medium heading-grotesque">arbiX</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/#what" className="text-gray-300 hover:text-blue-400 transition text-sm tracking-wide">
            What
          </Link>
          <Link href="/#how" className="text-gray-300 hover:text-blue-400 transition text-sm tracking-wide">
            How
          </Link>
          <Link href="/#benefits" className="text-gray-300 hover:text-blue-400 transition text-sm tracking-wide">
            Benefits
          </Link>
          <Link href="/docs" className="text-gray-300 hover:text-blue-400 transition text-sm tracking-wide">
            Docs
          </Link>
        </nav>
        <Button className="glass-button text-white rounded-full px-6 py-1.5 text-sm font-light tracking-wide">
          Join Waitlist
        </Button>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>

          <div className="glass-card rounded-2xl p-8 mb-10">
            <h1 className="text-3xl md:text-4xl font-medium mb-6 text-center heading-grotesque">
              arbiX <span className="heading-serif text-blue-400">Documentation</span>
            </h1>

            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                <span className="text-4xl">📚</span>
              </div>
              <h2 className="text-2xl font-medium mb-4 heading-grotesque">Coming Soon</h2>
              <p className="text-gray-300 max-w-md mx-auto mb-8 font-light leading-relaxed">
                Our comprehensive documentation is currently under development. We're working to provide detailed guides
                on how to use arbiX effectively.
              </p>
              <Button className="glass-button text-white rounded-full px-6 py-4 text-base font-light tracking-wide">
                Join Waitlist for Updates
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-10 px-4 border-t border-blue-900/30">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="logo-circle w-8 h-8 p-0.5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arbix%20logo-2.jpg-2in44cXO6HVoM76785REGsmlZS1ODv.jpeg"
                alt="arbiX Logo"
                width={30}
                height={30}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-lg font-medium heading-grotesque">arbiX</span>
          </div>
          <div className="flex gap-8">
            <Link href="/whitepaper" className="text-gray-300 hover:text-blue-400 transition text-sm">
              Whitepaper
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-blue-400 transition text-sm">
              Docs
            </Link>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition text-sm">
              Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition text-sm">
              Discord
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400 font-light">© 2025 arbiX. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

