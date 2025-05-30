'use client';
import { useRouter } from 'next/navigation';
import { ButtonProps } from '../type/types';

const NavigationButton = ({
  text,
  redirect,
  back,
  customAction,
}: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (redirect) {
      router.push(redirect);
    } else if (back) {
      router.back();
    } else if (customAction) {
      router.push(`${customAction}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      // prettier-ignore
      className={`rounded bg-gray-800 px-4 py-2 hover:cursor-pointer
                 text-white hover:bg-gray-600 focus:outline-none
                 focus:ring-2 focus:ring-blue-300 my-2 mx-2 max-w-sm`}
    >
      {text}
    </button>
  );
};

export default NavigationButton;
