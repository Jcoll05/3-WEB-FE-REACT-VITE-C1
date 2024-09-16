import Logo from "/src/img/Logo.png";

const Footer = () => {
    return (
      <footer className="flex flex-col md:flex-row justify-center grid grid-rows-[auto] border border-[#5a5a5a] p-4 bg-[#101010] items-center">
        <div> <img src={Logo} alt="Header Image" className="flex justify-center w-auto h-32"/> </div>
        <p className="text-center text-[#9d9d9d]" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif', fontSize: '10px' }}> &copy; 2024 By Julian Coll ... All right reserved</p>
      </footer>
    );
  };
  
  export default Footer;