import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ru">
            <Head />
            <body className="relative min-h-screen pb-16 selection:bg-amber-100 lg:pb-28">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
