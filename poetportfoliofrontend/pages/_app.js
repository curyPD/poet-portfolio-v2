import "@/styles/globals.css";

import { Raleway, Playfair_Display } from "@next/font/google";

const raleway = Raleway({
    subsets: ["cyrillic"],
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
            <style jsx global>{`
                :root {
                    --font-sans: ${raleway.style.fontFamily};
                    --font-serif: ${notoSerifDisplay.style.fontFamily};
                }
            `}</style>
            {getLayout(<Component {...pageProps} />)}
        </>
    );
}
