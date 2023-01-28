import Link from "next/link";

export default function Header() {
    return (
        <header className="space-x-2">
            <Link href="/">Главная</Link>
            <Link href="/certificates">Дипломы</Link>
            <Link href="/poems">Произведения</Link>
            <a href="mailto:stas1365iv@gmail.com">Написать</a>
        </header>
    );
}
