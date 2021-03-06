import React from "react";
import Link from "next/link";

import { LogoIcon } from "svgr";
// import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="flex items-center justify-between h-16 cursor-pointer">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <LogoIcon height={50} />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="text-yellow-400 font-bold text-lg">Pokedex</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
