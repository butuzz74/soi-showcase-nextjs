'use client';
import { useRouter } from 'next/navigation';
import { ButtonProps } from '@/type/types';

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
      customAction();
    }
  };

  return (
    <button
      onClick={handleClick}
      // prettier-ignore
      className={`rounded bg-gray-800 px-4 py-2
                 text-white hover:bg-gray-600 focus:outline-none
                 focus:ring-2 focus:ring-blue-300`}
    >
      {text}
    </button>
  );
};

export default NavigationButton;
