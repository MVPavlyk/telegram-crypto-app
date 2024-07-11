import React from "react";

const PageLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section className='w-full max-h-[100vh] flex items-center justify-center page-layout overflow-hidden'>
            {children}
        </section>
    );
};

export default PageLayout;