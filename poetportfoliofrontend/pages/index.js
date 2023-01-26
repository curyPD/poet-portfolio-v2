import Head from "next/head";

export default function Home() {
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
            <h1 className="font-serif text-8xl text-black">
                Станислав Дружинин
            </h1>
        </>
    );
}
