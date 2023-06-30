import { Disclosure } from "@headlessui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Search",
    href: "#",
    type: "button",
  }
];
export default function Navbar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cloud.google.com/ai/gen-app-builder/client";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleButtonClick = () => {
    const searchWidgetTrigger = document.getElementById("searchWidgetTrigger");
    if (searchWidgetTrigger) {
      searchWidgetTrigger.click();
    }
  };

  return (
    <>
      <Helmet>
        <script src="https://cloud.google.com/ai/gen-app-builder/client" />
      </Helmet>
      <input placeholder="Search here" style={{ display: "none" }} />
      <gen-search-widget
        configId="304cd245-82e2-45e6-8253-6b386d1a0954"
        triggerId="searchWidgetTrigger"
      />
      <nav id="searchWidgetTrigger" className="md:px-8 md:py-0 px-4 header">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex h-24 flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <img src="/deloitte.svg" alt="logo"   width={200}
                    height={50} className="md:flex hidden" />
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {menu.map((item, index) => (
                    <Link
                      to={item.href}
                      key={index}
                      onClick={
                        item.type
                          ? handleButtonClick
                          : () => console.log("clicked")
                      }
                      className="px-5 py-2 text-base font-medium text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex h-24 items-center justify-between w-full md:w-auto">
                  <img
                    src="/deloitte.svg"
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
