import Image from 'next/image';
import Link from 'next/link';

const ProductCardForMainPage = ({
  image,
  title,
  linkForTransition,
}: {
  image: string;
  title: string;
  linkForTransition: string;
}) => {
  return (
    <div className="flex w-80 flex-col items-center rounded-lg bg-gray-800 p-6 shadow-md">
      <div className="mb-4 flex h-40 w-full items-center justify-center bg-white">
        <Image src={image} alt={title} width={200} height={150} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <Link
        href={linkForTransition}
        className="mt-4 rounded-md bg-blue-700 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600"
      >
        Посмотреть →
      </Link>
    </div>
  );
};

export default ProductCardForMainPage;
