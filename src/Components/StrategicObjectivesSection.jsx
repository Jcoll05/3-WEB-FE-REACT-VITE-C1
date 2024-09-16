// Define the data for Strategic Objectives
const strategicObjectives = [
    { id: 1, goal: "Increase Market Share", target: "100%", progress: "25%", compliance: 25 },
    { id: 2, goal: "Launch New Product Line", target: "$150,000", progress: "$20,000", compliance: 13 },
    { id: 3, goal: "Improve Customer Satisfaction", target: "90%", progress: "50%", compliance: 55 },
    { id: 4, goal: "Expand Internationally", target: "5 countries", progress: "3 countries", compliance: 60 },
    { id: 5, goal: "Reduce Production Costs", target: "20%", progress: "18%", compliance: 90 }
  ];
  
  // Define a function to determine the status and corresponding color
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
      <div className="border border-[#5a5a5a] p-4">
        <h1 className="text-2xl font-bold mb-4">3. Strategic Objectives</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
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
                <tr key={objective.id}>
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
    );
  };
  
  export default StrategicObjectivesSection;