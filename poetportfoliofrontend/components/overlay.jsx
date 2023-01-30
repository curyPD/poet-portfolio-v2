import { motion } from "framer-motion";

export default function Overlay({ children, onClick }) {
    const overlayVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
        exit: {
            opacity: 0,
        },
    };

    return (
        <motion.div
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClick}
            className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/40 lg:hidden"
        >
            {children}
        </motion.div>
    );
}
