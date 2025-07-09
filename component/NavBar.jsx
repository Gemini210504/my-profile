"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBarComponent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
   
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="w-full bg-violet-200 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
      <nav className="max-w-full mx-auto px-6 py-4 flex items-center justify-between gap-4 md:gap-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition duration-300">
              <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
              <span className="text-white font-bold text-xl relative z-10">
                L
              </span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-br from-violet-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
             Leang Chhengleap
            </h1>
            <p className="text-sm text-violet-700 font-medium tracking-wide">
              Web Developer
            </p>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  isActive(item.href)
                    ? " bg-gradient-to-br from-purple-500 via-purple-500 to-purple-700 "
                    : "text-gray-700 hover:text-violet-700 hover:bg-white/60 hover:shadow-md"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute inset-0  opacity-20 rounded-full animate-pulse"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Profile + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-violet-700 transition-all rounded-full hover:bg-violet-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Profile Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="https://i.pinimg.com/736x/62/08/c2/6208c2bf8e8714b92068ed1edf38c295.jpg"
              alt="me"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-white/95 to-violet-50/95 backdrop-blur-xl border-t border-white/20 px-6 pt-4 pb-6">
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={`transform transition-all duration-300 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3 rounded-2xl font-medium relative overflow-hidden group ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-md scale-105"
                      : "text-gray-700 hover:text-violet-700 hover:bg-white/70 hover:shadow"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
