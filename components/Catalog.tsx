import { productForCatalog } from '../config/configForCatalog';
import SectionCatalog from './SectionCatalog';

function Catalog(): React.ReactNode {
  return (
    <div className="grid grid-cols-3 gap-8 bg-white p-6 shadow-lg w-full max-h-[500px] overflow-y-auto">
      {productForCatalog.map((elem, index) => (
        <SectionCatalog
          key={index}
          linkImage={elem.icon as string}
          altText={elem.title}
          data={elem.data ? elem.data : []}
          title={elem.title}
          linkBase={elem.link}
        />
      ))}
    </div>
  );
}

export default Catalog;
