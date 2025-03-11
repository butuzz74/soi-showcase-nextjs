import Link from 'next/link';

function DropDownListForNavLinks({
  items,
  hrefs,
}: {
  items: string[];
  hrefs: string[];
}) {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={hrefs[index]}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownListForNavLinks;
