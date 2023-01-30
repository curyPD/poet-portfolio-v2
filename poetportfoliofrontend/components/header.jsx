import { useState } from "react";

import NavLink from "./navLink";
import MobileNav from "./mobileNav";

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header>
            <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-end px-8 sm:px-12 xl:h-16 xl:justify-start xl:px-20">
                {mobileNavOpen && (
                    <MobileNav closeNav={() => setMobileNavOpen(false)} />
                )}
                <button
                    className="relative z-30 h-6 w-6 lg:h-7 lg:w-7 xl:hidden"
                    onClick={() => setMobileNavOpen((prevState) => !prevState)}
                >
                    <span
                        className={`absolute top-1/2 left-0 h-[3px] w-full origin-center transition-transform ${
                            mobileNavOpen
                                ? "-translate-y-1/2 rotate-45"
                                : "translate-y-1/2"
                        } scale-y-50 bg-black`}
                    >
                        &nbsp;
                    </span>
                    <span
                        className={`absolute bottom-1/2 left-0 h-[3px] w-full origin-center transition-transform ${
                            mobileNavOpen
                                ? "translate-y-1/2 -rotate-45"
                                : "-translate-y-1/2"
                        } scale-y-50 bg-black`}
                    >
                        &nbsp;
                    </span>
                </button>
                <nav className="hidden space-x-4 xl:flex">
                    <NavLink
                        exact={true}
                        activeClassName="text-black font-sans text-sm font-medium"
                        className="font-sans text-sm text-black"
                        href="/"
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        exact={true}
                        activeClassName="text-black font-sans text-sm font-medium"
                        className="font-sans text-sm text-black"
                        href="/certificates"
                    >
                        Дипломы
                    </NavLink>
                    <NavLink
                        exact={true}
                        activeClassName="text-black font-sans text-sm font-medium"
                        className="font-sans text-sm text-black"
                        href="/poems"
                    >
                        Произведения
                    </NavLink>
                    <a
                        className="font-sans text-sm text-black"
                        href="mailto:stas1365iv@gmail.com"
                    >
                        Написать
                    </a>
                </nav>
            </div>
        </header>
    );
}
