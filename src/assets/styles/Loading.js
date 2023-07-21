import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircleLoader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid #6CD05C;
  animation: ${spinAnimation} 1.5s linear infinite;
`;

const LoadingCircle = () => {
  return <CircleLoader />;
};

export default LoadingCircle;