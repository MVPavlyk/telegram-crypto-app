import PageLayout from "../../components/layouts/PageLayout";
import bgImage from '../../assets/home-bg.svg';

const HomePage = () => {

    return (
        <PageLayout>
            <div className='absolute w-screen h-screen top-0 left-0 overflow-hidden'>
                <img src={bgImage} alt="bg-img" className='w-screen'/>
            </div>
        </PageLayout>
    );
};

export default HomePage;
