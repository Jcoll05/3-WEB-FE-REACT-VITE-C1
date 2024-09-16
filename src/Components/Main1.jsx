import WeaknessesSection from './WeaknessesSection';
import OpportunitiesSection from './OpportunitiesSection';
import StrengthsSection from './StrengthSection';
import ThreatsSection from './ThreatsSections';
import StrategicObjectivesSection from './StrategicObjectivesSection';

const Main1 = () => {
  return (
    <main className="grid gap-4 p-4 border border-[#5a5a5a] text-white bg-[#101010]" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
      {/* Intro Section */}
      <section className="border-2 border-[#5a5a5a] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">Strategic Planning for Lethal</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
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

      {/* Current Diagnosis Section */}
      <section id="current-diagnosis" className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#5a5a5a] p-4">
        <h1 className="col-span-1 md:col-span-2 text-xl sm:text-2xl md:text-3xl font-bold text-center" style={{ fontSize: '34px' }}>1. Current Diagnosis</h1>
        <div className="border border-[#5a5a5a] p-4">
          <WeaknessesSection />
        </div>
        <div className="border border-[#5a5a5a] p-4">
          <OpportunitiesSection />
        </div>
        <div className="border border-[#5a5a5a] p-4">
          <StrengthsSection />
        </div>
        <div className="border border-[#5a5a5a] p-4">
          <ThreatsSection />
        </div>
      </section>

      {/* Organizational Identity Section */}
      <section className="border border-[#5a5a5a] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <h1 id="organizational-identity" className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ fontSize: '34px' }}>2. Organizational Identity</h1>
        <div className="space-y-4">
          {/* Mission */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Mission</h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg">
              Lethal's mission is to provide high-quality, innovative gaming accessories that enhance the gaming experience for players worldwide. We aim to be at the forefront of technology, delivering products that not only meet but exceed the expectations of our customers.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Vision</h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg">
              Our vision is to become the go-to brand for gaming accessories, recognized for our commitment to quality, innovation, and customer satisfaction. We aspire to lead the industry in setting trends and shaping the future of gaming.
            </p>
          </div>

          {/* Corporate Policies */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Corporate Policies</h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg">
              We adhere to strict corporate policies that ensure ethical business practices, social responsibility, and environmental sustainability. Our policies are designed to foster a culture of integrity, respect, and excellence, both within our company and in our interactions with the wider community.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section id="strategic-objectives" className="border border-[#5a5a5a] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-x-auto">
        <StrategicObjectivesSection />
      </section>
    </main>
  );
};

export default Main1;