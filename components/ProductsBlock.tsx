import { ProductType } from '../type/types';
import ProductCard from './ProductCard';
function ProductsBlock({
  products,
  layout,
  currentProduct,
}: {
  products: ProductType[];
  layout: string;
  currentProduct: string;
}) {
  return (
    <div
      className={
        layout === 'grid'
          ? 'mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
          : 'mt-4 grid grid-cols-1 gap-6'
      }
    >
      {products.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          image={product.image}
          price={product.price}
          model={product.model}
          type={product.type}
          brand={product.brand}
          access={product.access}
          description={product.description}
          currentProduct={currentProduct}
        />
      ))}
    </div>
  );
}

export default ProductsBlock;
