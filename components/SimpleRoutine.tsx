export default function SimpleRoutine() {
  return (
    <section className="bg-[#eaf6fa] py-0" id="routine">
      {/* Top yellow bar */}
      <div className="w-full bg-yellow-500 h-8 flex items-center justify-center text-sm font-bold text-gray-900 tracking-wide">
        Just <span className="underline mx-1">one minute</span> a day will make your skin look healthier and younger
      </div>
      <div className="container mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Heading and description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
              <span className="block">A SIMPLE</span>
              <span className="block">ROUTINE THAT</span>
              <span className="block">WORKS</span>
            </h2>
            <p className="text-gray-700 text-lg mb-5">
              Say goodbye to complicated skincare routines. Our skincare saves time & is designed for simplicity and effectiveness. With D1 (Day One) formula, you can achieve healthier and younger-looking skin with minimal effort. Perfect for guys who are new to skincare or just want to keep it simple.
            </p>
            <ul className="mb-6 text-gray-700 text-base space-y-2">
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> Lightweight formulas
              </li>
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> Easy to use formats
              </li>
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> Clean ingredients
              </li>
              <li className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5 h-5" /> Everything you need, nothing you don&apos;t
              </li>
            </ul>
          </div>
          {/* Right: Product image in circle */}
         <div className="flex items-center justify-center">
  <div className="relative w-85 h-100 flex items-center justify-center">
    <img
      src="ocean-circle.png"
      alt="Ocean background"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</div>
        </div>
        {/* Features row */}
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between px-8 py-10 mt-12 mb-8">
          <div className="flex items-center flex-1 justify-center">
            <img src="/Group 6.png" alt="Korean Skincare Technology" className="w-28 h-28 rounded-full object-cover mr-6" />
            <span className="font-mono text-gray-900 text-base text-left">Cutting-edge<br />Korean Skincare<br />Technology</span>
          </div>
          <div className="flex items-center flex-1 justify-center">
            <img src="/ocean-texture.jpg" alt="Science-backed Ingredients" className="w-28 h-28 rounded-full object-cover mr-6" />
            <span className="font-mono text-gray-900 text-base text-left">Science-backed<br />Ingredients</span>
          </div>
          <div className="flex items-center flex-1 justify-center">
            <img src="/leaf-texture.jpg" alt="Dermatologically Tested" className="w-28 h-28 rounded-full object-cover mr-6" />
            <span className="font-mono text-gray-900 text-base text-left">Dematologically<br />Tested</span>
          </div>
        </div>
      </div>
    </section>
    
  )
}