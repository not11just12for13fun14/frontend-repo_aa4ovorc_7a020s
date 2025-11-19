import { motion } from "framer-motion"

const categories = [
  { name: "Sarees", img: "https://images.unsplash.com/photo-1530025809667-1f4c1e8f1f17?q=80&w=1600&auto=format&fit=crop" },
  { name: "Shirts", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" },
  { name: "T-shirts", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" },
  { name: "Ethnic Wear", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" },
  { name: "Women’s Fashion", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" },
  { name: "Men’s Fashion", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" },
  { name: "Kids Wear", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" },
  { name: "Accessories", img: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=1600&auto=format&fit=crop" },
]

export default function Categories() {
  return (
    <section id="categories" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <motion.a
            href="#"
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            <img src={cat.img} alt={cat.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur-sm">
                {cat.name}
              </div>
            </div>
            <motion.div
              className="absolute right-3 top-3 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 p-[1px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
            >
              <div className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-amber-200">Shop</div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
