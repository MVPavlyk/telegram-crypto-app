import React, { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps, useLottie } from 'lottie-react';
import { DotLottiePlayer } from '@dotlottie/react-player';

import bgImage from '../../../../assets/home-bg.svg';
import logoAnimation from '../../../../assets/animations/Ninja Logo.json';
import progressAnimation from '../../../../assets/animations/Progress Bar.json';
import eyeAnimation from '../../../../assets/animations/Full Eye Blink.json';
import fullAnimation from '../../../../assets/animations/Rain & Lightning.lottie';

interface Props {
  isLoading?: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NinjaScreen = ({ isLoading, setIsLoading }: Props) => {
  const progressRef = useRef<LottieRefCurrentProps | null>(null);

  const progressOptions = {
    animationData: progressAnimation,
    loop: false,
    autoplay: true,
    lottieRef: progressRef,
    onComplete: () => setIsLoading(false),
  };

  useEffect(() => {
    progressRef?.current?.setSpeed(0.3);
  }, [progressRef?.current]);
  const logoOptions = {
    animationData: logoAnimation,
    // TODO: add speed
    speed: 0.4,
  };

  const eyeOptions = {
    animationData: eyeAnimation,
  };

  const { View: LogoAnimation } = useLottie(logoOptions, { width: 260 });
  const { View: EyeAnimationFirst } = useLottie(eyeOptions, { width: '33.84vw' });
  const { View: EyeAnimationSecond } = useLottie(eyeOptions, { width: '33.84vw' });

  return (
    <>
      <div className='absolute z-[1] w-screen h-screen top-0 left-0 overflow-hidden'>
        <img src={bgImage} alt='bg-img' className='w-screen absolute md:bottom-auto md:-top-[27.7vw]' />
        <div className='absolute left-[9.48vw] bottom-[142.8vw] md:bottom-auto md:top-[25.7vw]'>
          {EyeAnimationFirst}
        </div>
        <div className='absolute right-[9.48vw] bottom-[142.3vw] md:bottom-auto md:top-[26.1vw] mirror'>
          {EyeAnimationSecond}
        </div>
      </div>
      <div className='h-screen w-screen relative z-[2] left-0 bottom-0 overflow-hidden'>
        <div className='w-full h-full relative'>
          <div className='w-screen absolute top-0 left-0'>
            <DotLottiePlayer src={fullAnimation} loop autoplay />
          </div>
        </div>
      </div>
      <div className='absolute z-[4] w-screen px-[35px] logo-wrapper min-h-[calc(50%-88px)] bottom-[88px] flex flex-col items-center pt-5'>
        {LogoAnimation}
        {isLoading ? (
          <Lottie style={{ marginTop: 20 }} {...progressOptions} />
        ) : (
          <div className='w-full flex flex-col items-center gap-y-4'>
            <button className='h-20 max-w-[320px] w-full text-[30px] font-[600] default-btn'>Start Game</button>
            <p className='w-56 text-center text-xs text-[#4A4E64] sm:mt-14 sm:text-lg sm:w-80'>
              to join the game you need to have a few coins at balance at press the button
            </p>
          </div>
        )}
      </div>
      {isLoading && (
        <div className='home-advice w-screen px-10 text-center text-[#4A4E64] text-sm xs:text-xl absolute bottom-5 xs:bottom-[50px] z-[4]'>
          Advice: If you are in room with 9 people always check your balance
        </div>
      )}
    </>
  );
};
