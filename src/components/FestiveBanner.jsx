import { motion } from "framer-motion"

export default function FestiveBanner() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[32px] p-[2px]" style={{ background: "radial-gradient(1200px_400px_at_-10%_30%,rgba(255,200,120,.6),transparent), radial-gradient(1200px_400px_at_110%_70%,rgba(120,200,255,.5),transparent), linear-gradient(135deg,#1f2937,#0b1220)" }}>
        <div className="relative rounded-[30px] bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
          {/* Glow lines */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-0 h-40 w-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/20 to-fuchsia-500/0 blur-2xl" />
            <div className="absolute -bottom-20 left-0 h-40 w-full bg-gradient-to-r from-amber-400/0 via-amber-300/20 to-amber-400/0 blur-2xl" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-10 items-center">
            <div className="md:col-span-2">
              <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl font-semibold text-white">
                Festive Luxe Sale
              </motion.h3>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }} className="mt-3 text-white/80 text-lg">
                Up to 60% off on sarees, kurtas and occasion wear. Extra 10% with AU card.
              </motion.p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-black/60 px-3 py-1 text-sm text-amber-200 ring-1 ring-white/10 backdrop-blur-md">Neon Glow</span>
                <span className="rounded-full bg-black/60 px-3 py-1 text-sm text-amber-200 ring-1 ring-white/10 backdrop-blur-md">Gradient Mesh</span>
                <span className="rounded-full bg-black/60 px-3 py-1 text-sm text-amber-200 ring-1 ring-white/10 backdrop-blur-md">Glassmorphism</span>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#" className="rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)]">Shop Sale</a>
                <a href="#" className="rounded-full px-6 py-3 text-white ring-1 ring-white/30 hover:bg-white/10 backdrop-blur-md">Learn More</a>
              </div>
            </div>
            <div className="relative h-64 md:h-72">
              {/* Neon circles */}
              <motion.div className="absolute left-10 top-6 h-40 w-40 rounded-full bg-fuchsia-400/30 blur-2xl" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }} />
              <motion.div className="absolute right-10 bottom-6 h-40 w-40 rounded-full bg-amber-300/30 blur-2xl" animate={{ scale: [1.1, 1, 1.1] }} transition={{ repeat: Infinity, duration: 5 }} />
              <div className="absolute inset-6 rounded-[28px] bg-white/10 ring-1 ring-white/10 backdrop-blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
