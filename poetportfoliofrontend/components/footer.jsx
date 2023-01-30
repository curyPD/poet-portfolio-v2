export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="absolute bottom-0 left-0 w-full py-3">
            <p className="text-center font-sans text-[10px] text-black lg:text-xs">
                Copyright &copy; {year} Станислав Дружинин
            </p>
        </footer>
    );
}
