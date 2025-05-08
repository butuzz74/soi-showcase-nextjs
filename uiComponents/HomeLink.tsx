import Link from 'next/link';

function HomeLink({
  children,
  title,
  linkHome,
}: {
  children: React.ReactNode;
  title: string;
  linkHome: string;
}): React.ReactNode {
  return (
    <div className="flex justify-start items-center text-white">
      <Link href={linkHome} className="flex justify-start">
        {children}
        <div className='ml-3'>{title}</div>
      </Link>
    </div>
  );
}

export default HomeLink;
