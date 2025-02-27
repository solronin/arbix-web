import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Whitepaper() {
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
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>

          <div className="glass-card rounded-2xl p-12 mb-10 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <h1 className="text-4xl md:text-5xl font-medium heading-grotesque">arbiX Whitepaper</h1>
                <ArrowUpRight size={24} className="text-blue-400" />
              </div>

              <p className="text-gray-400 text-lg mb-12 max-w-2xl font-light">
                A comprehensive overview of arbiX's on-chain AI agent technology, arbitrage detection system, and MEV
                protection mechanisms.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                  <div className="text-sm text-gray-400 mb-2 font-light">Estimated Release</div>
                  <div className="text-2xl font-medium heading-grotesque">March 2025</div>
                </div>
                <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                  <div className="text-sm text-gray-400 mb-2 font-light">Current Status</div>
                  <div className="text-2xl font-medium heading-grotesque">In Development</div>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-medium heading-grotesque mb-4">What to Expect</h2>
                <div className="grid gap-4">
                  {[
                    "Technical architecture and system design",
                    "Arbitrage detection algorithms and strategies",
                    "MEV protection mechanisms and implementation",
                    "AI integration and decision-making processes",
                    "Token economics and governance structure",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <p className="text-gray-400 max-w-md mx-auto mb-6 font-light">
                  Be the first to receive the whitepaper when it's released. Join our waitlist for exclusive updates.
                </p>
                <Button className="glass-button text-white rounded-full px-8 py-4 text-base font-light tracking-wide">
                  Join Whitepaper Waitlist
                </Button>
              </div>
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

