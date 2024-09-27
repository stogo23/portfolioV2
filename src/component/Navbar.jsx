// import logo from "../assets/logo.png";
// import { Linkedin, Github } from 'lucide-react';


// const Navbar = () => {
//   return (
//     <nav className="p-4 shadow-md  mb-20 flex items-center justify-between py-6">
//       <div className="flex w-[250px] rounded-full h-10  overflow-hidden flex-shrink-0 items-center">
//         <img src={logo} className="w-full h-full object-cover" alt="logo" />
//       </div>

//       <div className="m8 flex items-center justify-center gap-4">
//         <Linkedin color='white'/>
//         <Github  color='white'/>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import logo from "../assets/logo.png";
import { Linkedin, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex w-[250px] rounded-full h-10 overflow-hidden flex-shrink-0 items-center">
        <img src={logo} className="w-full h-full object-cover" alt="logo" />
      </div>

      {/* Icônes LinkedIn et GitHub avec liens */}
      <div className="m8 flex items-center justify-center gap-4">
        {/* Lien vers LinkedIn */}
        <a href="https://www.linkedin.com/in/nouroudine-abdou-0663ab2b7/" target="_blank" rel="noopener noreferrer">
          <Linkedin color='white' />
        </a>
        {/* Lien vers GitHub */}
        <a href="https://github.com/stogo23" target="_blank" rel="noopener noreferrer">
          <Github color='white' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
