import Link from "next/link"

const Footer = () => {
  return (
     <footer className="border-t border-brand-green/15 bg-brand-green text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">Davintom</p>
            <p className="mt-2 text-sm text-white/80">
              Connecting livestock and meat producers directly with vendors and
              everyday consumers.
            </p>
          </div>

          <div className="text-sm text-white/80">
            <p className="font-semibold text-white">
              Location &amp; Partnerships
            </p>
            <p className="mt-2">Ile-Ife, Osun State, Nigeria</p>
            <p className="mt-1">partnerships@davintom.com</p>
            <p className="mt-1">+234 813 741 4398</p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <p className="font-semibold text-white">Quick Links</p>
            <Link href="/explore" className="text-white/80 hover:text-white">
              Order Fresh Meat
            </Link>
            <Link href="/partner" className="text-white/80 hover:text-white">
              Abattoir &amp; Vendor Onboarding
            </Link>
          </div>
        </div>
        </footer>
  )
}

export default Footer 
 