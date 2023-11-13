import travelTips from "../../utils/travelsTipsData";

const TravelTips = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="my-container">
        <h2 className="text-3xl font-bold mb-4 text-center">Travel Tips</h2>
        <p className="text-center mb-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          sint, distinctio earum magnam, expedita blanditiis perspiciatis
          incidunt saepe delectus, velit sed unde atque eius non hic perferendis
          accusamus repellat eos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelTips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl secondary-text font-semibold mb-4">
                {tip.tip}
              </h3>
              <img
                className="w-full hover:scale-x-105 duration-300 h-32 object-cover mb-4"
                src={tip.image}
                alt={tip.tip}
              />
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
