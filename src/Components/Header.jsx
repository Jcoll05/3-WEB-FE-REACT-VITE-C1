const Header = () => {
  return (
    <header className="grid grid-rows-[auto] grid-cols-2 border-2 border-black p-4 bg-[#101010] flex justify-between items-center" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif', fontSize: '28px' }}>
        <div> <img src="img/Logo.png" alt="Header Image" className="w-auto h-32"/> </div>
        <nav className="flex flex-col md:flex-row md:space-x-4 h-full">
          <a href="#current-diagnosis" className="flex items-center justify-center w-[200px] h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
             Diagnosis
          </a>
          <a href="#organizational-identity" className="flex items-center justify-center w-[200px] h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
             Identity
          </a>
          <a href="#strategic-objectives" className="flex items-center justify-center w-[200px] h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
             Objetives
          </a>
        </nav>
    </header>
  );
};

export default Header;