'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PowerIcon } from '@heroicons/react/24/outline';
import { HomeIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { AuroraText } from "@/components/magicui/aurora-text";

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Invoices', href: '/invoices', icon: DocumentTextIcon },
  { name: 'Customers', href: '/customers', icon: UsersIcon },
];

export default function SideNav() {
  const pathname = usePathname();
  
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-#42bff5-600 p-4 md:h-40"
        href="/"
        title="Home"
        aria-label="Home"
      >
        <div className="w-32 text-white md:w-40">
          {<AuroraText className="text-3xl font-bold text-white hover:text-blue-200 transition-colors">
              Acme.
            </AuroraText>}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="flex flex-col space-y-2">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                  }
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </div>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}