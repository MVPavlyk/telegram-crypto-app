import React from "react";

const PageLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section className='w-full h-screen flex items-center justify-center pb-20 page-layout pb-[82px]'>
            {children}
        </section>
    );
};

export default PageLayout;