import { createContext, useState } from "react";

export const PoemContext = createContext(null);

export default function PoemContextProvider({ children }) {
    const [isPoemOpen, setIsPoemOpen] = useState(false);

    return (
        <PoemContext.Provider value={{ isPoemOpen, setIsPoemOpen }}>
            {children}
        </PoemContext.Provider>
    );
}
