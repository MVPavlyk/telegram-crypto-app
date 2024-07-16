import Lottie, { LottieRefCurrentProps, useLottie } from 'lottie-react';
import { DotLottiePlayer } from '@dotlottie/react-player';

import PageLayout from '../../components/layouts/PageLayout';
import bgImage from '../../assets/home-bg.svg';
import logoAnimation from '../../assets/animations/Ninja Logo.json';
import progressAnimation from '../../assets/animations/Progress Bar.json';
import eyeAnimation from '../../assets/animations/Full Eye Blink.json';
import fullAnimation from '../../assets/animations/Rain and Ligthning.lottie';
import { useContext, useEffect, useRef } from 'react';
import { PageLoadContext } from '../../App.tsx';

const HomePage = () => {
  const { isLoadAnimationEnd, setIsLoadAnimationEnd } = useContext(PageLoadContext) || {};

  const progressRef = useRef<LottieRefCurrentProps | null>(null);

  const progressOptions = {
    animationData: progressAnimation,
    loop: false,
    autoplay: true,
    lottieRef: progressRef,
    onComplete: () => {
      if (setIsLoadAnimationEnd) setIsLoadAnimationEnd(true);
    },
  };

  useEffect(() => {
    progressRef?.current?.setSpeed(0.3);
  }, [progressRef?.current]);

  const logoOptions = {
    animationData: logoAnimation,
  };

  const eyeOptions = {
    animationData: eyeAnimation,
  };

  const { View: LogoAnimation, setSpeed: setLogoSpeed } = useLottie(logoOptions, { width: 260 });
  const { View: EyeAnimation1 } = useLottie(eyeOptions, { width: '33.84vw' });
  const { View: EyeAnimation2 } = useLottie(eyeOptions, { width: '33.84vw' });

  setLogoSpeed(0.4);

  return (
    <PageLayout showNavigation={isLoadAnimationEnd}>
      <div className='absolute z-[1] w-screen h-screen top-0 left-0 overflow-hidden'>
        <img src={bgImage} alt='bg-img' className='w-screen absolute bottom-0 md:bottom-auto md:-top-[27.7vw]' />
        <div className='absolute left-[9.48vw] bottom-[142.8vw] md:bottom-auto md:top-[25.7vw]'>{EyeAnimation1}</div>
        <div className='absolute right-[9.48vw] bottom-[142.3vw] md:bottom-auto md:top-[26.1vw] mirror'>
          {EyeAnimation2}
        </div>
      </div>
      <div className='h-screen w-screen relative z-[2] left-0 bottom-0 overflow-hidden'>
        <div className='w-full h-full relative'>
          <div className='w-screen absolute top-0 left-0'>
            <DotLottiePlayer src={fullAnimation} loop autoplay />
          </div>
        </div>
      </div>
      <div className='absolute z-[4] w-screen px-[35px] min-h-[calc(50%-88px)] bottom-[88px] flex flex-col items-center pt-5'>
        {LogoAnimation}
        {!isLoadAnimationEnd && <Lottie style={{ marginTop: 20 }} {...progressOptions} />}
        {isLoadAnimationEnd && (
          <div className='w-full flex flex-col items-center gap-y-4'>
            <button className='h-20 max-w-[320px] w-full text-[30px] font-[600] default-btn'>Start Game</button>
            <p className='w-56 text-center text-xs text-[#4A4E64] sm:mt-14 sm:text-lg sm:w-80'>
              to join the game you need to have a few coins at balance at press the button
            </p>
          </div>
        )}
      </div>
      {!isLoadAnimationEnd && (
        <div className='w-screen px-10 text-center text-[#4A4E64] text-xl absolute bottom-[50px] z-[4]'>
          Advice: If you are in room with 9 people always check your balance
        </div>
      )}
    </PageLayout>
  );
};

export default HomePage;
