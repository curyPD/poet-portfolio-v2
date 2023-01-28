export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} Станислав Дружинин</p>
        </footer>
    );
}
