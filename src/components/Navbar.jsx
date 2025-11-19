import { ShoppingBag, Search, User, Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between rounded-full backdrop-blur-md bg-white/10 ring-1 ring-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.25)] mt-4 px-4 sm:px-6">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 shadow-[0_0_40px_rgba(251,191,36,0.35)]" />
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-wide text-white">AURUM</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-amber-200/80">Fashion</div>
              </div>
            </motion.div>
          </div>

          {/* Center: Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              "New In",
              "Women",
              "Men",
              "Ethnic",
              "Kids",
              "Accessories",
              "Sale",
            ].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.2, duration: 0.4 }}
                className="relative text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {item}
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600 transition-all duration-300 group-hover:w-6" />
              </motion.a>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-3">
            <button className="group relative grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 transition">
              <Search className="h-5 w-5" />
              <span className="pointer-events-none absolute -bottom-8 translate-y-1/2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">Search</span>
            </button>
            <button className="group relative grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 transition">
              <User className="h-5 w-5" />
              <span className="pointer-events-none absolute -bottom-8 translate-y-1/2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">Profile</span>
            </button>
            <button className="group relative grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 transition">
              <ShoppingBag className="h-5 w-5" />
              <span className="pointer-events-none absolute -bottom-8 translate-y-1/2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">Cart</span>
            </button>
            <button className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
