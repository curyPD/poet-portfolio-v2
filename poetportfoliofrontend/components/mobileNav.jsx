import NavLink from "./navLink";
import Overlay from "./overlay";

export default function MobileNav({ closeNav }) {
    return (
        <Overlay onClick={closeNav}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-0 right-0 w-48 origin-top-right bg-white p-8 pt-24 sm:p-12 sm:pt-24 lg:w-56 xl:hidden"
            >
                <nav className="flex flex-col items-end gap-5 lg:gap-6">
                    <NavLink
                        onClick={closeNav}
                        exact={true}
                        href="/"
                        activeClassName="text-sm text-black lg:text-base font-semibold focus:outline-none focus-visible:text-neutral-500"
                        className="text-sm text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        onClick={closeNav}
                        exact={true}
                        className="text-sm text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                        activeClassName="text-sm text-black lg:text-base font-semibold focus:outline-none focus-visible:text-neutral-500"
                        href="/certificates"
                    >
                        Дипломы
                    </NavLink>
                    <NavLink
                        onClick={closeNav}
                        exact={true}
                        className="text-sm text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                        activeClassName="text-sm text-black lg:text-base font-semibold focus:outline-none focus-visible:text-neutral-500"
                        href="/poems"
                    >
                        Произведения
                    </NavLink>
                    <a
                        className="text-sm text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                        href="mailto:stas1365iv@gmail.com"
                    >
                        Написать
                    </a>
                </nav>
            </div>
        </Overlay>
    );
}
