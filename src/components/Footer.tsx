import { FaCopyright } from 'react-icons/fa6';
import NavBarForSocial from './NavBarForSocial';
function Footer() {
  return (
    <div className="grid grid-cols-[4fr_10fr_4fr]">
      <div className="flex w-full items-center justify-center">
        {' '}
        <FaCopyright /> <span className="ml-3">2025 ДАНИЛЬЧИК АЛЕКСЕЙ</span>
      </div>
      <div className="w-full"></div>
      <NavBarForSocial />
    </div>
  );
}

export default Footer;
