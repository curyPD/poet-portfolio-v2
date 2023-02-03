import NavLink from "./navLink";
import Overlay from "./overlay";

import { motion } from "framer-motion";

export default function MobileNav({ closeNav }) {
    const navVariants = {
        initial: {
            opacity: 0,
            scale: 0.2,
        },
        animate: {
            opacity: 1,
            scale: 1,

            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.15,
                staggerChildren: 0.05,
                delay: -0.2,
            },
        },
        exit: {
            opacity: 0,
        },
    };

    const linkVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 24,
            },
        },
        exit: {
            opacity: 0,
        },
    };

    return (
        <Overlay onClick={closeNav}>
            <motion.div
                variants={navVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-0 right-0 w-48 origin-top-right bg-white p-8 pt-24 sm:p-12 sm:pt-24 lg:w-56 xl:hidden"
            >
                <nav className="flex flex-col items-end gap-5 lg:gap-6">
                    <motion.div variants={linkVariants}>
                        <NavLink
                            onClick={closeNav}
                            exact={true}
                            href="/"
                            activeClassName="text-sm font-sans text-black lg:text-base font-semibold focus:outline-none focus-visible:text-neutral-500"
                            className="font-sans text-sm font-normal text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                        >
                            Главная
                        </NavLink>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <NavLink
                            onClick={closeNav}
                            exact={true}
                            className="font-sans text-sm font-normal text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                            activeClassName="text-sm font-sans text-black lg:text-base font-semibold focus:outline-none focus-visible:text-neutral-500"
                            href="/certificates"
                        >
                            Дипломы
                        </NavLink>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <NavLink
                            onClick={closeNav}
                            exact={true}
                            className="font-sans text-sm font-normal text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                            activeClassName="text-sm font-sans text-black lg:text-base font-semibold focus:outline-none focus-visible:text-neutral-500"
                            href="/poems"
                        >
                            Произведения
                        </NavLink>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <a
                            className="font-sans text-sm font-normal text-black focus:outline-none focus-visible:text-neutral-500 lg:text-base"
                            href="mailto:stas1365iv@gmail.com"
                        >
                            Написать
                        </a>
                    </motion.div>
                </nav>
            </motion.div>
        </Overlay>
    );
}
