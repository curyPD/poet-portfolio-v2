import "@/styles/globals.css";

import { Raleway, Noto_Serif_Display } from "@next/font/google";

const raleway = Raleway({
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ["cyrillic"],
    variable: "--font-serif",
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-sans: ${raleway.style.fontFamily};
                    --font-serif: ${notoSerifDisplay.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
