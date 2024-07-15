import { Outlet } from "react-router-dom";

import React, {createContext, useState} from "react";

type TPageContext = {
    isLoadAnimationEnd: boolean,
    setIsLoadAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>
}

export const PageLoadContext = createContext<TPageContext | null>(null);

function App() {
    const [isLoadAnimationEnd, setIsLoadAnimationEnd] = useState(false)

    return (
        <PageLoadContext.Provider value={{isLoadAnimationEnd, setIsLoadAnimationEnd}}>
            <section>
                <Outlet/>
            </section>
        </PageLoadContext.Provider>

    )
}

export default App;
