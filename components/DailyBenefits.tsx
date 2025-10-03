export default function DailyBenefits() {
  const benefits = [
    {
      image: "/fresher.jpg",
      title: "LOOK FRESHER AND MORE CONFIDENT",
      description: "Prevent and reduce fine lines and wrinkles that develop with dry skin as you age",
    },
    {
      image: "/prevent.jpg",
      title: "PREVENT AGING AND MAINTAIN YOUTHFUL SKIN",
      description: "Prevent and reduce fine lines and wrinkles that develop with dry skin as you age",
    },
    {
      image: "/boost.jpg",
      title: "BOOST YOUR SKIN HEALTH",
      description: "Prevent and reduce fine lines and wrinkles that develop with dry skin as you age",
    },
  ]

  return (
    <section className="bg-[#eaf6fa] py-16 lg:py-24">
      <div className="container mx-auto px-4 mt-[-200px]">
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
            DAILY BENEFITS.<br />
            LONG-TERM RESULTS
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-transparent rounded-2xl overflow-hidden">
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 flex items-center justify-center bg-white">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase mb-2 text-left">{benefit.title}</h3>
              <p className="text-gray-900 text-base leading-relaxed text-left">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
