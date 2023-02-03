import { useState, useEffect, useContext } from "react";
import { PoemContext } from "@/contexts/poemContext";
import { Playfair_Display } from "@next/font/google";

import { getAccordionCategories, getAccordionPoems } from "@/lib/sanity.client";

import Accordion from "./accordion";
const playfairDisplay = Playfair_Display({
    subsets: ["cyrillic"],
});
export default function AccordionLayout({ children }) {
    const [accordionItems, setAccordionItems] = useState([]);
    const { isPoemOpen } = useContext(PoemContext);

    useEffect(() => {
        const fetchAccordionData = async function () {
            try {
                const [categories, poems] = await Promise.all([
                    getAccordionCategories(),
                    getAccordionPoems(),
                ]);
                setAccordionItems(
                    categories.map((category) => {
                        const categorizedPoems = poems.filter(
                            (poem) =>
                                poem.categorySlug.current ===
                                category.slug.current
                        );
                        return {
                            category,
                            poems: categorizedPoems,
                        };
                    })
                );
            } catch (err) {
                console.error(err);
            }
        };
        fetchAccordionData();
    }, []);
    return (
        <div className="mx-auto px-8 py-10 sm:px-12 md:max-w-2xl lg:max-w-3xl lg:py-16 xl:max-w-5xl xl:py-20">
            <h1
                className={`${playfairDisplay.className} mb-20 text-left text-4xl font-normal text-black lg:mb-28 lg:text-5xl xl:text-7xl`}
            >
                Произведения
            </h1>
            <div className="flex flex-col-reverse gap-20 md:flex-row">
                <Accordion
                    isPoemOpen={isPoemOpen}
                    accordionItems={accordionItems}
                />
                {children}
            </div>
        </div>
    );
}
