// Import the component
import WeaknessesSection from './WeaknessesSection';
import OpportunitiesSection from './OpportunitiesSection';
import StrengthsSection from './StrengthSection';
import ThreatsSection from './ThreatsSections';
import StrategicObjectivesSection from './StrategicObjectivesSection';

const Main1 = () => {
  return (
    <main1 className="grid grid-rows-[auto] border border-[#5a5a5a] text-white bg-[#101010]" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif'}}>
      <section className="border-2 border-[#5a5a5a] p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Strategic Planning for Lethal</h1>
        <p className="text-base text-white-700">
          Welcome to the strategic planning presentation for <strong>Lethal</strong>, a fictional company specializing in gaming accessories. This landing page provides an overview of how Lethal has positioned itself to address market challenges and capitalize on growth opportunities.
          <br /><br />
          Through interactive and visually appealing sections, we present:
          <ul className="list-disc list-inside ml-5 mt-2">
            <li><strong>Current Diagnosis:</strong> A detailed SWOT analysis identifying Lethal’s weaknesses, opportunities, strengths, and threats.</li>
            <li><strong>Organizational Identity:</strong> An overview of Lethal’s mission, vision, and corporate policies guiding its operations.</li>
            <li><strong>Strategic Objectives:</strong> A dynamic table displaying key objectives, progress, and status, providing a clear view of short-term and long-term goals.</li>
          </ul>
          <br />
          The page is developed using React.js and Vite, with Tailwind CSS to ensure a smooth and modern user experience. This presentation not only illustrates Lethal’s strategy but also highlights the company’s commitment to innovation and growth in the competitive gaming accessories market.
        </p>
      </section>
      <section id="current-diagnosis" className="grid grid-rows-[auto] grid-cols-2 gap-2 border border-[#5a5a5a] p-4">
        <h1 className="col-span-2 text-xl font-bold" style={{ fontSize: '34px' }}>1. Current Diagnosis</h1>
        <div className="col-span-1 border border-[#5a5a5a] p-4">
          <WeaknessesSection />
        </div>
        <div className="col-span-1 border border-[#5a5a5a] p-4">
          <OpportunitiesSection />
        </div>
        <div className="col-span-1 border border-[#5a5a5a] p-4">
          <StrengthsSection />
        </div>
        <div className="col-span-1 border border-[#5a5a5a] p-4">
          <ThreatsSection />
        </div>
      </section>
      <section className="grid grid-rows-[auto] border border-[#5a5a5a] p-4">
        <div className="border border-[#5a5a5a] p-4">
          <h1 id="organizational-identity" className="text-xl font-bold mb-4"style={{ fontSize: '34px' }}>2. Organizational Identity</h1>
          <div className="space-y-4">
            {/* Mission */}
            <div>
              <h1 className="text-2xl font-bold">Mission</h1>
              <p className="mt-2">
                Lethal's mission is to provide high-quality, innovative gaming accessories that enhance the gaming experience for players worldwide. We aim to be at the forefront of technology, delivering products that not only meet but exceed the expectations of our customers.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h1 className="text-2xl font-bold">Vision</h1>
              <p className="mt-2">
                Our vision is to become the go-to brand for gaming accessories, recognized for our commitment to quality, innovation, and customer satisfaction. We aspire to lead the industry in setting trends and shaping the future of gaming.
              </p>
            </div>

            {/* Corporate Policies */}
            <div>
              <h1 className="text-2xl font-bold">Corporate Policies</h1>
              <p className="mt-2">
                We adhere to strict corporate policies that ensure ethical business practices, social responsibility, and environmental sustainability. Our policies are designed to foster a culture of integrity, respect, and excellence, both within our company and in our interactions with the wider community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="strategic-objectives" className="text-xl font-bold grid grid-rows-[auto] border border-[#5a5a5a] p-4">
        <StrategicObjectivesSection />
      </section>
    </main1>
  );
};

export default Main1;