import Accordion from "./accordion";

export default function AccordionLayout({ children }) {
    return (
        <>
            <Accordion />
            {children}
        </>
    );
}
