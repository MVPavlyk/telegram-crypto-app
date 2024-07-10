import PageLayout from "../../components/layouts/PageLayout";

const HomePage = () => {

    function play() {
        const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
    }

    return (
        <PageLayout>
            <div className='main-page-bg w-full h-full'/>
            <button className='absolute top-20 left-20 z-10' onClick={play}>test</button>
        </PageLayout>
    );
};

export default HomePage;
