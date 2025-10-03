export default function Results() {
  return (
    <section className="bg-[#eaf6fa] py-16 lg:py-24 mb-30">
      <div className="container mx-auto px-4 mt-[-130px]">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 ">RESULTS YOU CAN SEE</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-2">
            A simple skincare routine is essential to reduce and prevent fine lines, wrinkles, dry skin, and dark splotches that start to appear on your face as you age.
          </p>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            If you don&apos;t feel better and see results in 30 days, you can keep the product and we&apos;ll send you a full refund
          </p>
        </div>

        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[340px] md:h-[430px] lg:h-full overflow-hidden shadow-lg mb-8 rounded-none">
          <img
            src="/before-after-2.jpg"
            alt="Skincare Results"
            className="w-full h-full object-fill"
          />
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-transparent">
            <span className="text-white text-2xl md:text-5xl font-black uppercase drop-shadow-lg text-right mr-50">
              "THE ONE MINUTE<br />ROUTINE THAT WILL<br />SAVE YOUR FACE"
            </span>
          </div>
        </div>

        <div className="overflow-hidden border-t border-gray-300 pt-6 bg-transparent">
          <div
            className="flex items-center gap-12 font-bold text-gray-900 text-xs md:text-base whitespace-nowrap animate-scroll-left"
            style={{ animation: "scrollLeft 18s linear infinite" }}
          >
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> ALL-NATURAL INGREDIENTS
            </div>
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> FORMULATED BY DOCTORS & PHDS
            </div>
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> 100% RISK-FREE RETURNS
            </div>
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> NO PRESCRIPTION NEEDED
            </div>
            {/* Repeat for seamless loop */}
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> ALL-NATURAL INGREDIENTS
            </div>
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> FORMULATED BY DOCTORS & PHDS
            </div>
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> 100% RISK-FREE RETURNS
            </div>
            <div className="flex items-center gap-2 mx-6">
              <img src="/check.svg" alt="check" className="w-5 h-5" /> NO PRESCRIPTION NEEDED
            </div>
          </div>
        </div>
        <style>
          {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          `}
        </style>
      </div>
    </section>
  )
}
