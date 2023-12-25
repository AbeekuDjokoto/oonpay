import React from "react";

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  return (
    <header>
      <nav
        className="mx-auto flex max-w-xl items-center justify-between"
        aria-label="Global"
      >
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            aria-expanded="false"
          >
            <svg
              width="42"
              height="24"
              viewBox="0 0 42 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="4" rx="2" fill="#EF582B" />
              <rect y="20" width="42" height="4" rx="2" fill="#EF582B" />
            </svg>
          </button>
          {open ? (
            <div className="absolute -right-0 top-full z-10 mt-8 w-screen max-w-[240px] overflow-hidden rounded-xl bg-[#0B4069]">
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-[#EF582B]">
                  <div className="flex-auto">
                    <p className="block text-white text-base leading-[21.982px] sm:flex gap-6">
                      About
                      <span className="absolute inset-0"></span>
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-[#EF582B]">
                  <div className="flex-auto">
                    <p className="block text-white text-base leading-[21.982px] sm:flex gap-6">
                      Services
                      <span className="absolute inset-0"></span>
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-[#EF582B]">
                  <div className="flex-auto">
                    <p className="block text-white text-base leading-[21.982px] sm:flex gap-6">
                      Help Center
                      <span className="absolute inset-0"></span>
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-[#EF582B]">
                  <div className="flex-auto">
                    <p className="block text-white text-base leading-[21.982px] sm:flex gap-6">
                      Contact
                      <span className="absolute inset-0"></span>
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-[#EF582B]">
                  <div className="flex-auto">
                    <p className="block text-white text-base leading-[21.982px] sm:flex gap-6">
                      Login
                      <span className="absolute inset-0"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
