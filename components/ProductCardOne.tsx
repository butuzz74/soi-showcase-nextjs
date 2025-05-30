import { ProductCardType } from '../type/types';
import Image from 'next/image';

const ProductCardOne: React.FC<ProductCardType> = ({
  id,
  image,
  access,
  description,
  type,
  price,
  model,
  brand,
}) => {
  return (
    <div className="mx-auto flex h-full w-full flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-lg">
      <Image
        src={image}
        alt="model"
        width={300}
        height={300}
        className="mx-auto rounded-t-lg object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {brand} {model}
        </h2>
        <p className="text-sm text-gray-600">{type}</p>

        <div className="mt-2">
          <span className="text-xl font-bold text-gray-900">${price}</span>
        </div>

        <p className="mt-3 text-sm text-gray-700">{description}</p>

        <div className="mt-3">
          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold ${
              access ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
            }`}
          >
            {access ? 'Available' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardOne;
