import Head from "next/head";
import Image from "next/image";

import { useMemo } from "react";

import Layout from "@/components/layout";

import { PortableText } from "@portabletext/react";

import { getHomePage } from "@/lib/sanity.client";
import { urlFor, getDimensions } from "@/lib/sanity.image";

export default function Home({ author }) {
    const portableTextComponents = useMemo(() => {
        return {
            marks: {
                link: ({ value, children }) => (
                    <a
                        href={value?.href}
                        target="_blank"
                        className="relative whitespace-nowrap font-sans text-black selection:text-neutral-500 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-[3px] after:w-4/6 after:-translate-y-1/4 after:bg-amber-100 after:transition-all after:duration-200 hover:after:w-full focus:outline-none focus-visible:text-neutral-500 lg:after:h-1 lg:after:-translate-y-0"
                    >
                        {children}
                    </a>
                ),
            },
            block: {
                normal: ({ children }) => (
                    <p className="mb-14 ml-auto w-11/12 max-w-sm text-right font-sans text-xs leading-relaxed text-black sm:ml-0 sm:mb-0 sm:w-5/6 sm:justify-self-end sm:text-left lg:text-sm lg:leading-loose xl:justify-self-center">
                        {children}
                    </p>
                ),
            },
        };
    }, []);
    const [width, height] = getDimensions(author.photo.asset._ref);
    return (
        <>
            <Head>
                <title>Станислав Дружинин</title>
                <meta
                    name="description"
                    content="Станислав Дружинин - поэт, финалист литературных премий Наследие 2013 и Русь моя 2018. Стихи переведены на немецкий, венгерский, болгарский и итальянский языки."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="grid grid-cols-1 px-8 py-12 sm:ml-auto sm:max-w-3xl sm:grid-cols-2 sm:px-12 lg:max-w-4xl xl:max-w-6xl xl:py-20 xl:px-20 xl:pl-0">
                <h1 className="mb-20 text-right font-serif text-5xl text-black sm:col-span-2 sm:mb-28 sm:text-6xl lg:mb-36 lg:text-7xl xl:text-8xl">
                    {author.name}
                </h1>

                <PortableText
                    value={author.bio}
                    components={portableTextComponents}
                />
                <div className="group relative w-44 justify-self-end lg:w-52">
                    <Image
                        src={urlFor(author.photo).url()}
                        alt="Фотография Станислава Дружинина"
                        width={width}
                        height={height}
                        priority
                        className="xl:brightness-110 xl:saturate-0 xl:transition-all xl:duration-300 xl:group-hover:brightness-100 xl:group-hover:saturate-100"
                    />
                    <div className="absolute top-0 left-0 -z-10 h-full w-full -translate-x-4 translate-y-4 border-2 border-amber-100 xl:translate-x-4 xl:-translate-y-4 xl:bg-amber-100 xl:duration-300 xl:group-hover:-translate-x-4 xl:group-hover:translate-y-4 xl:group-hover:bg-transparent">
                        &nbsp;
                    </div>
                </div>
            </div>
        </>
    );
}

Home.getLayout = function (page) {
    return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
    const author = await getHomePage();

    return {
        props: {
            author,
        },
    };
}
