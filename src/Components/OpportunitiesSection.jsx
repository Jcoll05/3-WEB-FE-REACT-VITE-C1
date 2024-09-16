// Define the data for Opportunities
const opportunities = [
  {
    id: 2,
    type: "Opportunities",
    items: [
      { id: 1, description: "Growing Gaming Market: The gaming industry is rapidly expanding, providing a larger customer base for Lethal's products." },
      { id: 2, description: "Technological Advancements: New technologies can be integrated into products to enhance performance and attract tech-savvy gamers." },
      { id: 3, description: "Partnership Opportunities: Collaborations with popular gaming influencers and brands could boost Lethal's market presence." }
    ]
  }
];

const OpportunitiesSection = () => {
  return (
    <div>
      {opportunities.map((opportunities) => (
        <div key={opportunities.id}>
          <h1 className="text-2xl font-bold mb-4">{opportunities.type}</h1>
          <ul className="list-disc pl-5 mt-2">
            {opportunities.items.map((item) => (
              <li key={item.id} className="mb-2">{item.description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OpportunitiesSection;

