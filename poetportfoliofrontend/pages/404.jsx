import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404: Страница не найдена</title>
            </Head>
            <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center">
                <p className="mb-2 font-sans text-2xl font-semibold text-black">
                    404
                </p>
                <p className="mb-11 font-sans text-base font-normal text-black">
                    Страница не найдена
                </p>
                <Link
                    className="flex items-center gap-3 font-sans text-sm font-normal text-black focus:outline-none focus-visible:text-neutral-500"
                    href="/"
                >
                    <span>&larr;</span>
                    <span>На Главную</span>
                </Link>
            </div>
        </>
    );
}
