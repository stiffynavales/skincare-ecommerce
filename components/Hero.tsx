export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-2">
              SKINCARE FOR GUYS<br />
              THAT AREN&apos;T INTO<br />
              <span className="text-yellow-500">SKINCARE</span>
            </h1>
            <div className="uppercase text-white/80 tracking-wide text-sm mb-3">
              Try the one minute skincare routine
            </div>
            <button className="bg-yellow-500 text-gray-900 w-48 py-3 rounded-full font-bold text-base uppercase tracking-wide hover:bg-yellow-400 transition-all shadow-lg mb-5">
              Try Today!
            </button>
            <div className="mt-5">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-500 text-xl">★★★★★</span>
              </div>
              <div className="text-white/90 text-base font-medium mb-1">
                “I love this stuff, it totally changed the game for me”
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60 font-semibold">
                {/* Initials Avatar */}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-gray-900 font-bold text-xs border border-gray-300">
                  PS
                </span>
                P.S <span className="font-normal">Peter S.</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Group 18.png"
              alt="Product Set"
              className="max-w-full w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}