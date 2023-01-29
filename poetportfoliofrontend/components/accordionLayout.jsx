import { useState, useEffect } from "react";

import { getAccordionCategories, getAccordionPoems } from "@/lib/sanity.client";

import Accordion from "./accordion";

export default function AccordionLayout({ children }) {
    const [accordionItems, setAccordionItems] = useState([]);

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
        <>
            <Accordion accordionItems={accordionItems} />
            {children}
        </>
    );
}
