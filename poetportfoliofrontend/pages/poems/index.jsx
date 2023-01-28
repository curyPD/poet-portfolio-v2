import AccordionLayout from "@/components/accordionLayout";
import Layout from "@/components/layout";

export default function Poems() {
    return null;
}

Poems.getLayout = function (page) {
    return (
        <Layout>
            <AccordionLayout>{page}</AccordionLayout>
        </Layout>
    );
};
