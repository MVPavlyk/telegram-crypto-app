import {useLottie} from "lottie-react";

import PageLayout from "../../components/layouts/PageLayout";
import bgImage from '../../assets/home-bg.svg';
import logoAnimation from '../../assets/animations/Ninja Logo.json'
import progressAnimation from '../../assets/animations/Progress Bar.json'
import lightningAnimation from '../../assets/animations/Lightning.json'

const HomePage = () => {
    const progressOptions = {
        animationData: progressAnimation,
        loop: false,
        autoplay: true,
    };

    const logoOptions = {
        animationData: logoAnimation
    };
    const lightningOptions = {
        animationData: lightningAnimation
    };

    const {View: ProgressAnimation, setSpeed: setProgressSpeed} = useLottie(progressOptions);
    const {View: LogoAnimation, setSpeed: setLogoSpeed} = useLottie(logoOptions, {width: 260});
    const {View: LightningAnimation1} = useLottie(lightningOptions, {width: 530, height: 500});
    const {View: LightningAnimation2} = useLottie(lightningOptions, {width: 530, height: 500});
    const {View: LightningAnimation3} = useLottie(lightningOptions, {width: 530, height: 500});

    setProgressSpeed(0.4)
    setLogoSpeed(0.4)

    return (
        <PageLayout>
            <div className='absolute z-[1] w-screen h-screen top-0 left-0 overflow-hidden'>
                <img src={bgImage} alt="bg-img" className='w-screen absolute bottom-0'/>
            </div>
            <div className='h-screen w-screen relative z-[2] bottom-0'>
                <div className='h-[530px] w-[500px] absolute top-[-300px] right-[-40px]'>
                    {LightningAnimation1}
                </div>
                <div className='h-[530px] w-[500px] absolute top-[80px] right-[-250px] -rotate-45'>
                    {LightningAnimation2}
                </div>
                <div className='h-[530px] w-[500px] absolute top-[200px] right-[180px]'>
                    {LightningAnimation3}
                </div>
            </div>

            <div className='absolute z-[4] w-screen px-[35px] h-1/2 bottom-0 flex flex-col items-center pt-5 gap-y-5'>
                {LogoAnimation}
                {ProgressAnimation}
            </div>
        </PageLayout>
    );
};

export default HomePage;
