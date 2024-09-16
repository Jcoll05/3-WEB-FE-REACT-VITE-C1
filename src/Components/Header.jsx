import Logo from "/src/img/Logo.png";

const Header = () => {
    return (
      <header className="border-black p-4 bg-[#101010] flex flex-col md:flex-row justify-between items-center"style={{ fontSize: '28px' }}>
        <div className="mb-4 md:mb-0"> 
          <img src={Logo} alt="Header Image" className="w-auto h-32"/> 
        </div>
        <nav className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto">
          <a href="#current-diagnosis" className="flex items-center justify-center w-full md:w-[200px] h-12 md:h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
            Diagnosis
          </a>
          <a href="#organizational-identity" className="flex items-center justify-center w-full md:w-[200px] h-12 md:h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
            Identity
          </a>
          <a href="#strategic-objectives" className="flex items-center justify-center w-full md:w-[200px] h-12 md:h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
            Objectives
          </a>
        </nav>
      </header>
    );
  };

export default Header;