import Image from 'next/image';
import Link from 'next/link';
import { LinkForCatalogType } from '../type/types';

function SectionCatalog({
  linkImage,
  altText,
  data,
  title,
  linkBase
}: {
  linkImage: string;
  altText: string;
  data: LinkForCatalogType[];
  title: string;
  linkBase: string  
}) {
    return (
    <div className="grid grid-cols-2">
      <Image src={linkImage} alt={altText} width={200} height={200}/>
      <div className="flex flex-col text-black ml-2">
        <Link href={linkBase} className='text-black font-extrabold size-16 mb-3 hover:text-amber-500'>{title}</Link>
        {data.map((elem, index) => (
          <Link key={index} href={elem.linkForTransition} className='hover:text-amber-500'>
            {elem.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SectionCatalog;
