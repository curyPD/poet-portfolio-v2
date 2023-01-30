import { useState } from "react";

import AccordionItem from "./accordionItem";

export default function Accordion(props) {
    const [activeItemId, setActiveItemId] = useState(null);

    function onItemClick(id) {
        if (id === activeItemId) {
            setActiveItemId(null);
            return;
        }
        setActiveItemId(id);
    }

    const accordionItemElements = props.accordionItems.map((item, i) => (
        <AccordionItem
            key={item.category._id}
            title={item.category.title}
            categoryId={item.category._id}
            active={activeItemId === item.category._id}
            handleClick={() => onItemClick(item.category._id)}
            poems={item.poems}
        />
    ));

    return (
        <div
            className={`flex-1 ${
                props.isPoemOpen ? "hidden" : "block"
            } md:block`}
        >
            <ol className="space-y-6 lg:space-y-7">{accordionItemElements}</ol>
        </div>
    );
}
