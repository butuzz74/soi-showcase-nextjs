'use client';
import { useState, useRef, useEffect } from 'react';
import HomeLink from '../uiComponents/HomeLink';
import { FcVideoProjector } from 'react-icons/fc';
import { RiAdminLine } from 'react-icons/ri';
import { FaSearch, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import LinkForNavBarMainPage from '../uiComponents/LinkForNavBarMainPage';
import Catalog from './Catalog';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import SearchSection from './SearchSection';

function NavBarMainPage() {
  const [activeSection, setActiveSection] = useState<boolean>(false);
  const [searchSection, setSearchSection] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const session = useSession();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSection(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSection(false);
    }, 300);
  };

  const handleSearchCancel = () => {
    setSearchSection(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSearchSection(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mt-4 grid w-full grid-cols-[auto_1fr_auto] justify-between">
      <HomeLink linkHome={'/'} title={'projectors.by'}>
        <FcVideoProjector className="text-2xl" />
      </HomeLink>
      <div className="flex justify-around">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <LinkForNavBarMainPage>{'Каталог'}</LinkForNavBarMainPage>
          {activeSection ? (
            <div className="absolute top-10 left-0 w-full">
              <Catalog />
            </div>
          ) : null}
        </div>
        <LinkForNavBarMainPage>{'Заказать'}</LinkForNavBarMainPage>
        <LinkForNavBarMainPage>
          {'Обзоры и помощь в покупке'}
        </LinkForNavBarMainPage>
        <LinkForNavBarMainPage>
          {'Тендеры, оптовые поставки'}
        </LinkForNavBarMainPage>
      </div>
      <div className="flex items-center justify-between text-xl text-white">
        <div ref={wrapperRef}>
          <FaSearch
            className="mr-4 hover:cursor-pointer"
            onClick={() => setSearchSection(true)}
          />
          {searchSection ? (
            <div className="absolute top-10 left-0 w-full">
              <div
                onClick={() => setSearchSection(false)}
                className="absolute top-1 right-3 cursor-pointer text-black text-3xl"
              >
                &times;
              </div>
              <SearchSection searchCancel={handleSearchCancel}/>
            </div>
          ) : null}
        </div>
        {session?.data ? (
          <div
            onClick={() => signOut({ redirectTo: '/' })}
            className="mr-4 hover:cursor-pointer"
          >
            <FaSignOutAlt />
          </div>
        ) : (
          <Link href={'/admin'}>
            <RiAdminLine className="mr-4 hover:cursor-pointer" />
          </Link>
        )}
        <FaChartBar className="mr-4" />
      </div>
    </div>
  );
}

export default NavBarMainPage;
