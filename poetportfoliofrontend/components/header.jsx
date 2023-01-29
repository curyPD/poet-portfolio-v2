import NavLink from "./navLink";

export default function Header() {
    return (
        <header>
            <nav className="space-x-2">
                <NavLink href="/">Главная</NavLink>
                <NavLink href="/certificates">Дипломы</NavLink>
                <NavLink href="/poems">Произведения</NavLink>
                <a href="mailto:stas1365iv@gmail.com">Написать</a>
            </nav>
        </header>
    );
}
