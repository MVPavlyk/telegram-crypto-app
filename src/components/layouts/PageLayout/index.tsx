import React from "react";
import NavBar from "../../modules/NavBar";

const PageLayout = ({children, showNavigation = true}: { children: React.ReactNode, showNavigation?: boolean }) => {
    return (
        <section className='w-full min-h-max flex items-center justify-center page-layout'>
            {children}
            {showNavigation && <NavBar/>}
        </section>
    );
};

export default PageLayout;