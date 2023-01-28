import Layout from "@/components/layout";
import AccordionLayout from "@/components/accordionLayout";

import { getPoemPaths, getPoem } from "@/lib/sanity.client";

export default function Poem({ poem }) {
    const poemTextHTML = poem.content.replaceAll("\n", "<br />");
    return (
        <div>
            <h2>{poem.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: poemTextHTML }} />
        </div>
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
