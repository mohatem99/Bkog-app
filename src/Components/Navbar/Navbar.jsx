import { Disclosure, DisclosureButton } from "@headlessui/react";
import {
  Bars3Icon,
  DocumentPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [{ name: "Home", href: "", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="data:image/png;base64,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"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames("text-gray-300")}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 p-5">
            <NavLink to="add-blog">
              {" "}
              <DocumentPlusIcon class="h-9 w-9  text-cyan-800 hover:bg-cyan-800 hover:text-white rounded-full" />
            </NavLink>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
