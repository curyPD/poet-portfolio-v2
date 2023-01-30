import { useState } from "react";

import NavLink from "./navLink";
import MobileNav from "./mobileNav";

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header>
            <div className="mx-auto flex h-20 items-center justify-end px-8 sm:px-12 lg:h-16 lg:max-w-screen-md lg:justify-start lg:px-12 xl:max-w-screen-lg">
                {mobileNavOpen && (
                    <MobileNav closeNav={() => setMobileNavOpen(false)} />
                )}
                <button
                    className="group relative z-30 h-6 w-6 focus:outline-none lg:hidden lg:h-7 lg:w-7"
                    onClick={() => setMobileNavOpen((prevState) => !prevState)}
                >
                    <span
                        className={`absolute top-1/2 left-0 h-[3px] w-full origin-center transition-transform ${
                            mobileNavOpen
                                ? "-translate-y-1/2 rotate-45"
                                : "translate-y-1/2"
                        } scale-y-50 bg-black group-focus-visible:bg-neutral-500`}
                    >
                        &nbsp;
                    </span>
                    <span
                        className={`absolute bottom-1/2 left-0 h-[3px] w-full origin-center transition-transform ${
                            mobileNavOpen
                                ? "translate-y-1/2 -rotate-45"
                                : "-translate-y-1/2"
                        } scale-y-50 bg-black group-focus-visible:bg-neutral-500`}
                    >
                        &nbsp;
                    </span>
                </button>
                <nav className="hidden space-x-5 lg:flex">
                    <NavLink
                        exact={true}
                        activeClassName="text-black font-sans text-sm font-medium focus:outline-none focus-visible:text-neutral-500"
                        className="font-sans text-sm text-black focus:outline-none focus-visible:text-neutral-500"
                        href="/"
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        exact={true}
                        activeClassName="text-black font-sans text-sm font-medium focus:outline-none focus-visible:text-neutral-500"
                        className="font-sans text-sm text-black focus:outline-none focus-visible:text-neutral-500"
                        href="/certificates"
                    >
                        Дипломы
                    </NavLink>
                    <NavLink
                        exact={true}
                        activeClassName="text-black font-sans text-sm font-medium focus:outline-none focus-visible:text-neutral-500"
                        className="font-sans text-sm text-black focus:outline-none focus-visible:text-neutral-500"
                        href="/poems"
                    >
                        Произведения
                    </NavLink>
                    <a
                        className="font-sans text-sm text-black focus:outline-none focus-visible:text-neutral-500"
                        href="mailto:stas1365iv@gmail.com"
                    >
                        Написать
                    </a>
                </nav>
            </div>
        </header>
    );
}
