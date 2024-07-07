import React from "react";

const PageLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section className='w-full h-screen bg-main-white flex items-center justify-center pb-20'>
            {children}
        </section>
    );
};

export default PageLayout;