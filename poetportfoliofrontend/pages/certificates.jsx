import Head from "next/head";
import Image from "next/image";

import Masonry from "react-masonry-css";

import Layout from "@/components/layout";

import { getCertificatesPage } from "@/lib/sanity.client";
import { urlFor, getDimensions } from "@/lib/sanity.image";

export default function Certificates({ certificates }) {
    console.log(certificates);
    const breakpointColumnsObj = {
        default: 2,
        767: 1,
    };
    return (
        <>
            <Head>
                <title>Дипломы</title>
                <meta
                    name="description"
                    content="Станислав Дружинин - поэт, финалист литературных премий Наследие 2013 и Русь моя 2018. Стихи переведены на немецкий, венгерский, болгарский и итальянский языки."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="mx-auto max-w-sm px-8 py-10 sm:px-12 md:max-w-xl lg:max-w-3xl lg:py-16 xl:max-w-5xl xl:py-20">
                <h1 className="mb-20 text-center font-serif text-4xl text-black lg:mb-28 lg:text-5xl xl:text-7xl">
                    Дипломы
                </h1>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-6 lg:gap-9 xl:gap-10"
                >
                    {certificates.map((certificate, i) => {
                        const [width, height] = getDimensions(
                            certificate.image.asset._ref
                        );
                        return (
                            <Image
                                key={certificate._id}
                                src={urlFor(certificate.image).url()}
                                alt={certificate.image.caption}
                                width={width}
                                height={height}
                                priority={i <= 4 ? true : false}
                                className="my-10 first:mt-0 md:my-6 lg:my-9 xl:my-10"
                            />
                        );
                    })}
                </Masonry>
            </div>
        </>
    );
}

Certificates.getLayout = function (page) {
    return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
    const certificates = await getCertificatesPage();

    return {
        props: {
            certificates,
        },
    };
}
