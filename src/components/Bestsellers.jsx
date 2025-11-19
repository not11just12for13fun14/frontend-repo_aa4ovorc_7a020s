import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const products = [
  { id: 1, name: "Handloom Silk Saree", price: 129.0, img: "https://images.unsplash.com/photo-1612336307429-8a898d187b23?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Linen Casual Shirt", price: 49.0, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Organic Cotton Tee", price: 29.0, img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Festive Kurta Set", price: 99.0, img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Statement Earrings", price: 19.0, img: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=1200&auto=format&fit=crop" },
]

function ProductCard({ product }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="group relative w-72 shrink-0 overflow-hidden rounded-[26px] bg-white/5 ring-1 ring-white/10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
      <div className="relative">
        <img src={product.img} alt={product.name} className="h-56 w-72 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="absolute -bottom-5 right-3 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 text-slate-900 shadow-[0_10px_30px_rgba(251,191,36,0.35)] ring-1 ring-white/20 transition-all group-hover:bottom-3"
        >
          <ShoppingCart className="h-5 w-5" />
        </motion.button>
      </div>
      <div className="p-4">
        <div className="text-white/90 font-medium truncate">{product.name}</div>
        <div className="mt-1 text-amber-200 font-semibold">${product.price.toFixed(2)}</div>
      </div>
    </motion.div>
  )
}

export default function Bestsellers() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % products.length)
  const prev = () => setIndex((i) => (i - 1 + products.length) % products.length)

  return (
    <section id="bestsellers" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Bestsellers</h2>
        <div className="flex gap-2">
          <button onClick={prev} className="rounded-full bg-white/10 px-3 py-2 text-white ring-1 ring-white/20 hover:bg-white/20">Prev</button>
          <button onClick={next} className="rounded-full bg-white/10 px-3 py-2 text-white ring-1 ring-white/20 hover:bg-white/20">Next</button>
        </div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${index * 18.5}rem` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="flex gap-6"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
