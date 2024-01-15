import { Link, Outlet, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import clsx from 'clsx';
import { useState } from 'react';
import { FaTh, FaBars, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Route = new RootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  
  return (
    <div className="flex min-h-screen w-screen">
      <nav
        style={{ width: isOpen ? '240px' : '80px', transition: '0.5s ease' }}
        className={clsx(
          'relative m-2 flex  flex-col gap-[4px] rounded-xl border text-lg text-[#303651] shadow-lg'
        )}
        aria-label="Sidebar"
      >
        <button
          onClick={() => setIsOpen((value) => !value)}
          className="absolute right-[-14px] top-6 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white"
        >
          {isOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
        </button>
        <h2 className="mb-[16px] mt-[24px] h-[32px] pl-2">Looogooo</h2>
        <hr
          className={clsx(
            'm-0 mx-[26px] mb-[16px]',
            isOpen ? 'visible' : 'invisible'
          )}
        />
        <Link
          className="group flex h-[40px] w-full items-center gap-4 pl-[26px] text-[14px] font-semibold hover:bg-[#93c572]/20"
          to="/"
          activeProps={{
            className: 'text-[#93c572] border-r-2 border-[#93c572]',
          }}
          activeOptions={{ exact: true }}
        >
          <span>
            <FaTh size={20} />
          </span>
          <span
            style={{
              position: isOpen ? 'relative' : 'absolute',
              left: isOpen ? '0' : '90px',
            }}
            className={clsx(
              'group-hover:visible',
              isOpen ? 'visible ' : 'invisible rounded-md bg-[#93c572]/20 px-2'
            )}
          >
            Home
          </span>
        </Link>
        <Link
          className={clsx(
            'group relative flex h-[40px] w-full items-center gap-4 pl-[26px] text-[14px] font-semibold hover:bg-[#93c572]/20'
          )}
          to={'/about'}
          activeProps={{
            className: 'text-[#93c572] border-r-2 border-[#93c572]',
          }}
        >
          <span>
            <FaBars size={20} />
          </span>
          <span
            style={{
              position: isOpen ? 'relative' : 'absolute',
              left: isOpen ? '0' : '90px',
            }}
            className={clsx(
              'group-hover:visible',
              isOpen ? 'visible ' : 'invisible rounded-md bg-[#93c572]/20 px-2'
            )}
          >
            About
          </span>
        </Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
