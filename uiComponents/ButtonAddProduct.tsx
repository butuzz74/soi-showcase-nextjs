'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function ButtonAddProduct({ children, path }: { children: React.ReactNode; path: string }) {
  const session = useSession();
  const router = useRouter();
  const customAction = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      {session?.data ? (
        <button
          onClick={() => customAction(path)}
          // prettier-ignore
          className={`items-center justify-center
             rounded-md bg-blue-600 px-4 py-2
              text-white hover:cursor-pointer w-auto`}
        >
          {children}
        </button>
      ) : null}
    </div>
  );
}

export default ButtonAddProduct;
