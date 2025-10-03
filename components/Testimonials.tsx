export default function Testimonials() {
  const products = [
    {
      image: "/fans-1.jpg",
      name: "D1 Eye Cream",
      price: "$29.99",
      rating: 5,
    },
    {
      image: "/fans-2.jpg",
      name: "D1 Face Wash",
      price: "$29.99",
      rating: 5,
    },
    {
      image: "/fans-3.jpg",
      name: "D1 Complete Set",
      price: "$59.99",
      rating: 5,
    },
    {
      image: "/fans-4.jpg",
      name: "D1 Moisturizer",
      price: "$29.99",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#eaf6fa] py-16 lg:py-24" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase">WHAT OUR FANS SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/playbutton.svg"
                    alt="Play"
                    className="w-14 h-14 bg-white/90 rounded-full p-2 shadow hover:scale-110 transition-all cursor-pointer"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <img
                    src="/mute.svg"
                    alt="Mute"
                    className="w-7 h-7 bg-white/80 rounded-full p-1 shadow cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex flex-col px-4 pt-2 pb-2">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-[#1a2a3a] font-bold text-base leading-tight">{product.name}</span>
                    </div>
                    <div className="flex items-center mb-1 -mt-1">
                      <span className="text-[#1a2a3a] text-base mr-2 tracking-wide">{"★".repeat(product.rating)}</span>
                    </div>
                    <div className="text-gray-700 text-sm tracking-wide">{product.price}</div>
                  </div>
                  <button className="bg-[#232533] text-white font-bold text-base rounded-full px-8 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
