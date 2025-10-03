export default function Ingredients() {
  const ingredients = [
    {
      image: "/texture-1.jpg",
      name: "Hyaluronic Acid",
      product: "ALL DAY MOISTURIZER",
    },
    {
      image: "/texture-2.jpg",
      name: "Niacinamide",
      product: "ALL DAY MOISTURIZER",
    },
    {
      image: "/texture-3.jpg",
      name: "Bamboo Charcoal",
      product: "ALL DAY MOISTURIZER",
    },
    {
      image: "/texture-4.jpg",
      name: "Centella Asiatica",
      product: "CHARCOAL CLEANSER",
    },
    {
      image: "/texture-5.jpg",
      name: "Rose Oil",
      product: "CHARCOAL CLEANSER",
    },
    {
      image: "/texture-6.jpg",
      name: "Bamboo Charcoal",
      product: "CHARCOAL CLEANSER",
    },
  ];

  return (
    <section className="bg-[#eaf6fa] py-16 lg:py-24" id="ingredients">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
            BEST-IN-CLASS
            <br />
            INGREDIENTS THAT WORK
          </h2>
          <button className="bg-yellow-400 text-gray-900 font-bold text-sm rounded-full px-6 py-2 mt-2 mb-8 shadow hover:bg-yellow-300 transition-colors">
            FULL INGREDIENT LIST
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
          {ingredients.map((ingredient, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-gray-900 mb-1">{ingredient.name}</h3>
                <p className="text-xs uppercase text-gray-500 tracking-wide">{ingredient.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
