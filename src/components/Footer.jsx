import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-black/40">
      <div className="mx-auto max-w-7xl px-6 py-12 text-white/80">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Men</a></li>
              <li><a href="#" className="hover:text-white">Kids</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <div className="flex gap-3">
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20"><Facebook className="h-4 w-4"/></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20"><Instagram className="h-4 w-4"/></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20"><Twitter className="h-4 w-4"/></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20"><Youtube className="h-4 w-4"/></a>
            </div>
            <p className="mt-4 text-sm text-white/60">support@aurum.studio</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">© 2025 AURUM Fashion. All rights reserved.</div>
      </div>
    </footer>
  )
}
