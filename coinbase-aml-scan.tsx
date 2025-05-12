"use client"

import { X, Check, Lock } from "lucide-react"
import Link from "next/link"

export default function CoinbaseAMLScan() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <div className="w-6 h-6 bg-black rounded-full" />
        </div>
        <button className="text-white">
          <X className="w-8 h-8" />
        </button>
      </div>

      {/* Recommended Badge */}
      <div className="mb-16">
        <div className="px-4 py-1 bg-blue-900/40 rounded-md border border-blue-500">
          <span className="text-blue-500 font-semibold tracking-wider">RECOMMENDED</span>
        </div>
      </div>

      {/* Shield Graphic */}
      <div className="relative w-64 h-64 mb-8">
        {/* Shield Background */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-blue-500 rounded-tl-full rounded-bl-full" />
          <div className="w-1/2 bg-gray-300 rounded-tr-full rounded-br-full" />
        </div>

        {/* Bottom Blue Arc */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
          <div className="absolute inset-0 border-8 border-blue-500 rounded-full" style={{ top: "-100%" }} />
        </div>

        {/* Center Circle with Checkmark */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-black">
          <Check className="w-12 h-12 text-black" strokeWidth={3} />
        </div>

        {/* Left Circle with Asterisks */}
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
          <div className="text-blue-500 font-bold text-xl">
            <span className="grid grid-cols-2 gap-1">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </span>
          </div>
        </div>

        {/* Right Circle with Lock */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
          <div className="bg-blue-600 p-2 rounded-sm">
            <Lock className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700" />
      </div>

      {/* Title and Description */}
      <h1 className="text-5xl font-bold text-center mb-4">
        Coinbase AML
        <br />
        Scan
      </h1>

      <p className="text-gray-400 text-xl text-center mb-12 max-w-md">
        Advanced AML compliance and security for crypto transactions.
      </p>

      {/* Connect Button */}
      <button className="w-full max-w-md py-4 px-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-2xl font-semibold mb-4">
        Connect Wallet
      </button>

      {/* Footer Text */}
      <p className="text-gray-400 text-center text-sm mt-2">
        Linking a Coinbase account is subject to Coinbase's{" "}
        <Link href="#" className="text-blue-500">
          User Agreement
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-blue-500">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}
