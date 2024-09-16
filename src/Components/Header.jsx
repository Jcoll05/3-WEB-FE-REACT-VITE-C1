const Header = () => {
  return (
    <header className="grid grid-rows-1 grid-cols-2 border-2 border-black p-4 bg-[#101010] flex justify-between items-center" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif', fontSize: '28px' }}>
        <div> <img src="img/Logo.png" alt="Header Image" className="w-auto h-32"/> </div>
        <nav className="flex flex-col md:flex-row md:space-x-4 h-full">
          <a href="#diagnostico" className="flex items-center justify-center w-[200px] h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
             Diagnostico
          </a>
          <a href="#identidad" className="flex items-center justify-center w-[200px] h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
             Identidad
          </a>
          <a href="#objetivos" className="flex items-center justify-center w-[200px] h-[115px] text-white font-bold rounded-md hover:bg-[#a90000]">
             Objetivos
          </a>
        </nav>
    </header>
  );
};

export default Header;