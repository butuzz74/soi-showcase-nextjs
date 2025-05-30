import Image from 'next/image';
import Link from 'next/link';

function CardForChoiceBrand({
  linkImage,
  title,
  linkForHref,
}: {
  linkImage: string;
  title: string;
  linkForHref: string;
}): React.ReactNode {
  return (
    <Link
      href={linkForHref}
      className="relative block h-[300px] w-[300px] overflow-hidden rounded-lg border-4 border-gray-300 opacity-70 shadow-lg transition-opacity duration-300 hover:opacity-100 hover:shadow-xl"
    >
      <Image
        src={linkImage}
        alt={title}
        width={300}
        height={300}
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex w-full items-center justify-center">
        <span className="rounded-md bg-black/80 px-4 py-2 text-center text-lg font-bold text-white">
          {title}
        </span>
      </div>
    </Link>
  );
}

export default CardForChoiceBrand;
