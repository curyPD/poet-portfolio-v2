import React, { useState, useEffect, useRef, useContext } from "react";
import { PoemContext } from "@/contexts/poemContext";

import { TfiPlus, TfiMinus } from "react-icons/tfi";

import NavLink from "./navLink";

export default function AccordionItem(props) {
    const [itemHeight, setItemHeight] = useState(null);
    const itemEl = useRef(null);
    const { isPoemOpen } = useContext(PoemContext);

    useEffect(() => {
        setItemHeight(itemEl.current?.scrollHeight);
    }, [isPoemOpen]);

    const styles = {
        height: props.active ? itemHeight : "0px",
    };

    const poemLinkElements = props.poems.map((poem) => (
        <NavLink
            key={poem._id}
            href={`/poems/${poem.slug?.current}`}
            onClick={(e) => e.stopPropagation()}
            className="font-sans text-xs text-black focus:outline-none focus-visible:text-neutral-500 lg:text-sm"
            activeClassName="text-black text-xs font-sans font-semibold lg:text-sm focus:outline-none focus-visible:text-neutral-500"
            scroll={false}
        >
            {poem.title}
        </NavLink>
    ));

    return (
        <li onClick={props.handleClick}>
            <button className="group flex cursor-pointer items-center gap-4 focus:outline-none lg:gap-7">
                {props.active ? (
                    <TfiMinus className="h-3 w-3 text-black group-focus-visible:text-neutral-500" />
                ) : (
                    <TfiPlus className="h-3 w-3 text-black group-focus-visible:text-neutral-500" />
                )}
                <p className="font-sans text-sm font-medium text-black group-focus-visible:text-neutral-500 lg:text-base">
                    {props.title}
                </p>
            </button>
            <div
                ref={itemEl}
                className={`overflow-hidden transition-all duration-200 ${
                    props.active ? "mt-8 mb-16" : ""
                }`}
                style={styles}
            >
                <nav className="ml-7 flex flex-col space-y-4 lg:ml-10 lg:space-y-5">
                    {poemLinkElements}
                </nav>
            </div>
        </li>
    );
}
