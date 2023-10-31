// components/Loading.js

import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

// Crie uma animação de rotação
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilize o componente Loading
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingIcon = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
  font-size: 48px;
  color: #FA240F;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon />
    </LoadingContainer>
  );
};

export default Loading;
