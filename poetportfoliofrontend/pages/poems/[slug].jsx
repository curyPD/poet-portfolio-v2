import { useState, useEffect, useRef, useContext } from "react";
import { PoemContext } from "@/contexts/poemContext";

import Head from "next/head";
import Link from "next/link";

import { TfiAngleLeft } from "react-icons/tfi";

import Layout from "@/components/layout";
import AccordionLayout from "@/components/accordionLayout";

import { getPoemPaths, getPoem } from "@/lib/sanity.client";

export default function Poem({ poem }) {
    const [poemHeight, setPoemHeight] = useState(0);
    const [parentHeight, setParentHeight] = useState(0);
    const [parentStyle, setParentStyle] = useState("");
    const [sticky, setSticky] = useState(false);
    const [poemTextHTML, setPoemTextHTML] = useState("");

    const articleRef = useRef(null);

    const { setIsPoemOpen } = useContext(PoemContext);

    useEffect(() => {
        setSticky(false);
        let minHeight;
        if (poemHeight && parentHeight) {
            minHeight = parentHeight - poemHeight;
        }
        const { height: poemH } = articleRef.current.getBoundingClientRect();
        const { y } = articleRef.current.parentElement.getBoundingClientRect();
        const normalParentHeight =
            minHeight ||
            articleRef.current.parentElement.getBoundingClientRect().height;
        setPoemHeight(poemH);
        setParentHeight(normalParentHeight + poemH);
        setParentStyle(`${normalParentHeight}px`);
        if (poemH < window.innerHeight) {
            setSticky(true);
        }
        if (y >= 0) return;
        setParentStyle(`${Math.abs(y) + poemH}px`);
        if (poemH >= window.innerHeight) {
            articleRef.current.parentElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [poem, poemHeight, parentHeight]);

    useEffect(() => {
        poem && setIsPoemOpen(true);
        setPoemTextHTML(poem.content.replaceAll("\n", "<br />"));
    }, [poem]);

    const styles = {
        minHeight: parentStyle,
    };

    return (
        <>
            <Head>
                <title>Станислав Дружинин - {poem.title}</title>
            </Head>
            <div className="flex-1" style={parentStyle ? styles : {}}>
                <Link
                    href="/poems"
                    className="group mb-6 flex items-center gap-2 focus:outline-none md:hidden"
                >
                    <TfiAngleLeft className="h-2 w-2 text-black group-focus-visible:text-neutral-500" />
                    <span className="font-sans text-xs text-black group-focus-visible:text-neutral-500">
                        Темы
                    </span>
                </Link>

                <article
                    ref={articleRef}
                    className={sticky ? "lg:sticky lg:top-4" : ""}
                >
                    <h2 className="mb-4 font-sans text-sm font-medium text-black lg:mb-5 lg:text-base">
                        {poem.title}
                    </h2>
                    <p
                        className="prose prose-hr:m-0 prose-hr:w-1/2 lg:prose-sm"
                        dangerouslySetInnerHTML={{ __html: poemTextHTML }}
                    />
                </article>
            </div>
        </>
    );
}

Poem.getLayout = function (page) {
    return (
        <Layout>
            <AccordionLayout>{page}</AccordionLayout>
        </Layout>
    );
};

export async function getStaticPaths() {
    const slugs = await getPoemPaths();
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const poem = await getPoem(params.slug);

    return {
        props: {
            poem,
        },
    };
}
