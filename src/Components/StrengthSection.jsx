// StrengthsSection.jsx

// Define the data for Strengths
const strengths = [
    {
      id: 3,
      type: "Strengths",
      items: [
        { id: 1, description: "Innovative Product Design: Lethal offers cutting-edge designs that cater to the needs of gamers." },
        { id: 2, description: "High-Quality Materials: The use of premium materials ensures durability and high performance of the products." },
        { id: 3, description: "Strong R&D Team: A dedicated research and development team drives continuous improvement and innovation." }
      ]
    }
  ];
  
  const StrengthsSection = () => {
    return (
      <div>
        {strengths.map((strengths) => (
          <div key={strengths.id}>
            <h1 className="text-2xl font-bold mb-4">{strengths.type}</h1>
            <ul className="list-disc pl-5 mt-2">
              {strengths.items.map((item) => (
                <li key={item.id} className="mb-2">{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default StrengthsSection;