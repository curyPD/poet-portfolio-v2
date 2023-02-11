import { useState, useEffect, useContext } from "react";
import { PoemContext } from "@/contexts/poemContext";
import {
    getAccordionCategories,
    getAccordionPhilosophyPoems,
    getAccordionMotherlandPoems,
    getAccordionNaturePoems,
    getAccordionLovePoems,
    getAccordionMiscPoems,
} from "@/lib/sanity.client";

import Accordion from "./accordion";
import SkeletonLoader from "./skeletonLoader";

export default function AccordionLayout({ children }) {
    const [accordionItems, setAccordionItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isPoemOpen } = useContext(PoemContext);

    useEffect(() => {
        setIsLoading(true);
        const fetchAccordionData = async function () {
            try {
                const response = await Promise.all([
                    getAccordionCategories(),
                    getAccordionPhilosophyPoems(),
                    getAccordionMotherlandPoems(),
                    getAccordionNaturePoems(),
                    getAccordionLovePoems(),
                    getAccordionMiscPoems(),
                ]);
                setAccordionItems(
                    response[0].map((category, i) => {
                        const poems = response[i + 1];
                        return {
                            category,
                            poems,
                        };
                    })
                );
                setIsLoading(false);
            } catch (err) {
                console.error(err);
                setIsLoading(false);
            }
        };
        fetchAccordionData();
    }, []);
    return (
        <div className="mx-auto px-8 py-10 sm:px-12 md:max-w-2xl lg:max-w-3xl lg:py-16 xl:max-w-5xl xl:py-20">
            <h1 className="mb-20 text-left font-serif text-4xl font-normal text-black lg:mb-28 lg:text-5xl xl:text-7xl">
                Произведения
            </h1>
            {isLoading ? (
                <SkeletonLoader />
            ) : accordionItems.length === 0 ? (
                <p className="text-xs text-black lg:text-sm 2xl:text-base">
                    Произошла ошибка.
                    <br /> Попробуйте перезагрузить страницу.
                </p>
            ) : (
                <div className="flex flex-col-reverse gap-20 md:flex-row">
                    <Accordion
                        isPoemOpen={isPoemOpen}
                        accordionItems={accordionItems}
                    />
                    {children}
                </div>
            )}
        </div>
    );
}
