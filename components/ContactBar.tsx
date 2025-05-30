'use client';
import PhoneNumber from '../uiComponents/PhoneNumber';
import {
  FaSquarePhone,
  FaDroplet,
  FaTelegram,
  FaViber,
  FaInstagram,
} from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import IconForSocial from '../uiComponents/IconForSocial';
import { useState } from 'react';

function ContactBar() {
  const [visiblePhone, setVisiblePhone] = useState<boolean>(false);
  const handleChangeVisiblePhone = () => {
    setVisiblePhone((prevState) => !prevState);
  };
  return (
    <div className="mt-4 flex w-full items-center justify-between">
      <PhoneNumber action={handleChangeVisiblePhone}>
        {visiblePhone ? (
          <span>A1 +375 29 345-8-543</span>
        ) : (
          <span>A1 +375 Показать номер</span>
        )}
      </PhoneNumber>
      <PhoneNumber action={handleChangeVisiblePhone}>
        <FaSquarePhone />
        {visiblePhone ? (
          <span>+375 17 276-60-20</span>
        ) : (
          <span>+375 Показать номер</span>
        )}
      </PhoneNumber>
      <PhoneNumber action={handleChangeVisiblePhone}>
        <FaDroplet />
        {visiblePhone ? (
          <span>+375 33 379-0-973</span>
        ) : (
          <span>+375 Показать номер</span>
        )}
      </PhoneNumber>
      <IconForSocial href="#">
        <FaViber />
        <span>Viber</span>
      </IconForSocial>
      <IconForSocial href="#">
        <FaTelegram />
        <span>Telegram</span>
      </IconForSocial>
      <IconForSocial href="#">
        <FaInstagram />
        <span>Instagram</span>
      </IconForSocial>
      <IconForSocial href="#">
        <span>
          <MdOutlineEmail />
        </span>
        <span>info@projectors.by</span>
      </IconForSocial>
    </div>
  );
}

export default ContactBar;
