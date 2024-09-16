// Define the data for Strategic Objectives
const strategicObjectives = [
    { id: 1, goal: "Increase Market Share", target: "100%", progress: "25%", compliance: 25 },
    { id: 2, goal: "Launch New Product Line", target: "$150,000", progress: "$20,000", compliance: 13 },
    { id: 3, goal: "Improve Customer Satisfaction", target: "90%", progress: "50%", compliance: 55 },
    { id: 4, goal: "Expand Internationally", target: "5 countries", progress: "3 countries", compliance: 60 },
    { id: 5, goal: "Reduce Production Costs", target: "20%", progress: "18%", compliance: 90 }
  ];
  
  // Function to determine the status and corresponding color
  const getStatus = (compliance) => {
    if (compliance <= 35) {
      return { text: "Critical", color: "text-red-500" };
    } else if (compliance <= 75) {
      return { text: "Acceptable", color: "text-orange-500" };
    } else {
      return { text: "Successful", color: "text-green-500" };
    }
  };
  
  // Strategic Objectives Section Component
  const StrategicObjectivesSection = () => {
    return (
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">3. Strategic Objectives</h1>
        
        {/* Table for larger screens */}
        <div className="hidden md:block">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-white">
                <th className="border border-[#5a5a5a] p-2">Code</th>
                <th className="border border-[#5a5a5a] p-2">Objective</th>
                <th className="border border-[#5a5a5a] p-2">Target</th>
                <th className="border border-[#5a5a5a] p-2">Progress</th>
                <th className="border border-[#5a5a5a] p-2">Compliance</th>
                <th className="border border-[#5a5a5a] p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {strategicObjectives.map((objective) => {
                const status = getStatus(objective.compliance);
                return (
                  <tr key={objective.id} className="border-t border-[#5a5a5a]">
                    <td className="border border-[#5a5a5a] p-2">{objective.id}</td>
                    <td className="border border-[#5a5a5a] p-2">{objective.goal}</td>
                    <td className="border border-[#5a5a5a] p-2">{objective.target}</td>
                    <td className="border border-[#5a5a5a] p-2">{objective.progress}</td>
                    <td className="border border-[#5a5a5a] p-2">{objective.compliance}%</td>
                    <td className={`border border-[#5a5a5a] p-2 ${status.color}`}>{status.text}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Mobile view for smaller screens */}
        <div className="block md:hidden">
          {strategicObjectives.map((objective) => (
            <div key={objective.id} className="border border-[#5a5a5a] p-4 mb-4 text-white">
              <h2 className="text-lg font-bold">Objective {objective.id}</h2>
              <p><strong>Goal:</strong> {objective.goal}</p>
              <p><strong>Target:</strong> {objective.target}</p>
              <p><strong>Progress:</strong> {objective.progress}</p>
              <p><strong>Compliance:</strong> {objective.compliance}%</p>
              <p className={`${getStatus(objective.compliance).color}`}><strong>Status:</strong> {getStatus(objective.compliance).text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StrategicObjectivesSection;