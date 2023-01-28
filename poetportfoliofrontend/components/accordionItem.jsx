import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";

export default function AccordionItem(props) {
    const [itemHeight, setItemHeight] = useState(null);
    const itemEl = useRef(null);

    useEffect(() => {
        setItemHeight(itemEl.current.scrollHeight);
    }, []);

    const styles = {
        height: props.active ? itemHeight : "0px",
    };

    const poemLinkElements = props.poems.map((poem) => (
        <li key={poem._id}>
            <Link href={`/poems/${poem.slug?.current}`}>{poem.title}</Link>
        </li>
    ));

    return (
        <li onClick={props.handleClick}>
            <p>{props.title}</p>
            <div ref={itemEl} className="overflow-hidden" style={styles}>
                <ul>{poemLinkElements}</ul>
            </div>
        </li>
    );
    // const titles = props.titleEntries.map((titleEntry, i) => (
    //         <li key={i} className="mb-3 text-sm md:text-base">
    //             <button
    //             className={`transition-colors focus:text-orange-400 focus:outline-none ${
    //                 props.curPoem?.title === titleEntry[1]
    //                     ? "font-medium text-orange-400"
    //                     : "text-gray-700 hover:text-gray-500"
    //             }`}
    //             onClick={() =>
    //                 props.setCurPoem(props.categoryId, titleEntry[0])
    //             }
    //         >
    //             {titleEntry[1]}
    //         </button>
    //     </li>
    // ));

    // return (
    //     <article>
    //         <div
    //             onClick={props.handleClick}
    //             className="mb-2 block cursor-pointer py-2 sm:inline-block"
    //         >
    //             <button className="group flex items-center gap-3 focus:outline-none">
    //                 {props.active ? (
    //                     <HiOutlineMinus className="text-base text-orange-400 sm:text-lg" />
    //                 ) : (
    //                     <HiOutlinePlus className="text-base text-orange-400 sm:text-lg" />
    //                 )}
    //                 <h4 className="text-base font-medium text-gray-700 transition-colors group-focus:text-gray-600/90 sm:text-lg xl:text-xl">
    //                     {props.heading}
    //                 </h4>
    //             </button>
    //         </div>

    //         <div
    //             ref={itemEl}
    //             className={`overflow-hidden transition-all duration-300 ${
    //                 props.active ? "mb-3 mt-1" : ""
    //             }`}
    //             style={styles}
    //         >
    //             <ul className="ml-7 sm:ml-10">{titles}</ul>
    //         </div>
    //     </article>
    // );
}
