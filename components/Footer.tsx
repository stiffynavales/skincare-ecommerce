"use client"

import type React from "react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer className="bg-[#232533] text-white py-12 font-mono">
      <div className="container mx-auto px-4">
        {/* Top: Newsletter & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="w-full md:w-3/4">
            <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">JOIN THE D1 CLUB</h4>
            <p className="text-xs mb-6 tracking-wide">Subscribe for deals, and tips on mens skincare</p>
            <form className="flex w-full mb-6" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-4 bg-[#eaf6fa] text-gray-900 text-base border-none outline-none"
              />
              <button
                type="submit"
                className="bg-[#232533] text-white px-6 font-mono text-base font-bold border border-white ml-2"
              >
                SUBMIT
              </button>
            </form>
            <div className="flex gap-6 mt-2">
              <a href="#" aria-label="Instagram">
                <div className="bg-[#eaf6fa] rounded-full w-12 h-12 flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </div>
              </a>
              <a href="#" aria-label="TikTok">
                <div className="bg-[#eaf6fa] rounded-full w-12 h-12 flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg" alt="TikTok" className="w-6 h-6" />
                </div>
              </a>
              <a href="#" aria-label="Facebook">
                <div className="bg-[#eaf6fa] rounded-full w-12 h-12 flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-end items-start mt-8 md:mt-0">
            <span className="text-5xl font-black tracking-wide">D1</span>
          </div>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 gap-12 mb-10">
          <div>
            <h4 className="text-lg font-bold uppercase mb-4 tracking-wide">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white">Support</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">FAQS</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Account</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white">Company</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Philosophy</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom: Copyright & Disclaimer */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-10">
          <div className="text-xs text-white/50">&copy;D1 2025 — site by manufactur</div>
          <div className="text-xs text-white/50 border border-white/30 rounded px-3 py-2 max-w-xs text-left mt-6 md:mt-0">
            These statements have not been evaluated by the Food and Drug Administration. This product is not inteded to diagnose, treat, cure, or prevent any disease. Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </footer>
  )
}
