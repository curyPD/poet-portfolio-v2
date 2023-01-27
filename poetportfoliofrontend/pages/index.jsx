import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";

import { PortableText } from "@portabletext/react";

import { getHomePageAuthor } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";

export default function Home({ author }) {
    console.log(author);
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
            <div>Home</div>
            <div>
                <PortableText value={author.bio} />
            </div>
            {/* <div>
                {certificates?.map((certificate, i) => {
                    const [width, height] = certificate.image.asset._ref
                        .split("-")
                        .at(2)
                        .split("x");
                    return (
                        <Image
                            src={urlFor(certificate.image).url()}
                            alt={certificate.image.caption}
                            width={width}
                            height={height}
                            key={certificate._id}
                            priority={i <= 4 ? true : false}
                        />
                    );
                })}
            </div> */}
        </>
    );
}

Home.getLayout = function (page) {
    return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
    const author = await getHomePageAuthor();

    return {
        props: {
            author,
        },
    };
}
