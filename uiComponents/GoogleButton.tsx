'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
function GoogleButton() {
  const router = useRouter();

  return (
    <div
      onClick={async () => {
        const res = await signIn('google', { redirect: false });
        if (res?.ok) {
          router.push("/");
        } else {
          console.error('Login failed!', res?.error);
        }
      }}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:cursor-pointer hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Sign in with GOOGLE
    </div>
  );
}

export default GoogleButton;
