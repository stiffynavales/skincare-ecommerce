export default function ThreeFormulas() {
  return (
    <section className="bg-[#232533] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Top badge and heading */}
        <div className="text-center mb-6">
          <span className="inline-block bg-yellow-400 text-gray-900 font-bold text-xs rounded-full px-4 py-1 mb-4">
            Just 1 minute a day
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-2">
            THREE PERFECT FORMULAS
          </h2>
          <div className="text-gray-300 text-base mb-8">
            <span className="underline">A game changer</span> for your skin
          </div>
        </div>
        {/* Formulas vertical layout */}
        <div className="flex flex-col items-center gap-16 mb-16">
          {/* Charcoal Face Wash */}
          <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
            <div className="md:w-1/3 flex flex-col items-start">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2">CHARCOAL FACE WASH</h3>
              <p className="text-gray-300 text-sm md:text-base mb-2 max-w-md">
                Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? At magnum periculum adiit in quo quaerimus.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="/pr1.png" alt="Charcoal Face Wash" className="w-50 drop-shadow-xl" />
            </div>
          </div>
          {/* All Day Face Moisturizer */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full justify-center">
            <div className="md:w-1/3 flex flex-col items-start">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2">ALL DAY FACE MOISTURIZER</h3>
              <p className="text-gray-300 text-sm md:text-base mb-2 max-w-md">
                Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? At magnum periculum adiit in quo quaerimus.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="/pr2.png" alt="All Day Face Moisturizer" className="w-70 drop-shadow-xl" />
            </div>
          </div>
          {/* Daily Eye Cream */}
          <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
            <div className="md:w-1/3 flex flex-col items-start">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2">DAILY EYE CREAM</h3>
              <p className="text-gray-300 text-sm md:text-base mb-2 max-w-md">
                Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? At magnum periculum adiit in quo quaerimus.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="/pr3.png" alt="Daily Eye Cream" className="w-70 drop-shadow-xl" />
            </div>
          </div>
        </div>
        {/* Customer reviews */}
        <div className="text-center text-yellow-400 font-mono font-bold text-sm mb-6 tracking-wide">
          Here is what our customers say
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#eaf6fa] rounded-2xl p-6 shadow text-left min-h-[160px] w-full flex flex-col justify-between">
            <div>
              <div className="text-gray-900 text-lg font-mono mb-2">★★★★★</div>
              <p className="text-gray-700 text-sm font-mono mb-4 leading-snug">
                "The testosterone support my daily regimen has needed for ages! I haven&apos;t felt this young in years."
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 font-bold text-base border border-gray-400 font-mono">BS</span>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-xs font-mono">Eric Treader</span>
                <span className="text-gray-500 text-xs font-mono">MEN&apos;S WELLNESS INFLUENCER</span>
              </div>
            </div>
          </div>
          <div className="bg-[#eaf6fa] rounded-2xl p-6 shadow text-left min-h-[160px] flex flex-col justify-between">
            <div>
              <div className="text-gray-900 text-lg font-mono mb-2">★★★★★</div>
              <p className="text-gray-700 text-sm font-mono mb-4 leading-snug">
                "The testosterone support my daily regimen has needed for ages! Thanks Joymode. I will definitely be renewing my subscription!"
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 font-bold text-base border border-gray-400 font-mono">BS</span>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-xs font-mono">Ben Steelheart</span>
                <span className="text-gray-500 text-xs font-mono">Ph.D., HUMAN MOVEMENT SCIENCE</span>
              </div>
            </div>
          </div>
          <div className="bg-[#eaf6fa] rounded-2xl p-6 shadow text-left min-h-[160px] flex flex-col justify-between">
            <div>
              <div className="text-gray-900 text-lg font-mono mb-2">★★★★★</div>
              <p className="text-gray-700 text-sm font-mono mb-4 leading-snug">
                "I dont miss a day without it now. This is the best stuff on the market for sure!"
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 font-bold text-base border border-gray-400 font-mono">HR</span>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-xs font-mono">Harrison Rockwell</span>
                <span className="text-gray-500 text-xs font-mono">MEN&apos;S WELLNESS INFLUENCER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
