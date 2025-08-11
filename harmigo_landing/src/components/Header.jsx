import {
  Disclosure,
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
  Menu, MenuButton, MenuItems, MenuItem, Transition
} from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

import Container from './Container'
import NavLink from './NavLink'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as="a" href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileProductsMenu() {
  return (
    <Disclosure as="div" className="w-full">
      {({ open }) => (
        <>
          <Disclosure.Button
            className="flex w-full items-center justify-between p-2 text-left"
          >
            <span>Products</span>
            <ChevronDownIcon
              className={clsx(
                "h-4 w-4 transition-transform",
                open && "rotate-180"
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pl-4">
            <a href="https://www.honeyflow.io" className="block w-full p-2">
              HoneyFlow
            </a>
            {/* <a href="#product2" className="block w-full p-2">
              Product 2
            </a> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileProductsMenu />
        {/* <MobileNavLink href="#">Resources</MobileNavLink> */}
        <MobileNavLink href="#about">Company</MobileNavLink>
        <MobileNavLink href="#contact">Contact</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

function ProductsMenu() {
  return (
    <Menu as="div" className="relative">
      {/* Matches NavLink styling exactly */}
      <MenuButton
        className="inline-flex items-center rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        Products
        <ChevronDownIcon className="ml-1 h-4 w-4" />
      </MenuButton>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-slate-900/5 focus:outline-none">
          <MenuItem>
            {({ active }) => (
              <a
                href="https://www.honeyflow.io"
                className={clsx(
                  "block px-4 py-2 text-sm rounded-lg",
                  active ? "bg-slate-100 text-slate-900" : "text-slate-700"
                )}
              >
                HoneyFlow
              </a>
            )}
          </MenuItem>
          {/* <MenuItem>
            {({ active }) => (
              <a
                href="#product2"
                className={clsx(
                  "block px-4 py-2 text-sm rounded-lg",
                  active ? "bg-slate-100 text-slate-900" : "text-slate-700"
                )}
              >
                Product 2
              </a>
            )}
          </MenuItem> */}
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export default function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50">
          <div className="flex justify-between items-center md:gap-x-12">
            <a href="#" aria-label="Home">
              <span className="text-3xl font-bold text-teal-600">Harmigo</span>
            </a>
            <div className="hidden md:flex md:gap-x-6">
              <ProductsMenu />
              {/* <NavLink href="#">Resources</NavLink> */}
              <NavLink href="#about">Company</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
