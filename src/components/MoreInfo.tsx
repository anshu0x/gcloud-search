import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import OutlineTabs from "./OutlineTabs";
import { Link } from "react-router-dom";

function MoreInfo({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Maersk North America Market Update - May 2023 - Maersk
                  </Dialog.Title>
                  <Link
                    className="hover:cursor-pointer m-4 p-4 text-blue-400"
                    target="_blank"
                    to="https://news.google.com/rss/articles/CBMiT2h0dHBzOi8vd3d3Lm1hZXJzay5jb20vbmV3cy9hcnRpY2xlcy8yMDIzLzA1LzE5L25vcnRoLWFtZXJpY2EtbWFya2V0LXVwZGF0ZS1tYXnSAQA?oc=5&hl=en-SG&gl=SG&ceid=SG:en"
                  >
                    News Link
                  </Link>
                  <p
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer font-bold tracking-wider absolute right-6 top-2"
                  >
                    X
                  </p>
                  <div className="mt-2">
                    <OutlineTabs />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MoreInfo;
