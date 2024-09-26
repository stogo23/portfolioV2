import logo from "../assets/logo.png";
import { Linkedin, Github } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="p-4 shadow-md  mb-20 flex items-center justify-between py-6">
      <div className="flex w-[250px] rounded-full h-10  overflow-hidden flex-shrink-0 items-center">
        <img src={logo} className="w-full h-full object-cover" alt="logo" />
      </div>

      <div className="m8 flex items-center justify-center gap-4">
        <Linkedin color='white'/>
        <Github  color='white'/>
      </div>
    </nav>
  );
};

export default Navbar;
