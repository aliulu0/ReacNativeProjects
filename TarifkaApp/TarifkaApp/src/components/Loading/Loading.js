import React from 'react';
import Lottie from 'lottie-react-native';
('lottie-react-native');

function Loading() {
  return <Lottie source={require('../../assets/loading.json')} autoPlay loop />;
}
export default Loading;
