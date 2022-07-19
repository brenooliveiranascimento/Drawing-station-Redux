import React, { useContext, useLayoutEffect, useCallback } from 'react';
import { Background } from '../../StylesGerais';
import { Image, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { AnimationContext } from '../../Contexts/animation';

export default function LoadingPage() {
  const {
    logoAnimation,
    loadingAnimation,
    callAnimation,
  } = useContext(AnimationContext);
  useLayoutEffect(
    useCallback(() => {
      callAnimation()
      setTimeout(() => {
        loadingAnimation()
      }, 4000)
    })
  )
 return (
   <Background
    source={require('../../assets/novosFUndos/layered-waves-haikei.png')}
   >
     <Animated.Image
        style={{width: logoAnimation, height: 100}}
        source={require('../../assets/LogoCruasemFundo.png')}
        />
      <LottieView
        style={{width: 350, marginBottom:150}}
        source={require('../../Lottie/animationData.json')}
        autoPlay
      />
   </Background>
  );
}