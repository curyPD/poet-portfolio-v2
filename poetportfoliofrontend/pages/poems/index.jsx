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
                <title>Станислав Дружинин - Произведения</title>
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
