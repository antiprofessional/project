"use client"

import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoinbaseAMLScan() {
  return (
    <div className="overflow-hidden flex flex-col items-center min-h-screen bg-black text-white px-5 py-5">
      {/* Header with bottom border */}
      <div className="w-screen flex justify-between items-center mb-6 pl-5 pr-5 pt pb-5 border-b border-gray-700">
        <div className="w-10 h-10">
          <Image
            src="/logo.jpg"
            alt="Coinbase Logo"
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
        </div>
        <button className="text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Recommended Badge */}
      <div className="mb-10">
        <div className="px-3 py-0.5 bg-transparent rounded text-blue-500 font-bold tracking-wider text-xs">
          RECOMMENDED
        </div>
      </div>

      {/* Shield Graphic - Simplified */}
      <div className="mb-6">
        <Image
          src="/main.png"
          alt="Security Shield Graphic"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-center mb-6">
       AML COMPLIANCE
      </h1>

      <p className="text-gray-500 text-lg text-center mb-10 max-w-xs">
        Ensure regulatory compliance by scanning wallets for suspicious crypto activity
      </p>

      {/* Connect Button */}
      <button className="w-full max-w-xs py-3 px-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-2xl font-semibold mb-4">
        Connect Wallet
      </button>

      {/* Footer Text */}
      <p className="text-gray-400 text-center text-xs mt-1">
        Scanning crypto assets is subject to Coinbase's{" "}
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
