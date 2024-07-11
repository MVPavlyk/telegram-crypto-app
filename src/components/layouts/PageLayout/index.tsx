import React from "react";
import NavBar from "../../modules/NavBar";

const PageLayout = ({children, showNavigation = true}: { children: React.ReactNode, showNavigation?: boolean }) => {
    return (
        <section className='w-full max-h-[100vh] flex items-center justify-center page-layout overflow-hidden'>
            {children}
            {showNavigation && <NavBar/>}
        </section>
    );
};

export default PageLayout;