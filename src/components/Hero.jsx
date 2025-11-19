import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(255,215,128,0.35),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(147,197,253,0.25),transparent),linear-gradient(120deg,#0f172a,#0b1220_50%,#0f172a)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]"/>
      </div>

      {/* Soft floating blobs */}
      <motion.div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-rose-200/30 via-pink-300/20 to-fuchsia-300/20 blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-gradient-to-br from-amber-200/30 via-yellow-300/20 to-amber-400/20 blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_6px_25px_rgba(0,0,0,0.35)]"
          >
            Couture for every moment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-white/80"
          >
            Premium sarees, shirts, tees and ethnic statements curated for modern India. Subtle, refined and effortlessly luxurious.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#bestsellers" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)]">
              Shop Bestsellers
              <span className="inline-block h-2 w-2 rounded-full bg-slate-900 group-hover:scale-125 transition" />
            </a>
            <a href="#categories" className="inline-flex items-center rounded-full px-6 py-3 text-white/90 ring-1 ring-white/30 backdrop-blur-md hover:bg-white/10">
              Explore Categories
            </a>
          </motion.div>
        </div>

        {/* Right: Fashion visuals */}
        <div className="ml-auto hidden md:block">
          <div className="relative w-[580px] h-[420px]">
            {/* Main model photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute inset-0 overflow-hidden rounded-[28px] ring-1 ring-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1612336307429-8a898d187b23?q=80&w=1600&auto=format&fit=crop"
                alt="Premium fashion hero"
                className="h-full w-full object-cover scale-105 saturate-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20" />
              <div className="absolute inset-0 backdrop-blur-[1px]" />
            </motion.div>

            {/* Floating secondary cards */}
            <motion.div
              className="absolute -left-10 -bottom-10 w-48 overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" className="h-56 w-full object-cover" />
            </motion.div>

            <motion.div
              className="absolute -right-10 -top-10 w-56 overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" className="h-72 w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom subtle scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
        <div className="h-8 w-6 rounded-full border border-white/40 grid place-items-center">
          <motion.span className="h-1 w-1 rounded-full bg-white" animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
        </div>
      </div>
    </section>
  )
}
