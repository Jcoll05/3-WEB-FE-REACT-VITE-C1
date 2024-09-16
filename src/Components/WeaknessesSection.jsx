// Define the data for weaknesses
const weaknesses = [
    {
      id: 1,
      type: "Weaknesses",
      items: [
        { id: 1, description: "Limited Product Range: Lethal offers a narrow selection of gaming accessories, which might not meet the diverse needs of all gamers." },
        { id: 2, description: "High Production Costs: The company faces high production costs due to premium materials and advanced technology used in their products." },
        { id: 3, description: "Brand Recognition: Lethal is relatively new in the market and lacks strong brand recognition compared to established competitors." }
      ]
    }
  ];
  
  const WeaknessesSection = () => {
    return (
      <div>
        {weaknesses.map((weakness) => (
          <div key={weakness.id}>
            <h1 className="text-2xl font-bold mb-4">{weakness.type}</h1>
            <ul className="list-disc pl-5 mt-2">
              {weakness.items.map((item) => (
                <li key={item.id} className="mb-2">{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default WeaknessesSection;