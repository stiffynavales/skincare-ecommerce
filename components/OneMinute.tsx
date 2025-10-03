export default function OneMinute() {
  const steps = [
    {
      number: "1",
      title: "Wash your face with our Bamboo Charcoal Cleanser",
      product: "/step-1.png",
      image: "/user-1.jpg",
    },
    {
      number: "2",
      title: "Apply a dime size amount of All Day Moisturizer evenly to your face",
      product: "/step-2.png",
      image: "/user-2.jpg",
    },
    {
      number: "3",
      title: "Apply small amount of our Eye Cream under your eyes and around the sides",
      product: "/step-3.png",
      image: "/user-3.jpg",
    },
  ]

  return (
    <section className="bg-[#eaf6fa] py-16 lg:py-24 mb-1 ">
      <div className="container mx-auto px-4">
        {/* Top text and clock */}
        <div className="text-center mb-4">
          <div className="text-gray-700 text-sm mb-2">Heres how D1 works</div>
          <div className="flex justify-center mb-2">
            <div className="w-full h-full flex items-center justify-center border-gray-300">
              <img src="/clock.svg" alt="Clock Icon" className="w-25 h-30" />
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase text-gray-900 mb-8">
            JUST 1 MINUTE A DAY
          </h2>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-80 h-100 rounded-xl overflow-hidden mb-4 bg-white flex items-center justify-center relative shadow">
                <span className="absolute top-2 left-2 w-7 h-7 bg-white rounded-full flex items-center justify-center font-bold text-gray-900 border border-gray-300 text-base">
                  {step.number}
                </span>
                <img src={step.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-center mb-2">
                <img src={step.product} alt="" className="w-8 h-8 mr-2" />
                <span className="text-gray-600 text-base font-medium leading-relaxed text-left">{step.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-20" />
      </div>
    </section>
  )
}
