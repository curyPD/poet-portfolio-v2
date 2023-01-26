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
            <h1 className="mb-20 font-serif text-8xl text-black">
                Станислав Дружинин
            </h1>
            <p className="w-96 font-sans text-base text-black">
                Поэт, финалист литературных премий{" "}
                <a
                    className="relative after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-1 after:w-full after:origin-left after:-translate-y-1/2 after:scale-x-75 after:bg-amber-100 after:transition-transform hover:after:scale-x-100"
                    href="https://premianasledie.ru/"
                    target="_blank"
                >
                    “Наследие”
                </a>{" "}
                2013 и{" "}
                <a
                    className="relative after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-1 after:w-full after:origin-left after:-translate-y-1/2 after:scale-x-75 after:bg-amber-100 after:transition-transform hover:after:scale-x-100"
                    href="https://eseninpremia.ru/"
                    target="_blank"
                >
                    “Русь моя”
                </a>{" "}
                2018. Стихи переведены на немецкий, венгерский, болгарский и
                итальянский языки.
            </p>
        </>
    );
}
