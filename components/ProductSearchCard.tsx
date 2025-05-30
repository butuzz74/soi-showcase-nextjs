import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  image: string;
  model: string;
  id: string;
  collection: string;
  onClick: () => void
};

function ProductSearchCard({ image, model, id, collection, onClick }: ProductCardProps) {
  return (
    <Link href={`/${collection}/${id}`} passHref onClick={onClick}>
      <div className="flex flex-col items-center rounded-xl border border-gray-200 p-4 shadow-sm transition-shadow hover:shadow-md">
        <Image
          src={image}
          alt={model}
          width={200}
          height={200}
          className="mb-2 h-32 w-full object-contain"
        />
        <span className="text-center text-sm font-medium text-gray-800">
          {model}
        </span>
      </div>
    </Link>
  );
}

export default ProductSearchCard;
