import Head from "next/head";
import Image from "next/image";

import Masonry from "react-masonry-css";

import Layout from "@/components/layout";

import { getCertificatesPage } from "@/lib/sanity.client";
import { urlFor, getDimensions } from "@/lib/sanity.image";

export default function Certificates({ certificates }) {
    console.log(certificates);
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
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
            <h2>Дипломы</h2>
            <Masonry
                breakpointCols={2}
                className="mx-auto flex w-4/6 gap-10"
                columnClassName=""
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
                            className="my-10 saturate-50 transition duration-300 hover:saturate-100"
                        />
                    );
                })}
            </Masonry>
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
