import Link from "next/link";
import { useRouter } from "next/router";
import { pathToRegexp } from "path-to-regexp";

export default function NavLink({
    href,
    as,
    exact,
    className,
    activeClassName,
    children,
    ...props
}) {
    const router = useRouter();
    const { asPath } = router;
    const isActive = pathToRegexp(as || href, [], {
        sensitive: true,
        end: !!exact,
    }).test(asPath);

    const linkClassName = isActive ? activeClassName : className;

    return (
        <Link href={href} as={as} {...props} className={linkClassName}>
            {children}
        </Link>
    );
}
