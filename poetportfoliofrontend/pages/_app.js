import "@/styles/globals.css";

import Head from "next/head";

import PoemContextProvider from "@/contexts/poemContext";

import { Raleway, Playfair_Display } from "@next/font/google";

const raleway = Raleway({
    subsets: ["cyrillic", "latin"],
    variable: "--font-sans",
});

const notoSerifDisplay = Playfair_Display({
    subsets: ["cyrillic"],
    variable: "--font-serif",
});

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Станислав Дружинин - поэт, финалист литературных премий Наследие 2013 и Русь моя 2018. Стихи переведены на немецкий, венгерский, болгарский и итальянский языки."
                    key="desc"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="og:title"
                    content="Станислав Дружинин"
                    key="ogtitle"
                />
                <meta
                    property="og:description"
                    content="Станислав Дружинин - поэт, финалист литературных премий Наследие 2013 и Русь моя 2018. Стихи переведены на немецкий, венгерский, болгарский и итальянский языки."
                    key="ogdesc"
                />
                <meta
                    property="og:image"
                    content="/ogimage.png"
                    key="ogimage"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <style jsx global>{`
                :root {
                    --font-sans: ${raleway.style.fontFamily};
                    --font-serif: ${notoSerifDisplay.style.fontFamily};
                }
            `}</style>
            <PoemContextProvider>
                {getLayout(<Component {...pageProps} />)}
            </PoemContextProvider>
        </>
    );
}
