import { FaTelegram, FaFacebook, FaYoutube } from 'react-icons/fa6';
import IconForSocial from '@/uiComponents/IconForSocial';

function NavBarForSocial() {
  return (
    <div className="flex w-full items-center justify-around">
      <IconForSocial href="https://t.me/sheitelman">
        <FaTelegram />
      </IconForSocial>
      <IconForSocial href="https://facebook.com/sheitelman">
        <FaFacebook />
      </IconForSocial>
      <IconForSocial href="https://youtube.com/watch?v=D4gm0xA6t9c">
        <FaYoutube />
      </IconForSocial>
    </div>
  );
}

export default NavBarForSocial;