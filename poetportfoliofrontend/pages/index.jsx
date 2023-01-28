import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";

import { PortableText } from "@portabletext/react";

import { getHomePage } from "@/lib/sanity.client";
import { urlFor, getDimensions } from "@/lib/sanity.image";

export default function Home({ author }) {
    console.log(author);
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
            <h1>{author.name}</h1>
            <div>
                <PortableText value={author.bio} />
                <Image
                    src={urlFor(author.photo).url()}
                    alt="Фотография Станислава Дружинина"
                    width={width}
                    height={height}
                    priority
                />
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

// Главная (/)
// Дипломы (/certificates)
// Произведения (/poems)
// Стихотворение (/poems/[slug])
