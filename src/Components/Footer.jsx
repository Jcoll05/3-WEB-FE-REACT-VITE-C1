const Footer = () => {
    return (
      <footer className="flex justify-center grid grid-rows-1 border-2 border-black p-4 bg-[#101010] items-center">
        <div> <img src="img/Logo.png" alt="Header Image" className="flex justify-center w-auto h-32"/> </div>
        <p className="text-center text-[#9d9d9d]" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif', fontSize: '10px' }}> &copy; 2024 By Julian Coll ... All right reserved</p>
      </footer>
    );
  };
  
  export default Footer;