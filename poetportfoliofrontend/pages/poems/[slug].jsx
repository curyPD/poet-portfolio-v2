import Layout from "@/components/layout";
import AccordionLayout from "@/components/accordionLayout";

export default function Poem() {
    return <div>Poem</div>;
}

Poem.getLayout = function (page) {
    return (
        <Layout>
            <AccordionLayout>{page}</AccordionLayout>
        </Layout>
    );
};
