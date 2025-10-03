export default function GetTheSet() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text and features */}
          <div>
            <span className="inline-block bg-yellow-400 text-gray-900 font-bold text-xs rounded-full px-4 py-1 mb-4">
              Start your 1 minute routine
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">GET THE SET</h2>
            <p className="text-gray-700 text-base mb-4">
              Experience the ultimate simplicity and effectiveness with our complete skincare set. Designed for men who want great skin without the hassle, our set includes everything you need for a daily routine that takes just one minute.
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="mb-6 text-gray-900 text-base space-y-3 font-semibold">
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> $10 Off Each Pouch
              </li>
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> Never Run Out
              </li>
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> No Commitment. Cancel Anytime
              </li>
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> Pause, Delay, or Change Frequency
              </li>
            </ul>
            <button className="bg-gray-900 text-white font-bold text-base rounded-full px-8 py-3 mt-2 shadow hover:bg-gray-800 transition-colors flex items-center gap-2">
              ADD TO CART – $58.99
              <span className="line-through text-gray-400 text-sm ml-2">$69.99</span>
            </button>
          </div>
          {/* Right: Product image */}
          <div className="flex items-center justify-center">
            <img
              src="/product-set.png"
              alt="D1 Skincare Set"
              className="max-w-full w-full md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
