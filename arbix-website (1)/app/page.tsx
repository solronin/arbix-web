"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Home() {
  // Add smooth scrolling behavior
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.slice(1)
        const element = document.getElementById(id || "")
        if (element) {
          const offset = 80 // Adjust this value based on your header height
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleNavClick)
    return () => document.removeEventListener("click", handleNavClick)
  }, [])

  return (
    <div className="min-h-screen bg-[#050b18] text-white noise-bg">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
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

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -left-20 top-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute -right-20 bottom-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="mb-6">
              <span className="block text-4xl md:text-6xl font-medium mb-2 heading-grotesque">Smarter arbitrage,</span>
              <span className="block text-4xl md:text-6xl heading-serif text-blue-400">Safer trading</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Automatic arbitrage detection for traders and investors. Match with the perfect opportunities while
              protecting from MEV attacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="glass-button text-white rounded-full px-8 py-6 text-base font-light tracking-wide">
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-950/50 rounded-full px-8 py-6 text-base font-light tracking-wide"
              >
                <Link href="/whitepaper" className="flex items-center gap-2">
                  Whitepaper <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is arbiX Section */}
        <section id="what" className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center heading-grotesque">
              What is <span className="text-blue-400">arbiX</span>?
            </h2>
            <div className="glass-card rounded-2xl p-8 mb-10">
              <p className="text-lg mb-8 font-light leading-relaxed">
                arbiX is an on-chain AI agent designed to identify and capitalize on arbitrage opportunities while
                mitigating the risks posed by MEV (Maximal Extractable Value) attacks.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-3 text-blue-300 heading-grotesque">
                    Arbitrage Detection & Execution
                  </h3>
                  <p className="font-light leading-relaxed">
                    arbiX scans multiple decentralized exchanges (DEXs) and liquidity pools to detect price
                    discrepancies, automatically executing trades to profit from the difference.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-3 text-blue-300 heading-grotesque">MEV Attack Protection</h3>
                  <p className="font-light leading-relaxed">
                    Detect and prevent front-running, sandwich attacks, and other exploitative practices that can harm
                    regular users in the DeFi ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how" className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-blue-950/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center heading-grotesque">
              How <span className="text-blue-400">arbiX</span> Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-4 text-blue-300 heading-grotesque">On-Chain Execution</h3>
                <p className="mb-6 font-light leading-relaxed">
                  arbiX operates directly on the blockchain using smart contracts, ensuring transparency and efficiency.
                </p>
                <div className="h-40 bg-blue-800/20 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-300 font-light">Smart Contract Architecture</span>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-4 text-blue-300 heading-grotesque">AI-Powered Decision Making</h3>
                <p className="mb-6 font-light leading-relaxed">
                  By leveraging AI, arbiX can adapt to changing market conditions, optimizing trade execution speed and
                  profitability while minimizing risks.
                </p>
                <div className="h-40 bg-blue-800/20 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-300 font-light">AI Decision Flow</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center heading-grotesque">
              Benefits of <span className="text-blue-400">arbiX</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-medium mb-2 heading-grotesque">Profit Optimization</h3>
                <p className="text-gray-300 font-light">
                  Maximize returns by identifying the most profitable arbitrage opportunities across DeFi platforms.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-medium mb-2 heading-grotesque">MEV Protection</h3>
                <p className="text-gray-300 font-light">
                  Shield your transactions from harmful MEV attacks that can extract value from your trades.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-medium mb-2 heading-grotesque">AI Automation</h3>
                <p className="text-gray-300 font-light">
                  Leverage cutting-edge AI to automate trading decisions and adapt to market conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-10 text-center border border-blue-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 heading-grotesque">
              Ready to optimize your DeFi trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Join our waitlist to be among the first to access arbiX when we launch.
            </p>
            <Button className="glass-button text-white rounded-full px-8 py-6 text-base font-light tracking-wide">
              Join Waitlist
            </Button>
          </div>
        </section>
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

