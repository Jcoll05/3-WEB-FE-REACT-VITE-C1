// ThreatsSection.jsx

// Define the data for Threats
const threats = [
    {
      id: 4,
      type: "Threats",
      items: [
        { id: 1, description: "Intense Competition: The gaming accessories market is highly competitive, with many established brands." },
        { id: 2, description: "Rapid Technological Changes: Constant changes in technology can make products quickly obsolete, requiring continuous innovation." },
        { id: 3, description: "Economic Fluctuations: Changes in the global economy can affect consumer spending on non-essential items like gaming accessories." }
      ]
    }
  ];
  
  const ThreatsSection = () => {
    return (
      <div>
        {threats.map((threats) => (
          <div key={threats.id}>
            <h1 className="text-2xl font-bold mb-4">{threats.type}</h1>
            <ul className="list-disc pl-5 mt-2">
              {threats.items.map((item) => (
                <li key={item.id} className="mb-2">{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default ThreatsSection;