"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Wallet, TrendingUp, ArrowUpRight, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const PORTFOLIO_DATA = {
  totalInvested: 2.567,
  weeklyProfit: "+20%",
  totalProfit: 0.512,
  trades: 24,
  accuracy: "98.2%",
}

export default function Dashboard() {
  const [investAmount, setInvestAmount] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInvest = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

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

        <Button className="glass-button text-white rounded-full px-6 py-1.5 text-sm font-light tracking-wide bg-green-500/20 border-green-500/30">
          <Wallet className="w-4 h-4 mr-2" />
          Connected
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-medium heading-grotesque mb-2 tracking-tight">Investment Dashboard</h2>
                <p className="text-gray-400">Track your AI-powered arbitrage performance</p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="glass-button text-white rounded-full px-6 py-2 text-sm font-light tracking-wide">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Invest More
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#0a1428] border-blue-500/30">
                  <DialogHeader>
                    <DialogTitle>Enter Investment Amount</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <Input
                      type="number"
                      placeholder="Amount in SOL"
                      value={investAmount}
                      onChange={(e) => setInvestAmount(e.target.value)}
                      className="bg-transparent border-blue-500/30"
                    />
                    <Button
                      className="w-full mt-4 glass-button text-white rounded-full px-6 py-2 text-sm font-light tracking-wide"
                      onClick={handleInvest}
                    >
                      Confirm Investment
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-card rounded-xl p-6 bg-blue-950/30"
                >
                  <div className="text-sm text-gray-400 mb-2">Total Invested</div>
                  <div className="text-3xl font-medium numeric-display">{PORTFOLIO_DATA.totalInvested} SOL</div>
                  <div className="mt-4 h-10 relative">
                    <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path
                          d="M0 20 L10 18 L20 22 L30 15 L40 19 L50 10 L60 15 L70 12 L80 18 L90 8 L100 15"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.5)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card rounded-xl p-6 bg-blue-950/30"
                >
                  <div className="text-sm text-gray-400 mb-2">Weekly Performance</div>
                  <div className="text-3xl font-medium numeric-display text-green-400">
                    {PORTFOLIO_DATA.weeklyProfit}
                  </div>
                  <div className="mt-2 text-sm text-gray-400">vs last week</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card rounded-xl p-6 bg-blue-950/30"
                >
                  <div className="text-sm text-gray-400 mb-2">Total Profit</div>
                  <div className="text-3xl font-medium numeric-display text-green-400">
                    +{PORTFOLIO_DATA.totalProfit} SOL
                  </div>
                  <div className="mt-2 text-sm text-gray-400">{PORTFOLIO_DATA.trades} successful trades</div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                  <h3 className="text-xl font-medium section-title mb-4">AI Strategy Performance</h3>
                  <div className="h-48 bg-blue-950/30 rounded-lg relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-xs bg-blue-900/50 px-2 py-1 rounded">
                      Accuracy: {PORTFOLIO_DATA.accuracy}
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <path
                        d="M0 150 C50 120, 100 180, 150 120 S250 80, 300 120 S350 100, 400 80"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.5)"
                        strokeWidth="2"
                      />
                      <circle cx="350" cy="100" r="4" fill="rgba(59, 130, 246, 0.8)" />
                    </svg>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                  <h3 className="text-xl font-medium section-title mb-4">MEV Protection</h3>
                  <div className="h-full flex flex-col justify-between">
                    <div className="text-3xl font-light leading-tight mb-6 tracking-tight">
                      Advanced protection against market volatility
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 text-green-400">
                        <Shield size={16} />
                        <span className="text-sm">Active protection enabled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-medium section-title">Recent Trades</h3>
                  <ArrowUpRight className="text-blue-400" />
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="text-sm">USDC → SOL</div>
                          <div className="text-xs text-gray-400">2h ago</div>
                        </div>
                      </div>
                      <div className="text-green-400">+0.05 SOL</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {showSuccess && (
        <div className="fixed bottom-4 right-4 glass-card rounded-xl p-4 bg-green-500/20 border border-green-500/30 text-white">
          Investment successful! Redirecting to dashboard...
        </div>
      )}
    </div>
  )
}

