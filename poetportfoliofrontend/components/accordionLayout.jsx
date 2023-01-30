import { useState, useEffect, useContext } from "react";
import { PoemContext } from "@/contexts/poemContext";

import { getAccordionCategories, getAccordionPoems } from "@/lib/sanity.client";

import Accordion from "./accordion";

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
    console.log(accordionItems);
    return (
        <div className="px-8 py-10">
            <h1 className="mb-20 font-serif text-4xl text-black">
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
