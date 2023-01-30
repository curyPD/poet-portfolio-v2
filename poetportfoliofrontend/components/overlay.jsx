export default function Overlay({ children, onClick }) {
    return (
        <div
            onClick={onClick}
            className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/40"
        >
            {children}
        </div>
    );
}
