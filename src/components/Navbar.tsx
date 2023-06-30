import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/",
  },
  {
    label: "How to Join",
    href: "/",
  },
];
export default function Navbar() {
  return (
    <>
      <nav className="md:px-8 md:py-0 px-4 header">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex h-24 flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <img src="/logo.webp" alt="logo" className="md:flex hidden" />
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {menu.map((item, index) => (
                    <Link
                      to={item.href}
                      key={index}
                      className="px-5 py-2 text-base font-medium text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex h-24 items-center justify-between w-full md:w-auto">
                  <img
                    src="/logo.webp"
                    alt="logo"
                    className="md:hidden"
                    width={100}
                    height={50}
                  />
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto  rounded-md md:hidden text-white focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                  {menu.map((item, index) => (
                    <Link
                      to={item.href}
                      key={index}
                      className="px-5 my-2 py-2 text-sm font-medium text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
}
