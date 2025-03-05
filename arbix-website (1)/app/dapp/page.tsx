"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Wallet, Shield, Zap, BarChart2, Search, Brain, Database, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const SOLANA_TOKENS = [
  { id: "sol", name: "Solana", symbol: "SOL", icon: "◎" },
  { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "$" },
  { id: "ray", name: "Raydium", symbol: "RAY", icon: "R" },
  { id: "srm", name: "Serum", symbol: "SRM", icon: "S" },
]

const SOLANA_ARBITRAGE_OPPORTUNITIES = [
  { id: 1, from: "Orca", to: "Raydium", profit: "0.23%", amount: "1000 USDC" },
  { id: 2, from: "Raydium", to: "Serum", profit: "0.15%", amount: "500 SOL" },
  { id: 3, from: "Serum", to: "Orca", profit: "0.18%", amount: "2000 RAY" },
]

export default function Dapp() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [selectedToken, setSelectedToken] = useState<string>("")
  const [showArbitrageData, setShowArbitrageData] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState(0)
  const [processingComplete, setProcessingComplete] = useState(false)
  const [investAmount, setInvestAmount] = useState("")

  const handleConnectWallet = () => {
    setIsWalletConnected(true)
  }

  const handleStartOptimization = () => {
    setIsProcessing(true)
    setProcessingStep(0)
    setProcessingComplete(false)

    // Simulate the AI processing steps
    const processingSteps = [
      "Scanning DEX liquidity pools...",
      "Analyzing price discrepancies...",
      "Running RL model simulations...",
      "Calculating optimal trade paths...",
      "Evaluating MEV protection strategies...",
      "Finalizing arbitrage opportunities...",
    ]

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < processingSteps.length - 1) {
        currentStep++
        setProcessingStep(currentStep)
      } else {
        clearInterval(interval)
        setProcessingComplete(true)
        setTimeout(() => {
          setIsProcessing(false)
          setShowArbitrageData(true)
        }, 1000)
      }
    }, 1200)
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

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-300 hover:text-blue-400 transition text-sm tracking-wide">
            Trading Console
          </Link>
          <Button
            onClick={handleConnectWallet}
            className={`glass-button text-white rounded-full px-6 py-1.5 text-sm font-light tracking-wide ${
              isWalletConnected ? "bg-green-500/20 border-green-500/30" : ""
            }`}
          >
            <Wallet className="w-4 h-4 mr-2" />
            {isWalletConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>

          <div className="glass-card rounded-2xl p-12 mb-10">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-medium heading-grotesque mb-6 tracking-tight">
                DeFi Command Center
              </h1>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl font-light">
                Optimize your arbitrage opportunities and protect against MEV attacks on Solana DeFi.
              </p>

              {isWalletConnected ? (
                <div className="space-y-8">
                  {!isProcessing && !showArbitrageData && (
                    <>
                      <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                        <label className="block text-sm text-gray-400 mb-3 font-light">Select Token</label>
                        <Select value={selectedToken} onValueChange={setSelectedToken}>
                          <SelectTrigger className="w-full bg-transparent border border-blue-500/30 rounded-lg p-4 text-lg">
                            <SelectValue placeholder="Choose a token" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0a1428] border border-blue-500/30">
                            {SOLANA_TOKENS.map((token) => (
                              <SelectItem key={token.id} value={token.id} className="text-white hover:bg-blue-500/20">
                                <div className="flex items-center gap-2">
                                  <span className="text-xl">{token.icon}</span>
                                  <span>{token.name}</span>
                                  <span className="text-gray-400">({token.symbol})</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedToken && (
                        <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-gray-400 mb-1">Selected Token</div>
                              <div className="text-2xl font-medium heading-grotesque">
                                {SOLANA_TOKENS.find((t) => t.id === selectedToken)?.name}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 mb-1">Symbol</div>
                              <div className="text-2xl font-medium heading-grotesque">
                                {SOLANA_TOKENS.find((t) => t.id === selectedToken)?.symbol}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <Button
                        className="w-full glass-button text-white rounded-xl px-8 py-6 text-lg font-light tracking-wide"
                        disabled={!selectedToken}
                        onClick={handleStartOptimization}
                      >
                        Start Optimization
                      </Button>
                    </>
                  )}

                  {isProcessing && (
                    <div className="py-8">
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative w-32 h-32 mb-8">
                          <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
                          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>

                          {processingStep === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Search className="w-12 h-12 text-blue-400 animate-pulse" />
                            </div>
                          )}

                          {processingStep === 1 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Database className="w-12 h-12 text-blue-400 animate-pulse" />
                            </div>
                          )}

                          {processingStep >= 2 && processingStep <= 4 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Brain className="w-12 h-12 text-blue-400 animate-pulse" />
                            </div>
                          )}

                          {processingStep === 5 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Zap className="w-12 h-12 text-blue-400 animate-pulse" />
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl font-medium heading-grotesque mb-4 text-center">
                          {processingComplete ? "Analysis Complete!" : "AI Analysis in Progress"}
                        </h3>

                        <div className="glass-card rounded-xl p-4 bg-blue-950/30 w-full max-w-md mb-6">
                          <div className="text-sm font-light">
                            {processingStep === 0 && "Scanning DEX liquidity pools..."}
                            {processingStep === 1 && "Analyzing price discrepancies..."}
                            {processingStep === 2 && "Running RL model simulations..."}
                            {processingStep === 3 && "Calculating optimal trade paths..."}
                            {processingStep === 4 && "Evaluating MEV protection strategies..."}
                            {processingStep === 5 && "Finalizing arbitrage opportunities..."}
                          </div>
                          <div className="w-full bg-blue-900/30 h-1.5 rounded-full mt-3">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full transition-all duration-300 ease-out"
                              style={{ width: `${(processingStep + 1) * 16.66}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="text-center text-gray-400 text-sm max-w-md">
                          ArbiX is analyzing data from multiple DEXs and running its reinforcement learning model to
                          find the most profitable arbitrage opportunities.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-6">Please connect your wallet to continue</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleConnectWallet}
                      className="glass-button text-white rounded-full px-8 py-4 text-base font-light tracking-wide"
                    >
                      <Wallet className="w-4 h-4 mr-2" />
                      Connect Wallet
                    </Button>
                    <Link href="/dashboard">
                      <Button className="glass-button bg-blue-500/20 text-white rounded-full px-8 py-4 text-base font-light tracking-wide">
                        View Trading Console
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {showArbitrageData && (
                <div className="mt-12 space-y-8">
                  <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                    <h2 className="text-2xl font-medium section-title mb-4">Arbitrage Opportunities</h2>
                    <div className="space-y-4">
                      {SOLANA_ARBITRAGE_OPPORTUNITIES.map((opp) => (
                        <div key={opp.id} className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg">
                          <div>
                            <div className="text-sm text-gray-400">
                              From {opp.from} to {opp.to}
                            </div>
                            <div className="text-lg font-medium">{opp.amount}</div>
                          </div>
                          <div className="text-green-400 text-lg font-medium">{opp.profit}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass-card rounded-xl p-6 text-center">
                      <Shield className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                      <h3 className="text-xl font-medium mb-2 heading-grotesque">MEV Protection</h3>
                      <p className="text-gray-300 font-light">
                        Active protection against frontrunning and sandwich attacks
                      </p>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center">
                      <Zap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                      <h3 className="text-xl font-medium mb-2 heading-grotesque">AI-Powered Execution</h3>
                      <p className="text-gray-300 font-light">
                        Optimized trade execution using machine learning algorithms
                      </p>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center">
                      <BarChart2 className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                      <h3 className="text-xl font-medium mb-2 heading-grotesque">Real-Time Analytics</h3>
                      <p className="text-gray-300 font-light">Live market data and performance metrics</p>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6 bg-blue-950/30">
                    <h2 className="text-2xl font-medium section-title mb-4">Performance Overview</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Total Profit (SOL)</div>
                        <div className="text-2xl font-medium numeric-display text-green-400">+2.45 SOL</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Trades Executed</div>
                        <div className="text-2xl font-medium numeric-display">24</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">MEV Attacks Prevented</div>
                        <div className="text-2xl font-medium numeric-display">7</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">AI Accuracy</div>
                        <div className="text-2xl font-medium numeric-display">98.2%</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="glass-button text-white rounded-full px-8 py-4 text-lg font-light tracking-wide">
                          <TrendingUp className="w-5 h-5 mr-2" />
                          Invest Now
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
                          <Link href="/dashboard">
                            <Button className="w-full mt-4 glass-button text-white rounded-full px-6 py-2 text-sm font-light tracking-wide">
                              Start Investing
                            </Button>
                          </Link>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )}
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

