import Head from "next/head";
import AccordionLayout from "@/components/accordionLayout";
import Layout from "@/components/layout";

import { useEffect, useContext } from "react";
import { PoemContext } from "@/contexts/poemContext";

export default function Poems() {
    const { setIsPoemOpen } = useContext(PoemContext);

    useEffect(() => {
        setIsPoemOpen(false);
    }, []);

    return (
        <>
            <Head>
                <title>Произведения</title>
                <meta
                    name="description"
                    content="Станислав Дружинин - поэт, финалист литературных премий Наследие 2013 и Русь моя 2018. Стихи переведены на немецкий, венгерский, болгарский и итальянский языки."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
        </>
    );
}

Poems.getLayout = function (page) {
    return (
        <Layout>
            <AccordionLayout>{page}</AccordionLayout>
        </Layout>
    );
};
