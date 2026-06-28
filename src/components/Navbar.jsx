
import React, { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#EAEAEA] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Search */}
        <div className="hidden flex-1 justify-center px-8 lg:flex">
          <div className="flex w-full max-w-lg items-center rounded-xl border border-[#EAEAEA] bg-[#F8F9FA] px-4 py-2.5 transition focus-within:border-[#4CAF50]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-[#9CA3AF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search for meals, ingredients..."
              className="ml-3 w-full bg-transparent text-sm text-[#2C2C2C] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <button className="text-sm font-medium text-[#4A4A4A] transition hover:text-[#4CAF50]">
            Categories
          </button>

          <button className="text-sm font-medium text-[#4A4A4A] transition hover:text-[#4CAF50]">
            Areas
          </button>

          <button className="rounded-lg bg-[#4CAF50] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#43A047]">
            Popular
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-[#EAEAEA] p-2 text-[#4A4A4A] lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-[#EAEAEA] bg-white lg:hidden">
          <div className="space-y-4 px-5 py-5">

            <div className="flex items-center rounded-xl border border-[#EAEAEA] bg-[#F8F9FA] px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#9CA3AF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search meals..."
                className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-[#9CA3AF]"
              />
            </div>

            <button className="block w-full rounded-lg py-3 text-left font-medium text-[#4A4A4A] transition hover:bg-[#F8F9FA] hover:text-[#4CAF50]">
              Categories
            </button>

            <button className="block w-full rounded-lg py-3 text-left font-medium text-[#4A4A4A] transition hover:bg-[#F8F9FA] hover:text-[#4CAF50]">
              Areas
            </button>

            <button className="w-full rounded-lg bg-[#4CAF50] py-3 font-semibold text-white transition hover:bg-[#43A047]">
              Popular
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;