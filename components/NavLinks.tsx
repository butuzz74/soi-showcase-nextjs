'use client';
import DropDownListForNavLinks from '../uiComponents/DropDownListForNavLinks';
import LinkForNavLinks from '../uiComponents/LinkForNavLinks';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import config from '../config/config.json';
import { NavLinksProp } from '../type/types';
import configLinks from '../config/configLink.json';

function NavLinks() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const handleMouseEnter = (section: string) => {
    setActiveSection(section);
  };
  const handleMouseLeave = () => {
    setActiveSection(null);
  };
  return (
    <div className="relative grid grid-cols-[1fr_auto] gap-5">
      <nav className="flex w-full justify-around text-blue-400">
        <ul className="flex space-x-6">
          {Object.keys(config.nav as NavLinksProp).map((key) => (
            <li
              key={key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <LinkForNavLinks>{key}</LinkForNavLinks>
              {activeSection === key && (
                <div className="absolute top-full left-0 mt-1 w-48">
                  <DropDownListForNavLinks
                    items={(config.nav as NavLinksProp)[key]}
                    hrefs={(configLinks as NavLinksProp)[key]}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full">
        <FaSearch
          onClick={() => setActiveSearch(true)}
          className="cursor-pointer text-gray-500 hover:text-gray-700"
        />{' '}
        {activeSearch ? (
          <div className="bg-grey-500 absolute top-9 left-0 w-full shadow-lg">
            <input
              type="text"
              placeholder="Поиск..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => setActiveSearch(false)}
              className="w-full rounded border border-gray-400 p-2 text-gray-800 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NavLinks;
