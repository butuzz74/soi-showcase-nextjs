import NavLinks from '../components/NavLinks';
import { productConfigForMainPage } from '../config/configForMainPage';
import ProductCardForMainPage from '../components/ProductCardForMainPage';
export default function MainPage() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {productConfigForMainPage.map((elem, index) => (
        <ProductCardForMainPage
          key={index}
          title={elem.title}
          image={elem.image}
          linkForTransition={elem.linkForTransition}
        />
      ))}
    </div>
  );
}
